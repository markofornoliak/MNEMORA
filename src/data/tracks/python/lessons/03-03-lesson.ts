import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-automation-lab-03",
  trackId: "python",
  worldId: "automation-lab",
  order: 3,
  title: "Капсула объекта",
  subtitle: "классы, состояние и методы",
  duration: 24,
  difficulty: "advanced",
  objectives: ["Понять классы, состояние и методы", "Self", "Method"],
  theory: [
    { heading: "Сигнал: классы, состояние и методы", body: "В этом модуле вы изучаете классы, состояние и методы. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "class Beacon:\n    def __init__(self, name):\n        self.name = name\n    def ping(self):\n        return f\"{self.name}: ready\"\n\nprint(Beacon(\"Nova\").ping())" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «классы, состояние и методы» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: class, self, method." }
  ],
  starterCode: "class Beacon:\n    def __init__(self, name):\n        self.name = name\n    def ping(self):\n        return f\"{self.name}: ready\"\n\nprint(Beacon(\"Nova\").ping())",
  expectedOutput: "Nova: ready",
  tasks: [
    { id: "python-automation-lab-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «классы, состояние и методы», которая выводит точный контрольный сигнал.", starterCode: "class Beacon:\n    def __init__(self, name):\n        self.name = name\n    def ping(self):\n        return f\"{self.name}: ready\"\n\nprint(Beacon(\"Nova\").ping())", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Nova: ready"}, xp: 35 },
    { id: "python-automation-lab-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Nova: ready».", starterCode: "class Beacon:\n    ...\n\nprint(Beacon(\"Nova\").ping())", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Nova: ready"}, xp: 45 },
    { id: "python-automation-lab-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Nova: ready».", starterCode: "class Beacon:\n    def __init__(self, name):\n        self.name = name\n    def ping(self):\n        return f\"{self.name}: ready\"\n\nprint(Beacon(\"Nova\").ping())", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Nova: ready"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-automation-lab-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Капсула объекта»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "class Beacon:\n    def __init__(self, name):\n        self.name = name\n    def ping(self):\n        return f\"{self.name}: ready\"\n\nprint(Beacon(\"Nova\").ping())",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Nova: ready"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
