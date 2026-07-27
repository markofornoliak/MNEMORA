import type { Trek } from '../../../types/course';
import { sceneLocations } from '../../../config/scene';

const track: Trek = {
  id: "python",
  name: "Python",
  shortName: "PY",
  tagline: "Читаемый язык для идей, данных и автоматизации",
  description: "Трек MNEMORA: Читаемый язык для идей, данных и автоматизации. Последовательность построена от базовых сигналов к самостоятельной архитектуре.",
  runner: "python",
  editorLanguage: "python",
  icon: "◉",
  color: "#55e6a5",
  secondaryColor: "#0d6c67",
  location: sceneLocations["python"],
  worlds: [
    { id: "signal-basics", trackId: "python", order: 1, title: "Сигнальный сад", subtitle: "Синтаксис и базовые конструкции", description: "Восстановите язык команд, переменных и решений.", icon: "Ⅰ" },
    { id: "data-vault", trackId: "python", order: 2, title: "Хранилище созвездий", subtitle: "Коллекции и функции", description: "Организуйте данные и повторно используемые алгоритмы.", icon: "Ⅱ" },
    { id: "automation-lab", trackId: "python", order: 3, title: "Лаборатория автономии", subtitle: "Ошибки, файлы и классы", description: "Соберите надёжные автономные модули.", icon: "Ⅲ" }
  ]
};

export default track;
