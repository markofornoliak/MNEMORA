import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-data-vault-04",
  trackId: "python",
  worldId: "data-vault",
  order: 4,
  title: "Преобразование потоков",
  subtitle: "comprehensions и фильтрация",
  duration: 26,
  difficulty: "intermediate",
  objectives: ["Понять comprehensions и фильтрация", "Filter", "Transform"],
  theory: [
    { heading: "Сигнал: comprehensions и фильтрация", body: "В этом модуле вы изучаете comprehensions и фильтрация. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "signals = [2, 5, 8, 11]\nstrong = [x * 2 for x in signals if x > 5]\nprint(strong)" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «comprehensions и фильтрация» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: comprehension, filter, transform." }
  ],
  starterCode: "signals = [2, 5, 8, 11]\nstrong = [x * 2 for x in signals if x > 5]\nprint(strong)",
  expectedOutput: "[16, 22]",
  tasks: [
    { id: "python-data-vault-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «comprehensions и фильтрация», которая выводит точный контрольный сигнал.", starterCode: "signals = [2, 5, 8, 11]\nstrong = [x * 2 for x in signals if x > 5]\nprint(strong)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "[16, 22]"}, xp: 35 },
    { id: "python-data-vault-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «[16, 22]».", starterCode: "signals = [2, 5, 8, 11]\nstrong = [...]\nprint(strong)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "[16, 22]"}, xp: 45 },
    { id: "python-data-vault-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «[16, 22]».", starterCode: "signals = [2, 5, 8, 11]\nstrong = [x * 2 for x in signals if x > 5]\nprint(strong)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "[16, 22]"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-data-vault-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Преобразование потоков»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "signals = [2, 5, 8, 11]\nstrong = [x * 2 for x in signals if x > 5]\nprint(strong)",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "[16, 22]"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
