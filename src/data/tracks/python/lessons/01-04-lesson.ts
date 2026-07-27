import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-signal-basics-04",
  trackId: "python",
  worldId: "signal-basics",
  order: 4,
  title: "Орбитальные циклы",
  subtitle: "циклы for и range",
  duration: 25,
  difficulty: "beginner",
  objectives: ["Понять циклы for и range", "Range", "Iteration"],
  theory: [
    { heading: "Сигнал: циклы for и range", body: "В этом модуле вы изучаете циклы for и range. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "for orbit in range(1, 4):\n    print(f\"orbit {orbit}\")" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «циклы for и range» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: for, range, iteration." }
  ],
  starterCode: "for orbit in range(1, 4):\n    print(f\"orbit {orbit}\")",
  expectedOutput: "orbit 1\norbit 2\norbit 3",
  tasks: [
    { id: "python-signal-basics-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «циклы for и range», которая выводит точный контрольный сигнал.", starterCode: "for orbit in range(1, 4):\n    print(f\"orbit {orbit}\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "orbit 1\norbit 2\norbit 3"}, xp: 35 },
    { id: "python-signal-basics-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «orbit 1\norbit 2\norbit 3».", starterCode: "for orbit in range(...):\n    print(...)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "orbit 1"}, xp: 45 },
    { id: "python-signal-basics-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «orbit 1\norbit 2\norbit 3».", starterCode: "for orbit in range(1, 4):\n    print(f\"orbit {orbit}\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "orbit 3"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-signal-basics-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Орбитальные циклы»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "for orbit in range(1, 4):\n    print(f\"orbit {orbit}\")",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "orbit 3"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
