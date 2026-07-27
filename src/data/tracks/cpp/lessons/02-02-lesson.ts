import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-memory-engine-02",
  trackId: "cpp",
  worldId: "memory-engine",
  order: 2,
  title: "Вектор телеметрии",
  subtitle: "std::vector",
  duration: 20,
  difficulty: "intermediate",
  objectives: ["Понять std::vector", "Container", "Size"],
  theory: [
    { heading: "Сигнал: std::vector", body: "В этом модуле вы изучаете std::vector. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> nodes = {3, 5, 8};\n    nodes.push_back(13);\n    cout << nodes.size() << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «std::vector» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: vector, container, size." }
  ],
  starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> nodes = {3, 5, 8};\n    nodes.push_back(13);\n    cout << nodes.size() << endl;\n    return 0;\n}",
  expectedOutput: "4",
  tasks: [
    { id: "cpp-memory-engine-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «std::vector», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> nodes = {3, 5, 8};\n    nodes.push_back(13);\n    cout << nodes.size() << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "4"}, xp: 35 },
    { id: "cpp-memory-engine-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «4».", starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "4"}, xp: 45 },
    { id: "cpp-memory-engine-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «4».", starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> nodes = {3, 5, 8};\n    nodes.push_back(13);\n    cout << nodes.size() << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "4"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-memory-engine-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Вектор телеметрии»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\n#include <vector>\nusing namespace std;\nint main() {\n    vector<int> nodes = {3, 5, 8};\n    nodes.push_back(13);\n    cout << nodes.size() << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "4"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
