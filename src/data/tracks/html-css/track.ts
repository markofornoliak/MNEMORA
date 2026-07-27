import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: 'html-css',
  name: 'HTML / CSS',
  shortName: 'UI',
  tagline: 'Семантическая структура, визуальная система и адаптивная композиция',
  description: 'Трек строит интерфейс как инженерную систему: сначала доступная семантика и информационная иерархия, затем каскад, layout и дизайн-токены, после чего — адаптивность, состояния и аккуратное движение.',
  level: 'От первого документа до адаптивного интерфейса',
  estimatedHours: 18,
  outcome: 'Вы сможете собирать доступные страницы, проектировать устойчивые сетки, управлять каскадом и создавать интерфейсы, которые хорошо работают на телефоне, планшете и большом экране.',
  skills: ['Семантика', 'Доступность', 'Каскад', 'Flexbox', 'Grid', 'Responsive', 'Design tokens', 'Motion'],
  projects: [
    {
      id: 'ui-profile-station',
      title: 'Profile Station',
      summary: 'Семантическая персональная страница с правильной иерархией, навигацией и доступными состояниями.',
      duration: '2–3 ч',
      difficulty: 'beginner',
      deliverables: ['Семантический каркас', 'Доступные ссылки и изображения', 'Базовая типографика']
    },
    {
      id: 'ui-data-atlas',
      title: 'Data Atlas',
      summary: 'Адаптивная страница-дашборд с карточками, сложной сеткой и системой визуальных токенов.',
      duration: '4–6 ч',
      difficulty: 'intermediate',
      deliverables: ['CSS Grid и Flexbox', 'Переменные и компоненты', 'Адаптивные breakpoints']
    },
    {
      id: 'ui-observatory-interface',
      title: 'Observatory Interface',
      summary: 'Полноценный интерфейс продукта с responsive-навигацией, состояниями, motion и accessibility-аудитом.',
      duration: '7–9 ч',
      difficulty: 'advanced',
      deliverables: ['Многоэкранная композиция', 'Focus и reduced motion', 'Полировка производительности']
    }
  ],
  runner: 'html',
  editorLanguage: 'html-css',
  icon: '◇',
  color: '#ff6b8b',
  secondaryColor: '#7141ff',
  location: sceneLocations['html-css'],
  worlds: [
    {
      id: 'semantic-hull',
      trackId: 'html-css',
      order: 1,
      title: 'Семантический корпус',
      subtitle: 'Структура документа и доступность',
      description: 'Создайте документ, который одинаково хорошо понимают браузер, поисковая система и экранный диктор.',
      icon: 'Ⅰ',
      skills: ['doctype', 'landmarks', 'заголовки', 'доступные атрибуты'],
      artifact: 'Семантическая страница-профиль'
    },
    {
      id: 'styling-spectrum',
      trackId: 'html-css',
      order: 2,
      title: 'Спектр стилей',
      subtitle: 'Каскад, типографика и layout',
      description: 'Соберите визуальную систему из токенов, сеток и переиспользуемых правил.',
      icon: 'Ⅱ',
      skills: ['каскад', 'box model', 'Flexbox', 'Grid'],
      artifact: 'Компонентная дизайн-система'
    },
    {
      id: 'responsive-habitat',
      trackId: 'html-css',
      order: 3,
      title: 'Адаптивная среда',
      subtitle: 'Responsive design, состояния и motion',
      description: 'Сделайте интерфейс устойчивым к разным экранам, способам ввода и пользовательским настройкам.',
      icon: 'Ⅲ',
      skills: ['media queries', 'fluid type', 'focus states', 'reduced motion'],
      artifact: 'Адаптивный продуктовый лендинг'
    }
  ]
};

export default track;
