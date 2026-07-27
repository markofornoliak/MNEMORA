import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2022',
    sourcemap: true,
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three', '@react-three/fiber', '@react-three/drei'],
          editor: ['@uiw/react-codemirror'],
          react: ['react', 'react-dom', 'react-router-dom']
        }
      }
    }
  },
  worker: { format: 'es' },
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true
  }
});
