import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-data-streams-02",
  trackId: "javascript",
  worldId: "data-streams",
  order: 2,
  title: "Объект модуля",
  subtitle: "objects и destructuring",
  duration: 20,
  difficulty: "intermediate",
  objectives: ["Понять objects и destructuring", "Destructuring", "Property"],
  theory: [
    { heading: "Сигнал: objects и destructuring", body: "В этом модуле вы изучаете objects и destructuring. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "const moduleData = { name: \"Iris\", power: 88 };\nconst { name, power } = moduleData;\nconsole.log(`${name}:${power}`);" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «objects и destructuring» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: object, destructuring, property." }
  ],
  starterCode: "const moduleData = { name: \"Iris\", power: 88 };\nconst { name, power } = moduleData;\nconsole.log(`${name}:${power}`);",
  expectedOutput: "Iris:88",
  tasks: [
    { id: "javascript-data-streams-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «objects и destructuring», которая выводит точный контрольный сигнал.", starterCode: "const moduleData = { name: \"Iris\", power: 88 };\nconst { name, power } = moduleData;\nconsole.log(`${name}:${power}`);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Iris:88"}, xp: 35 },
    { id: "javascript-data-streams-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Iris:88».", starterCode: "const moduleData = { name: \"Iris\", power: 88 };\nconst { ... } = moduleData;\nconsole.log(...);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Iris:88"}, xp: 45 },
    { id: "javascript-data-streams-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Iris:88».", starterCode: "const moduleData = { name: \"Iris\", power: 88 };\nconst { name, power } = moduleData;\nconsole.log(`${name}:${power}`);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Iris:88"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-data-streams-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Объект модуля»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "const moduleData = { name: \"Iris\", power: 88 };\nconst { name, power } = moduleData;\nconsole.log(`${name}:${power}`);",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Iris:88"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
