import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-algorithm-array-02",
  trackId: "cpp",
  worldId: "algorithm-array",
  order: 2,
  title: "Поиск частоты",
  subtitle: "std::count",
  duration: 21,
  difficulty: "advanced",
  objectives: ["Понять std::count", "Search", "Algorithm"],
  theory: [
    { heading: "Сигнал: std::count", body: "В этом модуле вы изучаете std::count. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {1, 2, 2, 3};\n    cout << count(values.begin(), values.end(), 2) << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «std::count» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: count, search, algorithm." }
  ],
  starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {1, 2, 2, 3};\n    cout << count(values.begin(), values.end(), 2) << endl;\n    return 0;\n}",
  expectedOutput: "2",
  tasks: [
    { id: "cpp-algorithm-array-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «std::count», которая выводит точный контрольный сигнал.", starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {1, 2, 2, 3};\n    cout << count(values.begin(), values.end(), 2) << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "2"}, xp: 35 },
    { id: "cpp-algorithm-array-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «2».", starterCode: "#include <algorithm>\n#include <vector>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "2"}, xp: 45 },
    { id: "cpp-algorithm-array-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «2».", starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {1, 2, 2, 3};\n    cout << count(values.begin(), values.end(), 2) << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "2"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-algorithm-array-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Поиск частоты»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {1, 2, 2, 3};\n    cout << count(values.begin(), values.end(), 2) << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "2"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
