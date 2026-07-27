import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-core-mechanics-02",
  trackId: "cpp",
  worldId: "core-mechanics",
  order: 2,
  title: "Типы энергии",
  subtitle: "variables и const",
  duration: 19,
  difficulty: "beginner",
  objectives: ["Понять variables и const", "Const", "Variable"],
  theory: [
    { heading: "Сигнал: variables и const", body: "В этом модуле вы изучаете variables и const. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    const string pilot = \"Ada\";\n    int energy = 80;\n    cout << pilot << endl;\n    cout << energy << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «variables и const» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: type, const, variable." }
  ],
  starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    const string pilot = \"Ada\";\n    int energy = 80;\n    cout << pilot << endl;\n    cout << energy << endl;\n    return 0;\n}",
  expectedOutput: "Ada\n80",
  tasks: [
    { id: "cpp-core-mechanics-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «variables и const», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    const string pilot = \"Ada\";\n    int energy = 80;\n    cout << pilot << endl;\n    cout << energy << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Ada\n80"}, xp: 35 },
    { id: "cpp-core-mechanics-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Ada\n80».", starterCode: "#include <iostream>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Ada"}, xp: 45 },
    { id: "cpp-core-mechanics-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Ada\n80».", starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    const string pilot = \"Ada\";\n    int energy = 80;\n    cout << pilot << endl;\n    cout << energy << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "80"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-core-mechanics-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Типы энергии»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\n#include <string>\nusing namespace std;\nint main() {\n    const string pilot = \"Ada\";\n    int energy = 80;\n    cout << pilot << endl;\n    cout << energy << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "80"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
