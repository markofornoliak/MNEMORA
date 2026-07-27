import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: 'cpp',
  name: 'C++',
  shortName: 'C++',
  tagline: 'Управление ресурсами, алгоритмическая точность и производительность',
  description: 'Трек формирует системное мышление: компиляция и типы, функции и ссылки, контейнеры и время жизни объектов, RAII, STL и оценка сложности. Главный акцент — предсказуемое владение ресурсами и осознанный выбор алгоритмов.',
  level: 'От первого бинарного файла до безопасной работы с ресурсами',
  estimatedHours: 24,
  outcome: 'Вы сможете писать типобезопасные программы, выбирать контейнеры и алгоритмы STL, понимать время жизни объектов и избегать типичных ошибок управления памятью.',
  skills: ['Компиляция', 'Типы', 'Функции', 'Ссылки', 'Контейнеры', 'RAII', 'STL', 'Сложность'],
  projects: [
    {
      id: 'cpp-telemetry-engine',
      title: 'Telemetry Engine',
      summary: 'Консольный процессор измерений с функциями, строгими типами и агрегированием результатов.',
      duration: '3–4 ч',
      difficulty: 'beginner',
      deliverables: ['Функции и параметры', 'Вектор измерений', 'Статистика и форматирование']
    },
    {
      id: 'cpp-resource-vault',
      title: 'Resource Vault',
      summary: 'Менеджер объектов с явным временем жизни, RAII и безопасными операциями над коллекциями.',
      duration: '5–7 ч',
      difficulty: 'intermediate',
      deliverables: ['Конструкторы и деструкторы', 'Умные указатели', 'Безопасное владение']
    },
    {
      id: 'cpp-route-optimizer',
      title: 'Route Optimizer',
      summary: 'Алгоритмический модуль поиска и ранжирования маршрутов с измерением сложности и производительности.',
      duration: '8–11 ч',
      difficulty: 'advanced',
      deliverables: ['STL algorithms', 'Компараторы', 'Оценка сложности и профилирование']
    }
  ],
  runner: 'simulated',
  editorLanguage: 'cpp',
  icon: '⟡',
  color: '#62a8ff',
  secondaryColor: '#3148a8',
  location: sceneLocations.cpp,
  worlds: [
    {
      id: 'core-mechanics',
      trackId: 'cpp',
      order: 1,
      title: 'Механика ядра',
      subtitle: 'Компиляция, типы и функции',
      description: 'Поймите путь от исходного кода до программы и научитесь выражать логику через строгие типы.',
      icon: 'Ⅰ',
      skills: ['main и cout', 'типы', 'ветвления', 'функции'],
      artifact: 'Процессор телеметрии'
    },
    {
      id: 'memory-engine',
      trackId: 'cpp',
      order: 2,
      title: 'Двигатель памяти',
      subtitle: 'Контейнеры и время жизни',
      description: 'Работайте с коллекциями, ссылками и ресурсами без утечек и неопределённого поведения.',
      icon: 'Ⅱ',
      skills: ['vector', 'references', 'классы', 'RAII'],
      artifact: 'Безопасное хранилище объектов'
    },
    {
      id: 'algorithm-array',
      trackId: 'cpp',
      order: 3,
      title: 'Алгоритмический массив',
      subtitle: 'STL, шаблоны и сложность',
      description: 'Используйте стандартные алгоритмы и оценивайте стоимость вычислений до оптимизации.',
      icon: 'Ⅲ',
      skills: ['STL', 'итераторы', 'шаблоны', 'Big O'],
      artifact: 'Модуль поиска и ранжирования'
    }
  ]
};

export default track;
