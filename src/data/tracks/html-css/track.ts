import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: "html-css",
  name: "HTML / CSS",
  shortName: "UI",
  tagline: "Семантическая материя и визуальная физика веба",
  description: "Трек MNEMORA: Семантическая материя и визуальная физика веба. Последовательность построена от базовых сигналов к самостоятельной архитектуре.",
  runner: "html",
  editorLanguage: "html-css",
  icon: "◇",
  color: "#ff6b8b",
  secondaryColor: "#7141ff",
  location: sceneLocations["html-css"],
  worlds: [
    { id: "semantic-hull", trackId: "html-css", order: 1, title: "Семантический корпус", subtitle: "Структура документа", description: "Постройте доступный каркас интерфейса.", icon: "Ⅰ" },
    { id: "styling-spectrum", trackId: "html-css", order: 2, title: "Спектр стилей", subtitle: "Каскад и композиция", description: "Настройте визуальные параметры системы.", icon: "Ⅱ" },
    { id: "responsive-habitat", trackId: "html-css", order: 3, title: "Адаптивная среда", subtitle: "Responsive design и motion", description: "Сделайте интерфейс устойчивым на любых устройствах.", icon: "Ⅲ" }
  ]
};

export default track;
