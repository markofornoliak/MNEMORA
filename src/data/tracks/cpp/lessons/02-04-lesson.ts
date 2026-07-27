import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-memory-engine-04",
  trackId: "cpp",
  worldId: "memory-engine",
  order: 4,
  title: "Структура модуля",
  subtitle: "struct и methods",
  duration: 26,
  difficulty: "intermediate",
  objectives: ["Понять struct и methods", "Method", "Const"],
  theory: [
    { heading: "Сигнал: struct и methods", body: "В этом модуле вы изучаете struct и methods. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Beacon { string name; string ping() const { return name + \": ready\"; } };\nint main() {\n    Beacon beacon{\"Nova\"};\n    cout << beacon.ping() << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «struct и methods» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: struct, method, const." }
  ],
  starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Beacon { string name; string ping() const { return name + \": ready\"; } };\nint main() {\n    Beacon beacon{\"Nova\"};\n    cout << beacon.ping() << endl;\n    return 0;\n}",
  expectedOutput: "Nova: ready",
  tasks: [
    { id: "cpp-memory-engine-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «struct и methods», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Beacon { string name; string ping() const { return name + \": ready\"; } };\nint main() {\n    Beacon beacon{\"Nova\"};\n    cout << beacon.ping() << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Nova: ready"}, xp: 35 },
    { id: "cpp-memory-engine-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Nova: ready».", starterCode: "#include <iostream>\nusing namespace std;\nstruct Beacon { ... };\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Nova: ready"}, xp: 45 },
    { id: "cpp-memory-engine-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Nova: ready».", starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Beacon { string name; string ping() const { return name + \": ready\"; } };\nint main() {\n    Beacon beacon{\"Nova\"};\n    cout << beacon.ping() << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Nova: ready"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-memory-engine-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Структура модуля»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nstruct Beacon { string name; string ping() const { return name + \": ready\"; } };\nint main() {\n    Beacon beacon{\"Nova\"};\n    cout << beacon.ping() << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Nova: ready"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
