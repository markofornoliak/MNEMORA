export type LanguageId = 'python' | 'javascript' | 'html-css' | 'java' | 'cpp';
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type RunnerKind = 'python' | 'javascript' | 'html' | 'simulated';

export interface ThreeDLocation {
  position: [number, number, number];
  accent: string;
  secondary: string;
  structure: 'orb' | 'ring' | 'spire' | 'crystal' | 'reactor';
  scale: number;
  orbitRadius: number;
}

export interface TaskValidator {
  kind: 'exact-output' | 'contains-output' | 'html-contains' | 'code-pattern';
  expected?: string;
  patterns?: string[];
}

export interface Task {
  id: string;
  title: string;
  prompt: string;
  starterCode: string;
  solutionHint: string;
  validator: TaskValidator;
  xp: number;
  bonus?: boolean;
}

export interface TheorySection {
  heading: string;
  body: string;
  code?: string;
}

export interface Lesson {
  id: string;
  trackId: LanguageId;
  worldId: string;
  order: number;
  title: string;
  subtitle: string;
  duration: number;
  difficulty: Difficulty;
  objectives: string[];
  theory: TheorySection[];
  starterCode: string;
  expectedOutput: string;
  tasks: Task[];
  bonusTask: Task;
}

export interface World {
  id: string;
  trackId: LanguageId;
  order: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  skills: string[];
  artifact: string;
}

export interface ProjectBrief {
  id: string;
  title: string;
  summary: string;
  duration: string;
  difficulty: Difficulty;
  deliverables: string[];
}

export interface Trek {
  id: LanguageId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  level: string;
  estimatedHours: number;
  outcome: string;
  skills: string[];
  projects: ProjectBrief[];
  runner: RunnerKind;
  editorLanguage: LanguageId;
  icon: string;
  color: string;
  secondaryColor: string;
  worlds: World[];
  location: ThreeDLocation;
}

export interface CourseRegistry {
  tracks: Trek[];
  lessons: Lesson[];
  lessonsByTrack: Record<LanguageId, Lesson[]>;
}
