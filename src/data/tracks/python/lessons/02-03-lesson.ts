import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-data-vault-03",
  trackId: "python",
  worldId: "data-vault",
  order: 3,
  title: "Функции восстановления",
  subtitle: "def, параметры и return",
  duration: 23,
  difficulty: "intermediate",
  objectives: ["Понять def, параметры и return", "Parameter", "Return"],
  theory: [
    { heading: "Сигнал: def, параметры и return", body: "В этом модуле вы изучаете def, параметры и return. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "def calibrate(value, boost):\n    return value + boost\n\nprint(calibrate(40, 7))" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «def, параметры и return» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: function, parameter, return." }
  ],
  starterCode: "def calibrate(value, boost):\n    return value + boost\n\nprint(calibrate(40, 7))",
  expectedOutput: "47",
  tasks: [
    { id: "python-data-vault-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «def, параметры и return», которая выводит точный контрольный сигнал.", starterCode: "def calibrate(value, boost):\n    return value + boost\n\nprint(calibrate(40, 7))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "47"}, xp: 35 },
    { id: "python-data-vault-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «47».", starterCode: "def calibrate(value, boost):\n    # return a value\n\nprint(calibrate(40, 7))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "47"}, xp: 45 },
    { id: "python-data-vault-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «47».", starterCode: "def calibrate(value, boost):\n    return value + boost\n\nprint(calibrate(40, 7))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "47"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-data-vault-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Функции восстановления»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "def calibrate(value, boost):\n    return value + boost\n\nprint(calibrate(40, 7))",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "47"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
