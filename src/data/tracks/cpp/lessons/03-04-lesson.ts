import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-algorithm-array-04",
  trackId: "cpp",
  worldId: "algorithm-array",
  order: 4,
  title: "Шаблон калибратора",
  subtitle: "templates",
  duration: 27,
  difficulty: "advanced",
  objectives: ["Понять templates", "Generic", "Type"],
  theory: [
    { heading: "Сигнал: templates", body: "В этом модуле вы изучаете templates. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\nusing namespace std;\ntemplate <typename T> T maxSignal(T a, T b) { return a > b ? a : b; }\nint main() {\n    cout << maxSignal(7, 11) << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «templates» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: template, generic, type." }
  ],
  starterCode: "#include <iostream>\nusing namespace std;\ntemplate <typename T> T maxSignal(T a, T b) { return a > b ? a : b; }\nint main() {\n    cout << maxSignal(7, 11) << endl;\n    return 0;\n}",
  expectedOutput: "11",
  tasks: [
    { id: "cpp-algorithm-array-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «templates», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\nusing namespace std;\ntemplate <typename T> T maxSignal(T a, T b) { return a > b ? a : b; }\nint main() {\n    cout << maxSignal(7, 11) << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "11"}, xp: 35 },
    { id: "cpp-algorithm-array-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «11».", starterCode: "#include <iostream>\nusing namespace std;\ntemplate <typename T> T maxSignal(T a, T b) { ... }\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "11"}, xp: 45 },
    { id: "cpp-algorithm-array-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «11».", starterCode: "#include <iostream>\nusing namespace std;\ntemplate <typename T> T maxSignal(T a, T b) { return a > b ? a : b; }\nint main() {\n    cout << maxSignal(7, 11) << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "11"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-algorithm-array-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Шаблон калибратора»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\nusing namespace std;\ntemplate <typename T> T maxSignal(T a, T b) { return a > b ? a : b; }\nint main() {\n    cout << maxSignal(7, 11) << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "11"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
