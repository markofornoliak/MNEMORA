import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-core-mechanics-03",
  trackId: "cpp",
  worldId: "core-mechanics",
  order: 3,
  title: "Условный переключатель",
  subtitle: "if и operators",
  duration: 22,
  difficulty: "beginner",
  objectives: ["Понять if и operators", "Operator", "Ternary"],
  theory: [
    { heading: "Сигнал: if и operators", body: "В этом модуле вы изучаете if и operators. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\nusing namespace std;\nint main() {\n    int signal = 73;\n    cout << (signal >= 50 ? \"linked\" : \"lost\") << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «if и operators» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: condition, operator, ternary." }
  ],
  starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    int signal = 73;\n    cout << (signal >= 50 ? \"linked\" : \"lost\") << endl;\n    return 0;\n}",
  expectedOutput: "linked",
  tasks: [
    { id: "cpp-core-mechanics-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «if и operators», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    int signal = 73;\n    cout << (signal >= 50 ? \"linked\" : \"lost\") << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "linked"}, xp: 35 },
    { id: "cpp-core-mechanics-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «linked».", starterCode: "#include <iostream>\nusing namespace std;\nint main() { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "linked"}, xp: 45 },
    { id: "cpp-core-mechanics-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «linked».", starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    int signal = 73;\n    cout << (signal >= 50 ? \"linked\" : \"lost\") << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "linked"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-core-mechanics-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Условный переключатель»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    int signal = 73;\n    cout << (signal >= 50 ? \"linked\" : \"lost\") << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "linked"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
