import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: 'javascript',
  name: 'JavaScript',
  shortName: 'JS',
  tagline: 'Динамический двигатель интерфейсов, событий и сетевых данных',
  description: 'Практический путь от выражений и функций до асинхронных сценариев и архитектуры состояния. Трек объясняет не только синтаксис, но и модель выполнения JavaScript: стек вызовов, события, преобразование данных и границы ответственности модулей.',
  level: 'От основ языка до архитектуры интерактивного приложения',
  estimatedHours: 20,
  outcome: 'Вы сможете писать предсказуемую логику интерфейса, преобразовывать данные, обрабатывать события и асинхронные операции, а также разделять приложение на небольшие модули.',
  skills: ['Выражения', 'Функции', 'Массивы', 'Объекты', 'DOM-мышление', 'События', 'Async / await', 'Состояние'],
  projects: [
    {
      id: 'js-signal-console',
      title: 'Signal Console',
      summary: 'Интерактивная панель команд с историей операций, фильтрацией и вычисляемыми показателями.',
      duration: '2–3 ч',
      difficulty: 'beginner',
      deliverables: ['Команды и функции', 'Массив истории', 'Форматированный вывод']
    },
    {
      id: 'js-data-pulse',
      title: 'Data Pulse',
      summary: 'Дашборд преобразования данных с фильтрами, сортировкой и устойчивой обработкой пустых состояний.',
      duration: '4–6 ч',
      difficulty: 'intermediate',
      deliverables: ['Map / filter / reduce', 'Модель состояния', 'Чистые функции и события']
    },
    {
      id: 'js-mission-control',
      title: 'Mission Control',
      summary: 'Асинхронное приложение, которое загружает данные, показывает статусы и корректно обрабатывает ошибки.',
      duration: '7–9 ч',
      difficulty: 'advanced',
      deliverables: ['Async / await', 'Loading и error states', 'Модульная архитектура']
    }
  ],
  runner: 'javascript',
  editorLanguage: 'javascript',
  icon: '✦',
  color: '#ffd44a',
  secondaryColor: '#8c6412',
  location: sceneLocations.javascript,
  worlds: [
    {
      id: 'runtime-sparks',
      trackId: 'javascript',
      order: 1,
      title: 'Искры рантайма',
      subtitle: 'Выражения и управление потоком',
      description: 'Разберитесь, как JavaScript вычисляет выражения, хранит значения и выбирает ветку выполнения.',
      icon: 'Ⅰ',
      skills: ['console', 'переменные', 'условия', 'циклы'],
      artifact: 'Интерактивный командный терминал'
    },
    {
      id: 'data-streams',
      trackId: 'javascript',
      order: 2,
      title: 'Потоки данных',
      subtitle: 'Массивы, объекты и функции',
      description: 'Преобразуйте коллекции без лишних мутаций и стройте переиспользуемые функции.',
      icon: 'Ⅱ',
      skills: ['массивы', 'объекты', 'методы коллекций', 'чистые функции'],
      artifact: 'Процессор телеметрии'
    },
    {
      id: 'interface-logic',
      trackId: 'javascript',
      order: 3,
      title: 'Контур интерфейса',
      subtitle: 'События, асинхронность и состояние',
      description: 'Организуйте реакцию приложения на действия пользователя и внешние данные.',
      icon: 'Ⅲ',
      skills: ['события', 'promise', 'async / await', 'state machine'],
      artifact: 'Асинхронная панель управления'
    }
  ]
};

export default track;
