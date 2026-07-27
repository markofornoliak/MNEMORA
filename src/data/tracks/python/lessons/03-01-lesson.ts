import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-automation-lab-01",
  trackId: "python",
  worldId: "automation-lab",
  order: 1,
  title: "Безопасный шлюз",
  subtitle: "try/except и контролируемые ошибки",
  duration: 18,
  difficulty: "advanced",
  objectives: ["Понять try/except и контролируемые ошибки", "Try", "Except"],
  theory: [
    { heading: "Сигнал: try/except и контролируемые ошибки", body: "В этом модуле вы изучаете try/except и контролируемые ошибки. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "try:\n    value = int(\"42\")\n    print(value)\nexcept ValueError:\n    print(\"invalid\")" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «try/except и контролируемые ошибки» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: exception, try, except." }
  ],
  starterCode: "try:\n    value = int(\"42\")\n    print(value)\nexcept ValueError:\n    print(\"invalid\")",
  expectedOutput: "42",
  tasks: [
    { id: "python-automation-lab-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «try/except и контролируемые ошибки», которая выводит точный контрольный сигнал.", starterCode: "try:\n    value = int(\"42\")\n    print(value)\nexcept ValueError:\n    print(\"invalid\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "42"}, xp: 35 },
    { id: "python-automation-lab-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «42».", starterCode: "try:\n    value = int(\"42\")\n    print(value)\nexcept ...:\n    print(\"invalid\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "42"}, xp: 45 },
    { id: "python-automation-lab-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «42».", starterCode: "try:\n    value = int(\"42\")\n    print(value)\nexcept ValueError:\n    print(\"invalid\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "42"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-automation-lab-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Безопасный шлюз»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "try:\n    value = int(\"42\")\n    print(value)\nexcept ValueError:\n    print(\"invalid\")",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "42"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
