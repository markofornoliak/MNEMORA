import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-signal-basics-03",
  trackId: "python",
  worldId: "signal-basics",
  order: 3,
  title: "Развилки маршрута",
  subtitle: "условия if/elif/else",
  duration: 22,
  difficulty: "beginner",
  objectives: ["Понять условия if/elif/else", "Comparison", "Branch"],
  theory: [
    { heading: "Сигнал: условия if/elif/else", body: "В этом модуле вы изучаете условия if/elif/else. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "energy = 72\nif energy >= 50:\n    print(\"route open\")\nelse:\n    print(\"recharge\")" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «условия if/elif/else» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: if, comparison, branch." }
  ],
  starterCode: "energy = 72\nif energy >= 50:\n    print(\"route open\")\nelse:\n    print(\"recharge\")",
  expectedOutput: "route open",
  tasks: [
    { id: "python-signal-basics-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «условия if/elif/else», которая выводит точный контрольный сигнал.", starterCode: "energy = 72\nif energy >= 50:\n    print(\"route open\")\nelse:\n    print(\"recharge\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "route open"}, xp: 35 },
    { id: "python-signal-basics-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «route open».", starterCode: "energy = 72\n# add a condition", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "route open"}, xp: 45 },
    { id: "python-signal-basics-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «route open».", starterCode: "energy = 72\nif energy >= 50:\n    print(\"route open\")\nelse:\n    print(\"recharge\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "route open"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-signal-basics-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Развилки маршрута»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "energy = 72\nif energy >= 50:\n    print(\"route open\")\nelse:\n    print(\"recharge\")",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "route open"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
