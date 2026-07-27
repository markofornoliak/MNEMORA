import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-signal-basics-02",
  trackId: "python",
  worldId: "signal-basics",
  order: 2,
  title: "Контейнеры памяти",
  subtitle: "переменные и базовые типы",
  duration: 19,
  difficulty: "beginner",
  objectives: ["Понять переменные и базовые типы", "Str", "Int"],
  theory: [
    { heading: "Сигнал: переменные и базовые типы", body: "В этом модуле вы изучаете переменные и базовые типы. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "pilot = \"Ada\"\nlevel = 1\nprint(pilot, level)" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «переменные и базовые типы» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: переменные, str, int." }
  ],
  starterCode: "pilot = \"Ada\"\nlevel = 1\nprint(pilot, level)",
  expectedOutput: "Ada 1",
  tasks: [
    { id: "python-signal-basics-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «переменные и базовые типы», которая выводит точный контрольный сигнал.", starterCode: "pilot = \"Ada\"\nlevel = 1\nprint(pilot, level)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Ada 1"}, xp: 35 },
    { id: "python-signal-basics-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Ada 1».", starterCode: "pilot = \"Ada\"\nlevel = 1\nprint(...)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Ada 1"}, xp: 45 },
    { id: "python-signal-basics-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Ada 1».", starterCode: "pilot = \"Ada\"\nlevel = 1\nprint(pilot, level)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Ada 1"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-signal-basics-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Контейнеры памяти»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "pilot = \"Ada\"\nlevel = 1\nprint(pilot, level)",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Ada 1"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
