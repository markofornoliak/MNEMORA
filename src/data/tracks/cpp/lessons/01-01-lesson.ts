import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "cpp-core-mechanics-01",
  trackId: "cpp",
  worldId: "core-mechanics",
  order: 1,
  title: "Запуск реактора",
  subtitle: "main и cout",
  duration: 16,
  difficulty: "beginner",
  objectives: ["Понять main и cout", "Cout", "Include"],
  theory: [
    { heading: "Сигнал: main и cout", body: "В этом модуле вы изучаете main и cout. В C++ эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"MNEMORA ONLINE\" << endl;\n    return 0;\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «main и cout» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: main, cout, include." }
  ],
  starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"MNEMORA ONLINE\" << endl;\n    return 0;\n}",
  expectedOutput: "MNEMORA ONLINE",
  tasks: [
    { id: "cpp-core-mechanics-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «main и cout», которая выводит точный контрольный сигнал.", starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"MNEMORA ONLINE\" << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "MNEMORA ONLINE"}, xp: 35 },
    { id: "cpp-core-mechanics-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «MNEMORA ONLINE».", starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    // output a signal\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 45 },
    { id: "cpp-core-mechanics-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «MNEMORA ONLINE».", starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"MNEMORA ONLINE\" << endl;\n    return 0;\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 55 }
  ],
  bonusTask: {
    id: "cpp-core-mechanics-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Запуск реактора»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "#include <iostream>\nusing namespace std;\nint main() {\n    cout << \"MNEMORA ONLINE\" << endl;\n    return 0;\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
