import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-object-forge-03",
  trackId: "java",
  worldId: "object-forge",
  order: 3,
  title: "Условный шлюз",
  subtitle: "if и boolean",
  duration: 22,
  difficulty: "beginner",
  objectives: ["Понять if и boolean", "Boolean", "Comparison"],
  theory: [
    { heading: "Сигнал: if и boolean", body: "В этом модуле вы изучаете if и boolean. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    public static void main(String[] args) {\n        int signal = 73;\n        if (signal >= 50) { System.out.println(\"linked\"); } else { System.out.println(\"lost\"); }\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «if и boolean» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: if, boolean, comparison." }
  ],
  starterCode: "public class Main {\n    public static void main(String[] args) {\n        int signal = 73;\n        if (signal >= 50) { System.out.println(\"linked\"); } else { System.out.println(\"lost\"); }\n    }\n}",
  expectedOutput: "linked",
  tasks: [
    { id: "java-object-forge-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «if и boolean», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    public static void main(String[] args) {\n        int signal = 73;\n        if (signal >= 50) { System.out.println(\"linked\"); } else { System.out.println(\"lost\"); }\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "linked"}, xp: 35 },
    { id: "java-object-forge-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «linked».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        int signal = 73;\n        // condition\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "linked"}, xp: 45 },
    { id: "java-object-forge-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «linked».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        int signal = 73;\n        if (signal >= 50) { System.out.println(\"linked\"); } else { System.out.println(\"lost\"); }\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "linked"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-object-forge-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Условный шлюз»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    public static void main(String[] args) {\n        int signal = 73;\n        if (signal >= 50) { System.out.println(\"linked\"); } else { System.out.println(\"lost\"); }\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "linked"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
