import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-algorithm-array-03",
  trackId: "cpp",
  worldId: "algorithm-array",
  order: 3,
  title: "Преобразование диапазона",
  subtitle: "std::transform",
  duration: 24,
  difficulty: "advanced",
  objectives: ["Понять std::transform", "Lambda", "Range"],
  theory: [
    { heading: "Сигнал: std::transform", body: "В этом модуле вы изучаете std::transform. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {2, 3, 4};\n    transform(values.begin(), values.end(), values.begin(), [](int x) { return x * 2; });\n    cout << values[2] << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «std::transform» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: transform, lambda, range." }
  ],
  starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {2, 3, 4};\n    transform(values.begin(), values.end(), values.begin(), [](int x) { return x * 2; });\n    cout << values[2] << endl;\n    return 0;\n}",
  expectedOutput: "8",
  tasks: [
    { id: "cpp-algorithm-array-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «std::transform», которая выводит точный контрольный сигнал.", starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {2, 3, 4};\n    transform(values.begin(), values.end(), values.begin(), [](int x) { return x * 2; });\n    cout << values[2] << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "8"}, xp: 35 },
    { id: "cpp-algorithm-array-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «8».", starterCode: "#include <algorithm>\n#include <vector>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "8"}, xp: 45 },
    { id: "cpp-algorithm-array-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «8».", starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {2, 3, 4};\n    transform(values.begin(), values.end(), values.begin(), [](int x) { return x * 2; });\n    cout << values[2] << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "8"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-algorithm-array-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Преобразование диапазона»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {2, 3, 4};\n    transform(values.begin(), values.end(), values.begin(), [](int x) { return x * 2; });\n    cout << values[2] << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "8"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
