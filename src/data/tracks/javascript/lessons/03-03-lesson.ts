import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-interface-logic-03",
  trackId: "javascript",
  worldId: "interface-logic",
  order: 3,
  title: "Капсула состояния",
  subtitle: "closures",
  duration: 24,
  difficulty: "advanced",
  objectives: ["Понять closures", "Scope", "State"],
  theory: [
    { heading: "Сигнал: closures", body: "В этом модуле вы изучаете closures. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nconsole.log(next(), next());" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «closures» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: closure, scope, state." }
  ],
  starterCode: "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nconsole.log(next(), next());",
  expectedOutput: "1 2",
  tasks: [
    { id: "javascript-interface-logic-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «closures», которая выводит точный контрольный сигнал.", starterCode: "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nconsole.log(next(), next());", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "1 2"}, xp: 35 },
    { id: "javascript-interface-logic-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «1 2».", starterCode: "function createCounter() {\n  ...\n}\nconst next = createCounter();\nconsole.log(next(), next());", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "1 2"}, xp: 45 },
    { id: "javascript-interface-logic-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «1 2».", starterCode: "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nconsole.log(next(), next());", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "1 2"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-interface-logic-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Капсула состояния»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "function createCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = createCounter();\nconsole.log(next(), next());",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "1 2"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
