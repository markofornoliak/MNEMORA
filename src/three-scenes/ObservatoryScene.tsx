import { Html, OrbitControls, Stars } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { sceneQuality, type QualityTier } from '../config/scene';
import type { LanguageId, Trek } from '../types/course';

interface ObservatorySceneProps {
  tracks: Trek[];
  quality: QualityTier;
  selectedId: LanguageId;
  onSelect: (id: LanguageId) => void;
}

function MemoryCore({ quality }: { quality: QualityTier }) {
  const group = useRef<THREE.Group | null>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (quality === 'low' ? 0.06 : 0.12);
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.25, quality === 'high' ? 4 : quality === 'medium' ? 2 : 1]} />
        <meshStandardMaterial color="#0b1835" emissive="#173f68" emissiveIntensity={1.4} roughness={0.25} metalness={0.7} wireframe={quality === 'low'} />
      </mesh>
      <mesh scale={1.35}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color="#56f1ff" transparent opacity={0.1} wireframe />
      </mesh>
      <pointLight color="#56f1ff" intensity={quality === 'high' ? 34 : 18} distance={14} decay={2} />
    </group>
  );
}

function Structure({ track, quality, selected, onSelect }: { track: Trek; quality: QualityTier; selected: boolean; onSelect: () => void }) {
  const group = useRef<THREE.Group | null>(null);
  const segments = sceneQuality[quality].segments;
  const [hovered, setHovered] = useState(false);
  useEffect(() => () => { document.body.style.cursor = 'default'; }, []);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * (0.15 + track.worlds.length * 0.01);
    group.current.position.y = track.location.position[1] + Math.sin(state.clock.elapsedTime * 0.65 + track.location.position[0]) * 0.14;
    const targetScale = track.location.scale * (selected ? 1.18 : hovered ? 1.08 : 1);
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08);
  });

  const commonMaterial = <meshStandardMaterial color={track.location.secondary} emissive={track.location.accent} emissiveIntensity={selected ? 1.5 : hovered ? 1 : 0.55} roughness={0.35} metalness={0.75} />;
  const structure = (() => {
    switch (track.location.structure) {
      case 'ring':
        return <><mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.95, 0.22, 12, segments]} />{commonMaterial}</mesh><mesh><octahedronGeometry args={[0.52, 1]} />{commonMaterial}</mesh></>;
      case 'spire':
        return <><mesh position={[0, 0.25, 0]}><coneGeometry args={[0.75, 2.2, segments]} />{commonMaterial}</mesh><mesh position={[0, -0.9, 0]} rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.75, 0.08, 8, segments]} />{commonMaterial}</mesh></>;
      case 'crystal':
        return <><mesh><octahedronGeometry args={[1.05, quality === 'high' ? 2 : 1]} />{commonMaterial}</mesh><mesh rotation={[0.4, 0.5, 0]} scale={1.35}><octahedronGeometry args={[1.05, 0]} /><meshBasicMaterial color={track.location.accent} transparent opacity={0.13} wireframe /></mesh></>;
      case 'reactor':
        return <><mesh><dodecahedronGeometry args={[0.86, quality === 'high' ? 2 : 0]} />{commonMaterial}</mesh><mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[1.15, 0.09, 8, segments]} />{commonMaterial}</mesh><mesh rotation={[0, Math.PI / 2, 0]}><torusGeometry args={[1.15, 0.06, 8, segments]} />{commonMaterial}</mesh></>;
      default:
        return <><mesh><sphereGeometry args={[0.85, segments, Math.max(12, Math.round(segments / 2))]} />{commonMaterial}</mesh><mesh rotation={[Math.PI / 2.7, 0.1, 0]}><torusGeometry args={[1.08, 0.05, 8, segments]} />{commonMaterial}</mesh></>;
    }
  })();

  return (
    <group ref={group} position={track.location.position} scale={track.location.scale} onClick={(event: { stopPropagation: () => void }) => { event.stopPropagation(); onSelect(); }} onPointerOver={(event: { stopPropagation: () => void }) => { event.stopPropagation(); setHovered(true); document.body.style.cursor = 'pointer'; }} onPointerOut={() => { setHovered(false); document.body.style.cursor = 'default'; }}>
      {structure}
      {[0, 1, 2].map((index) => {
        const angle = (index / 3) * Math.PI * 2;
        return <mesh key={index} position={[Math.cos(angle) * track.location.orbitRadius, Math.sin(angle * 2) * 0.18, Math.sin(angle) * track.location.orbitRadius]} scale={0.16}>
          <sphereGeometry args={[1, 10, 8]} /><meshBasicMaterial color={track.location.accent} />
        </mesh>;
      })}
      <Html center position={[0, 1.55, 0]} distanceFactor={8} style={{ pointerEvents: 'none' }}>
        <div className={`whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] backdrop-blur-md transition ${selected ? 'border-white/[0.35] bg-white/[0.15] text-white' : 'border-white/10 bg-black/[0.35] text-slate-300'}`}>{track.name}</div>
      </Html>
    </group>
  );
}

function CameraRig({ selected }: { selected: Trek }) {
  const progress = useRef(1);
  const lastId = useRef(selected.id);
  useEffect(() => {
    if (lastId.current !== selected.id) {
      progress.current = 1;
      lastId.current = selected.id;
    }
  }, [selected.id]);
  useFrame(({ camera }, delta) => {
    if (progress.current <= 0.01) return;
    const [x, y, z] = selected.location.position;
    const destination = new THREE.Vector3(x * 0.55 + 2.8, y + 2.1, z * 0.55 + 5.8);
    camera.position.lerp(destination, 1 - Math.pow(0.001, delta));
    const look = new THREE.Vector3(x, y, z);
    camera.lookAt(look);
    progress.current *= 0.92;
  });
  return null;
}

function Scene({ tracks, quality, selectedId, onSelect }: ObservatorySceneProps) {
  const selected = tracks.find((track) => track.id === selectedId) ?? tracks[0];
  const q = sceneQuality[quality];
  const fog = useMemo(() => new THREE.FogExp2('#05070f', quality === 'low' ? 0.025 : 0.016), [quality]);
  return (
    <>
      <primitive object={fog} attach="fog" />
      <ambientLight intensity={0.35} />
      <directionalLight position={[8, 12, 8]} intensity={1.1} color="#a5c7ff" />
      <Stars radius={55} depth={30} count={q.stars} factor={quality === 'low' ? 2 : 3} saturation={0.25} fade speed={quality === 'low' ? 0 : 0.35} />
      <MemoryCore quality={quality} />
      {tracks.map((track) => <Structure key={track.id} track={track} quality={quality} selected={track.id === selectedId} onSelect={() => onSelect(track.id)} />)}
      <CameraRig selected={selected} />
      <OrbitControls enablePan={false} minDistance={3.8} maxDistance={18} autoRotate={false} dampingFactor={0.06} enableDamping />
    </>
  );
}

export default function ObservatoryScene(props: ObservatorySceneProps) {
  const q = sceneQuality[props.quality];
  return (
    <Canvas role="img" aria-label="Интерактивная трёхмерная карта пяти языковых созвездий" dpr={[1, q.dpr]} camera={{ position: [0, 3.2, 10.5], fov: 48 }} gl={{ antialias: props.quality !== 'low', powerPreference: props.quality === 'high' ? 'high-performance' : 'default', alpha: false }}>
      <color attach="background" args={['#05070f']} />
      <Scene {...props} />
    </Canvas>
  );
}
