import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-data-streams-03",
  trackId: "javascript",
  worldId: "data-streams",
  order: 3,
  title: "Функция калибровки",
  subtitle: "functions и параметры",
  duration: 23,
  difficulty: "intermediate",
  objectives: ["Понять functions и параметры", "Return", "Default parameter"],
  theory: [
    { heading: "Сигнал: functions и параметры", body: "В этом модуле вы изучаете functions и параметры. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "function calibrate(value, boost = 0) {\n  return value + boost;\n}\nconsole.log(calibrate(40, 7));" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «functions и параметры» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: function, return, default parameter." }
  ],
  starterCode: "function calibrate(value, boost = 0) {\n  return value + boost;\n}\nconsole.log(calibrate(40, 7));",
  expectedOutput: "47",
  tasks: [
    { id: "javascript-data-streams-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «functions и параметры», которая выводит точный контрольный сигнал.", starterCode: "function calibrate(value, boost = 0) {\n  return value + boost;\n}\nconsole.log(calibrate(40, 7));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "47"}, xp: 35 },
    { id: "javascript-data-streams-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «47».", starterCode: "function calibrate(value, boost = 0) {\n  ...\n}\nconsole.log(calibrate(40, 7));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "47"}, xp: 45 },
    { id: "javascript-data-streams-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «47».", starterCode: "function calibrate(value, boost = 0) {\n  return value + boost;\n}\nconsole.log(calibrate(40, 7));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "47"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-data-streams-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Функция калибровки»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "function calibrate(value, boost = 0) {\n  return value + boost;\n}\nconsole.log(calibrate(40, 7));",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "47"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
