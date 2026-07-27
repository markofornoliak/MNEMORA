import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-automation-lab-02",
  trackId: "python",
  worldId: "automation-lab",
  order: 2,
  title: "Протокол модулей",
  subtitle: "импорты и стандартная библиотека",
  duration: 21,
  difficulty: "advanced",
  objectives: ["Понять импорты и стандартная библиотека", "Import", "Math"],
  theory: [
    { heading: "Сигнал: импорты и стандартная библиотека", body: "В этом модуле вы изучаете импорты и стандартная библиотека. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "from math import sqrt\nprint(int(sqrt(81)))" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «импорты и стандартная библиотека» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: module, import, math." }
  ],
  starterCode: "from math import sqrt\nprint(int(sqrt(81)))",
  expectedOutput: "9",
  tasks: [
    { id: "python-automation-lab-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «импорты и стандартная библиотека», которая выводит точный контрольный сигнал.", starterCode: "from math import sqrt\nprint(int(sqrt(81)))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "9"}, xp: 35 },
    { id: "python-automation-lab-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «9».", starterCode: "from math import sqrt\nprint(...)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "9"}, xp: 45 },
    { id: "python-automation-lab-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «9».", starterCode: "from math import sqrt\nprint(int(sqrt(81)))", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "9"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-automation-lab-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Протокол модулей»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "from math import sqrt\nprint(int(sqrt(81)))",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "9"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
