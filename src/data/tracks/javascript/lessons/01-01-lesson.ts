import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-runtime-sparks-01",
  trackId: "javascript",
  worldId: "runtime-sparks",
  order: 1,
  title: "Консоль пробуждения",
  subtitle: "console.log и выражения",
  duration: 16,
  difficulty: "beginner",
  objectives: ["Понять console.log и выражения", "Expression", "Statement"],
  theory: [
    { heading: "Сигнал: console.log и выражения", body: "В этом модуле вы изучаете console.log и выражения. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "console.log(\"MNEMORA ONLINE\");" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «console.log и выражения» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: console, expression, statement." }
  ],
  starterCode: "console.log(\"MNEMORA ONLINE\");",
  expectedOutput: "MNEMORA ONLINE",
  tasks: [
    { id: "javascript-runtime-sparks-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «console.log и выражения», которая выводит точный контрольный сигнал.", starterCode: "console.log(\"MNEMORA ONLINE\");", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "MNEMORA ONLINE"}, xp: 35 },
    { id: "javascript-runtime-sparks-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «MNEMORA ONLINE».", starterCode: "console.log(\"...\");", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 45 },
    { id: "javascript-runtime-sparks-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «MNEMORA ONLINE».", starterCode: "console.log(\"MNEMORA ONLINE\");", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-runtime-sparks-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Консоль пробуждения»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "console.log(\"MNEMORA ONLINE\");",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
