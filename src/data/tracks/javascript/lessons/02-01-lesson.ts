import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-data-streams-01",
  trackId: "javascript",
  worldId: "data-streams",
  order: 1,
  title: "Массив телеметрии",
  subtitle: "arrays и методы",
  duration: 17,
  difficulty: "intermediate",
  objectives: ["Понять arrays и методы", "Map", "Join"],
  theory: [
    { heading: "Сигнал: arrays и методы", body: "В этом модуле вы изучаете arrays и методы. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "const values = [3, 5, 8];\nconsole.log(values.map((x) => x * 2).join(\",\"));" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «arrays и методы» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: array, map, join." }
  ],
  starterCode: "const values = [3, 5, 8];\nconsole.log(values.map((x) => x * 2).join(\",\"));",
  expectedOutput: "6,10,16",
  tasks: [
    { id: "javascript-data-streams-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «arrays и методы», которая выводит точный контрольный сигнал.", starterCode: "const values = [3, 5, 8];\nconsole.log(values.map((x) => x * 2).join(\",\"));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "6,10,16"}, xp: 35 },
    { id: "javascript-data-streams-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «6,10,16».", starterCode: "const values = [3, 5, 8];\nconsole.log(...);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "6,10,16"}, xp: 45 },
    { id: "javascript-data-streams-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «6,10,16».", starterCode: "const values = [3, 5, 8];\nconsole.log(values.map((x) => x * 2).join(\",\"));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "6,10,16"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-data-streams-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Массив телеметрии»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "const values = [3, 5, 8];\nconsole.log(values.map((x) => x * 2).join(\",\"));",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "6,10,16"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
