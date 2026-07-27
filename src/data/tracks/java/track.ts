import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: "java",
  name: "Java",
  shortName: "JV",
  tagline: "Строгие объектные системы и надёжная архитектура",
  description: "Трек MNEMORA: Строгие объектные системы и надёжная архитектура. Последовательность построена от базовых сигналов к самостоятельной архитектуре.",
  runner: "simulated",
  editorLanguage: "java",
  icon: "⌁",
  color: "#ff8a4c",
  secondaryColor: "#7f2d26",
  location: sceneLocations["java"],
  worlds: [
    { id: "object-forge", trackId: "java", order: 1, title: "Кузница объектов", subtitle: "Основы Java и ООП", description: "Соберите типобезопасные компоненты.", icon: "Ⅰ" },
    { id: "collections-grid", trackId: "java", order: 2, title: "Сетка коллекций", subtitle: "Массивы, коллекции и generics", description: "Организуйте данные в типобезопасные структуры.", icon: "Ⅱ" },
    { id: "reliability-reactor", trackId: "java", order: 3, title: "Реактор надёжности", subtitle: "Интерфейсы, ошибки и архитектура", description: "Сформируйте устойчивые контракты между компонентами.", icon: "Ⅲ" }
  ]
};

export default track;
