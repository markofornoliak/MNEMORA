import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-interface-logic-01",
  trackId: "javascript",
  worldId: "interface-logic",
  order: 1,
  title: "Событийный импульс",
  subtitle: "callbacks и события",
  duration: 18,
  difficulty: "advanced",
  objectives: ["Понять callbacks и события", "Event", "Function"],
  theory: [
    { heading: "Сигнал: callbacks и события", body: "В этом модуле вы изучаете callbacks и события. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "function transmit(message, callback) {\n  callback(`sent:${message}`);\n}\ntransmit(\"hello\", console.log);" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «callbacks и события» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: callback, event, function." }
  ],
  starterCode: "function transmit(message, callback) {\n  callback(`sent:${message}`);\n}\ntransmit(\"hello\", console.log);",
  expectedOutput: "sent:hello",
  tasks: [
    { id: "javascript-interface-logic-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «callbacks и события», которая выводит точный контрольный сигнал.", starterCode: "function transmit(message, callback) {\n  callback(`sent:${message}`);\n}\ntransmit(\"hello\", console.log);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "sent:hello"}, xp: 35 },
    { id: "javascript-interface-logic-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «sent:hello».", starterCode: "function transmit(message, callback) {\n  ...\n}\ntransmit(\"hello\", console.log);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "sent:hello"}, xp: 45 },
    { id: "javascript-interface-logic-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «sent:hello».", starterCode: "function transmit(message, callback) {\n  callback(`sent:${message}`);\n}\ntransmit(\"hello\", console.log);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "sent:hello"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-interface-logic-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Событийный импульс»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "function transmit(message, callback) {\n  callback(`sent:${message}`);\n}\ntransmit(\"hello\", console.log);",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "sent:hello"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
