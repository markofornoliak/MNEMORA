import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-runtime-sparks-04",
  trackId: "javascript",
  worldId: "runtime-sparks",
  order: 4,
  title: "Цикл сканирования",
  subtitle: "for, while и итерация",
  duration: 25,
  difficulty: "beginner",
  objectives: ["Понять for, while и итерация", "For", "Iteration"],
  theory: [
    { heading: "Сигнал: for, while и итерация", body: "В этом модуле вы изучаете for, while и итерация. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`scan ${i}`);\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «for, while и итерация» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: loop, for, iteration." }
  ],
  starterCode: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`scan ${i}`);\n}",
  expectedOutput: "scan 1\nscan 2\nscan 3",
  tasks: [
    { id: "javascript-runtime-sparks-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «for, while и итерация», которая выводит точный контрольный сигнал.", starterCode: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`scan ${i}`);\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "scan 1\nscan 2\nscan 3"}, xp: 35 },
    { id: "javascript-runtime-sparks-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «scan 1\nscan 2\nscan 3».", starterCode: "for (let i = 1; i <= 3; i += 1) {\n  console.log(...);\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "scan 1"}, xp: 45 },
    { id: "javascript-runtime-sparks-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «scan 1\nscan 2\nscan 3».", starterCode: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`scan ${i}`);\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "scan 3"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-runtime-sparks-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Цикл сканирования»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "for (let i = 1; i <= 3; i += 1) {\n  console.log(`scan ${i}`);\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "scan 3"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
