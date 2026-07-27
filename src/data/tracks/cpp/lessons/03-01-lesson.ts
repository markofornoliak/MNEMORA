import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-algorithm-array-01",
  trackId: "cpp",
  worldId: "algorithm-array",
  order: 1,
  title: "Сортировка сигналов",
  subtitle: "std::sort",
  duration: 18,
  difficulty: "advanced",
  objectives: ["Понять std::sort", "Iterator", "Algorithm"],
  theory: [
    { heading: "Сигнал: std::sort", body: "В этом модуле вы изучаете std::sort. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {8, 3, 5};\n    sort(values.begin(), values.end());\n    cout << values.front() << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «std::sort» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: sort, iterator, algorithm." }
  ],
  starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {8, 3, 5};\n    sort(values.begin(), values.end());\n    cout << values.front() << endl;\n    return 0;\n}",
  expectedOutput: "3",
  tasks: [
    { id: "cpp-algorithm-array-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «std::sort», которая выводит точный контрольный сигнал.", starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {8, 3, 5};\n    sort(values.begin(), values.end());\n    cout << values.front() << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "3"}, xp: 35 },
    { id: "cpp-algorithm-array-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «3».", starterCode: "#include <algorithm>\n#include <vector>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "3"}, xp: 45 },
    { id: "cpp-algorithm-array-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «3».", starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {8, 3, 5};\n    sort(values.begin(), values.end());\n    cout << values.front() << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "3"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-algorithm-array-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Сортировка сигналов»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <algorithm>\n#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> values = {8, 3, 5};\n    sort(values.begin(), values.end());\n    cout << values.front() << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "3"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
