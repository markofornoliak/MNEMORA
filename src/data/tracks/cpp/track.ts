import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: "cpp",
  name: "C++",
  shortName: "C++",
  tagline: "Контроль ресурсов, производительность и алгоритмическая точность",
  description: "Трек MNEMORA: Контроль ресурсов, производительность и алгоритмическая точность. Последовательность построена от базовых сигналов к самостоятельной архитектуре.",
  runner: "simulated",
  editorLanguage: "cpp",
  icon: "⟡",
  color: "#62a8ff",
  secondaryColor: "#3148a8",
  location: sceneLocations["cpp"],
  worlds: [
    { id: "core-mechanics", trackId: "cpp", order: 1, title: "Механика ядра", subtitle: "Синтаксис и функции", description: "Получите точный контроль над вычислительным контуром.", icon: "Ⅰ" },
    { id: "memory-engine", trackId: "cpp", order: 2, title: "Двигатель памяти", subtitle: "Контейнеры и управление ресурсами", description: "Работайте с данными без утечек и неопределённости.", icon: "Ⅱ" },
    { id: "algorithm-array", trackId: "cpp", order: 3, title: "Алгоритмический массив", subtitle: "STL и обобщённые алгоритмы", description: "Проектируйте быстрые и выразительные преобразования.", icon: "Ⅲ" }
  ]
};

export default track;
