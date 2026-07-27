import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-data-streams-04",
  trackId: "javascript",
  worldId: "data-streams",
  order: 4,
  title: "Поток преобразований",
  subtitle: "filter, map и reduce",
  duration: 26,
  difficulty: "intermediate",
  objectives: ["Понять filter, map и reduce", "Reduce", "Pipeline"],
  theory: [
    { heading: "Сигнал: filter, map и reduce", body: "В этом модуле вы изучаете filter, map и reduce. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "const signals = [2, 5, 8, 11];\nconst total = signals.filter((x) => x > 5).reduce((sum, x) => sum + x, 0);\nconsole.log(total);" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «filter, map и reduce» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: filter, reduce, pipeline." }
  ],
  starterCode: "const signals = [2, 5, 8, 11];\nconst total = signals.filter((x) => x > 5).reduce((sum, x) => sum + x, 0);\nconsole.log(total);",
  expectedOutput: "19",
  tasks: [
    { id: "javascript-data-streams-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «filter, map и reduce», которая выводит точный контрольный сигнал.", starterCode: "const signals = [2, 5, 8, 11];\nconst total = signals.filter((x) => x > 5).reduce((sum, x) => sum + x, 0);\nconsole.log(total);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "19"}, xp: 35 },
    { id: "javascript-data-streams-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «19».", starterCode: "const signals = [2, 5, 8, 11];\nconst total = ...;\nconsole.log(total);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "19"}, xp: 45 },
    { id: "javascript-data-streams-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «19».", starterCode: "const signals = [2, 5, 8, 11];\nconst total = signals.filter((x) => x > 5).reduce((sum, x) => sum + x, 0);\nconsole.log(total);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "19"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-data-streams-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Поток преобразований»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "const signals = [2, 5, 8, 11];\nconst total = signals.filter((x) => x > 5).reduce((sum, x) => sum + x, 0);\nconsole.log(total);",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "19"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
