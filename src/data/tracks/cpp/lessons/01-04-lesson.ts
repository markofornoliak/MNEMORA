import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-core-mechanics-04",
  trackId: "cpp",
  worldId: "core-mechanics",
  order: 4,
  title: "Функция тяги",
  subtitle: "functions и references",
  duration: 25,
  difficulty: "beginner",
  objectives: ["Понять functions и references", "Parameter", "Return"],
  theory: [
    { heading: "Сигнал: functions и references", body: "В этом модуле вы изучаете functions и references. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\nusing namespace std;\nint calibrate(int value, int boost) { return value + boost; }\nint main() {\n    cout << calibrate(40, 7) << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «functions и references» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: function, parameter, return." }
  ],
  starterCode: "#include <iostream>\nusing namespace std;\nint calibrate(int value, int boost) { return value + boost; }\nint main() {\n    cout << calibrate(40, 7) << endl;\n    return 0;\n}",
  expectedOutput: "47",
  tasks: [
    { id: "cpp-core-mechanics-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «functions и references», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\nusing namespace std;\nint calibrate(int value, int boost) { return value + boost; }\nint main() {\n    cout << calibrate(40, 7) << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "47"}, xp: 35 },
    { id: "cpp-core-mechanics-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «47».", starterCode: "#include <iostream>\nusing namespace std;\nint calibrate(int value, int boost) { ... }\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "47"}, xp: 45 },
    { id: "cpp-core-mechanics-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «47».", starterCode: "#include <iostream>\nusing namespace std;\nint calibrate(int value, int boost) { return value + boost; }\nint main() {\n    cout << calibrate(40, 7) << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "47"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-core-mechanics-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Функция тяги»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\nusing namespace std;\nint calibrate(int value, int boost) { return value + boost; }\nint main() {\n    cout << calibrate(40, 7) << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "47"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
