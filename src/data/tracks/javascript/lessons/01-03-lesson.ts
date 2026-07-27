import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-runtime-sparks-03",
  trackId: "javascript",
  worldId: "runtime-sparks",
  order: 3,
  title: "Логический шлюз",
  subtitle: "условия и булева логика",
  duration: 22,
  difficulty: "beginner",
  objectives: ["Понять условия и булева логика", "Boolean", "Ternary"],
  theory: [
    { heading: "Сигнал: условия и булева логика", body: "В этом модуле вы изучаете условия и булева логика. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "const signal = 73;\nconsole.log(signal >= 50 ? \"linked\" : \"lost\");" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «условия и булева логика» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: condition, boolean, ternary." }
  ],
  starterCode: "const signal = 73;\nconsole.log(signal >= 50 ? \"linked\" : \"lost\");",
  expectedOutput: "linked",
  tasks: [
    { id: "javascript-runtime-sparks-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «условия и булева логика», которая выводит точный контрольный сигнал.", starterCode: "const signal = 73;\nconsole.log(signal >= 50 ? \"linked\" : \"lost\");", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "linked"}, xp: 35 },
    { id: "javascript-runtime-sparks-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «linked».", starterCode: "const signal = 73;\nconsole.log(...);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "linked"}, xp: 45 },
    { id: "javascript-runtime-sparks-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «linked».", starterCode: "const signal = 73;\nconsole.log(signal >= 50 ? \"linked\" : \"lost\");", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "linked"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-runtime-sparks-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Логический шлюз»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "const signal = 73;\nconsole.log(signal >= 50 ? \"linked\" : \"lost\");",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "linked"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
