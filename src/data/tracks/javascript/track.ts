import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: "javascript",
  name: "JavaScript",
  shortName: "JS",
  tagline: "Динамический двигатель браузера и интерактивных систем",
  description: "Трек MNEMORA: Динамический двигатель браузера и интерактивных систем. Последовательность построена от базовых сигналов к самостоятельной архитектуре.",
  runner: "javascript",
  editorLanguage: "javascript",
  icon: "✦",
  color: "#ffd44a",
  secondaryColor: "#8c6412",
  location: sceneLocations["javascript"],
  worlds: [
    { id: "runtime-sparks", trackId: "javascript", order: 1, title: "Искры рантайма", subtitle: "Синтаксис и управление потоком", description: "Запустите интерактивное ядро языка.", icon: "Ⅰ" },
    { id: "data-streams", trackId: "javascript", order: 2, title: "Потоки данных", subtitle: "Массивы, объекты и функции", description: "Соберите данные в управляемые потоки.", icon: "Ⅱ" },
    { id: "interface-logic", trackId: "javascript", order: 3, title: "Контур интерфейса", subtitle: "Асинхронность и архитектура", description: "Управляйте событиями и состоянием приложения.", icon: "Ⅲ" }
  ]
};

export default track;
