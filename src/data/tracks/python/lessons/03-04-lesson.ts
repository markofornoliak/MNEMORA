import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-automation-lab-04",
  trackId: "python",
  worldId: "automation-lab",
  order: 4,
  title: "Генератор миссий",
  subtitle: "итераторы и генераторы",
  duration: 27,
  difficulty: "advanced",
  objectives: ["Понять итераторы и генераторы", "Generator", "Iterator"],
  theory: [
    { heading: "Сигнал: итераторы и генераторы", body: "В этом модуле вы изучаете итераторы и генераторы. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "def countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nprint(list(countdown(3)))" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «итераторы и генераторы» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: yield, generator, iterator." }
  ],
  starterCode: "def countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nprint(list(countdown(3)))",
  expectedOutput: "[3, 2, 1]",
  tasks: [
    { id: "python-automation-lab-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «итераторы и генераторы», которая выводит точный контрольный сигнал.", starterCode: "def countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nprint(list(countdown(3)))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "[3, 2, 1]"}, xp: 35 },
    { id: "python-automation-lab-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «[3, 2, 1]».", starterCode: "def countdown(start):\n    ...\n\nprint(list(countdown(3)))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "[3, 2, 1]"}, xp: 45 },
    { id: "python-automation-lab-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «[3, 2, 1]».", starterCode: "def countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nprint(list(countdown(3)))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "[3, 2, 1]"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-automation-lab-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Генератор миссий»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "def countdown(start):\n    while start > 0:\n        yield start\n        start -= 1\n\nprint(list(countdown(3)))",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "[3, 2, 1]"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
