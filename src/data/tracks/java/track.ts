import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: 'java',
  name: 'Java',
  shortName: 'JV',
  tagline: 'Типобезопасные объектные системы и ясные архитектурные контракты',
  description: 'Трек объясняет Java через проектирование устойчивых моделей: точка входа и типы, классы и инкапсуляция, коллекции и generics, интерфейсы, исключения и разделение ответственности между компонентами.',
  level: 'От первой class до модульного объектного приложения',
  estimatedHours: 22,
  outcome: 'Вы сможете создавать классы с понятными инвариантами, выбирать коллекции, проектировать интерфейсы и собирать приложение из слабо связанных компонентов.',
  skills: ['Типы', 'Классы', 'Инкапсуляция', 'Коллекции', 'Generics', 'Интерфейсы', 'Исключения', 'Архитектура'],
  projects: [
    {
      id: 'java-student-registry',
      title: 'Student Registry',
      summary: 'Объектная модель студентов и курсов с валидацией, вычисляемыми показателями и понятным API.',
      duration: '3–4 ч',
      difficulty: 'beginner',
      deliverables: ['Классы и конструкторы', 'Инкапсуляция', 'Методы предметной логики']
    },
    {
      id: 'java-inventory-core',
      title: 'Inventory Core',
      summary: 'Типобезопасное ядро склада с коллекциями, поиском, сортировкой и обработкой ошибочных операций.',
      duration: '5–7 ч',
      difficulty: 'intermediate',
      deliverables: ['Collections API', 'Generics', 'Исключения и валидация']
    },
    {
      id: 'java-mission-platform',
      title: 'Mission Platform',
      summary: 'Модульное приложение с интерфейсами сервисов, несколькими реализациями и устойчивой моделью ошибок.',
      duration: '8–10 ч',
      difficulty: 'advanced',
      deliverables: ['Интерфейсы и полиморфизм', 'Слои приложения', 'Тестируемые контракты']
    }
  ],
  runner: 'simulated',
  editorLanguage: 'java',
  icon: '⌁',
  color: '#ff8a4c',
  secondaryColor: '#7f2d26',
  location: sceneLocations.java,
  worlds: [
    {
      id: 'object-forge',
      trackId: 'java',
      order: 1,
      title: 'Кузница объектов',
      subtitle: 'Типы, методы и основы ООП',
      description: 'Освойте структуру Java-программы и научитесь превращать требования предметной области в классы.',
      icon: 'Ⅰ',
      skills: ['class и main', 'типы', 'методы', 'инкапсуляция'],
      artifact: 'Объектная модель профиля'
    },
    {
      id: 'collections-grid',
      trackId: 'java',
      order: 2,
      title: 'Сетка коллекций',
      subtitle: 'Массивы, collections и generics',
      description: 'Выбирайте подходящую структуру данных и сохраняйте типобезопасность при работе с коллекциями.',
      icon: 'Ⅱ',
      skills: ['массивы', 'List и Map', 'generics', 'итерация'],
      artifact: 'Каталог объектов с поиском и сортировкой'
    },
    {
      id: 'reliability-reactor',
      trackId: 'java',
      order: 3,
      title: 'Реактор надёжности',
      subtitle: 'Контракты, ошибки и архитектура',
      description: 'Разделите систему на компоненты с явными интерфейсами и контролируемыми сценариями отказа.',
      icon: 'Ⅲ',
      skills: ['интерфейсы', 'полиморфизм', 'исключения', 'слои'],
      artifact: 'Модульное консольное приложение'
    }
  ]
};

export default track;
