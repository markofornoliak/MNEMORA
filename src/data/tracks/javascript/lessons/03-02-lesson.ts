import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-interface-logic-02",
  trackId: "javascript",
  worldId: "interface-logic",
  order: 2,
  title: "Обещание сигнала",
  subtitle: "Promise и async/await",
  duration: 21,
  difficulty: "advanced",
  objectives: ["Понять Promise и async/await", "Async", "Await"],
  theory: [
    { heading: "Сигнал: Promise и async/await", body: "В этом модуле вы изучаете Promise и async/await. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "async function connect() {\n  const status = await Promise.resolve(\"connected\");\n  console.log(status);\n}\nconnect();" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «Promise и async/await» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: promise, async, await." }
  ],
  starterCode: "async function connect() {\n  const status = await Promise.resolve(\"connected\");\n  console.log(status);\n}\nconnect();",
  expectedOutput: "connected",
  tasks: [
    { id: "javascript-interface-logic-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «Promise и async/await», которая выводит точный контрольный сигнал.", starterCode: "async function connect() {\n  const status = await Promise.resolve(\"connected\");\n  console.log(status);\n}\nconnect();", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "connected"}, xp: 35 },
    { id: "javascript-interface-logic-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «connected».", starterCode: "async function connect() {\n  ...\n}\nconnect();", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "connected"}, xp: 45 },
    { id: "javascript-interface-logic-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «connected».", starterCode: "async function connect() {\n  const status = await Promise.resolve(\"connected\");\n  console.log(status);\n}\nconnect();", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "connected"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-interface-logic-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Обещание сигнала»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "async function connect() {\n  const status = await Promise.resolve(\"connected\");\n  console.log(status);\n}\nconnect();",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "connected"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
