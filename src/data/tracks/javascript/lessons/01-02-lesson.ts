import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-runtime-sparks-02",
  trackId: "javascript",
  worldId: "runtime-sparks",
  order: 2,
  title: "Переменные импульса",
  subtitle: "const, let и типы",
  duration: 19,
  difficulty: "beginner",
  objectives: ["Понять const, let и типы", "Let", "Type"],
  theory: [
    { heading: "Сигнал: const, let и типы", body: "В этом модуле вы изучаете const, let и типы. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "const pilot = \"Ada\";\nlet energy = 80;\nconsole.log(pilot, energy);" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «const, let и типы» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: const, let, type." }
  ],
  starterCode: "const pilot = \"Ada\";\nlet energy = 80;\nconsole.log(pilot, energy);",
  expectedOutput: "Ada 80",
  tasks: [
    { id: "javascript-runtime-sparks-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «const, let и типы», которая выводит точный контрольный сигнал.", starterCode: "const pilot = \"Ada\";\nlet energy = 80;\nconsole.log(pilot, energy);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Ada 80"}, xp: 35 },
    { id: "javascript-runtime-sparks-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Ada 80».", starterCode: "const pilot = \"Ada\";\nlet energy = 80;\nconsole.log(...);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Ada 80"}, xp: 45 },
    { id: "javascript-runtime-sparks-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Ada 80».", starterCode: "const pilot = \"Ada\";\nlet energy = 80;\nconsole.log(pilot, energy);", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Ada 80"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-runtime-sparks-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Переменные импульса»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "const pilot = \"Ada\";\nlet energy = 80;\nconsole.log(pilot, energy);",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Ada 80"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
