import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-memory-engine-03",
  trackId: "cpp",
  worldId: "memory-engine",
  order: 3,
  title: "Умный указатель",
  subtitle: "RAII и unique_ptr",
  duration: 23,
  difficulty: "intermediate",
  objectives: ["Понять RAII и unique_ptr", "Unique_ptr", "Memory"],
  theory: [
    { heading: "Сигнал: RAII и unique_ptr", body: "В этом модуле вы изучаете RAII и unique_ptr. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\n#include <memory>\nusing namespace std;\nint main() {\n    auto power = make_unique<int>(88);\n    cout << *power << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «RAII и unique_ptr» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: raii, unique_ptr, memory." }
  ],
  starterCode: "#include <iostream>\n#include <memory>\nusing namespace std;\nint main() {\n    auto power = make_unique<int>(88);\n    cout << *power << endl;\n    return 0;\n}",
  expectedOutput: "88",
  tasks: [
    { id: "cpp-memory-engine-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «RAII и unique_ptr», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\n#include <memory>\nusing namespace std;\nint main() {\n    auto power = make_unique<int>(88);\n    cout << *power << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "88"}, xp: 35 },
    { id: "cpp-memory-engine-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «88».", starterCode: "#include <iostream>\n#include <memory>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "88"}, xp: 45 },
    { id: "cpp-memory-engine-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «88».", starterCode: "#include <iostream>\n#include <memory>\nusing namespace std;\nint main() {\n    auto power = make_unique<int>(88);\n    cout << *power << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "88"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-memory-engine-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Умный указатель»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\n#include <memory>\nusing namespace std;\nint main() {\n    auto power = make_unique<int>(88);\n    cout << *power << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "88"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
