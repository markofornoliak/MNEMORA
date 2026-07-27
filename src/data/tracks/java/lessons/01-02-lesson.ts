import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-object-forge-02",
  trackId: "java",
  worldId: "object-forge",
  order: 2,
  title: "Типизированная энергия",
  subtitle: "примитивы и переменные",
  duration: 19,
  difficulty: "beginner",
  objectives: ["Понять примитивы и переменные", "Variable", "Primitive"],
  theory: [
    { heading: "Сигнал: примитивы и переменные", body: "В этом модуле вы изучаете примитивы и переменные. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    public static void main(String[] args) {\n        String pilot = \"Ada\";\n        int energy = 80;\n        System.out.println(pilot);\n        System.out.println(energy);\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «примитивы и переменные» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: type, variable, primitive." }
  ],
  starterCode: "public class Main {\n    public static void main(String[] args) {\n        String pilot = \"Ada\";\n        int energy = 80;\n        System.out.println(pilot);\n        System.out.println(energy);\n    }\n}",
  expectedOutput: "Ada\n80",
  tasks: [
    { id: "java-object-forge-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «примитивы и переменные», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    public static void main(String[] args) {\n        String pilot = \"Ada\";\n        int energy = 80;\n        System.out.println(pilot);\n        System.out.println(energy);\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Ada\n80"}, xp: 35 },
    { id: "java-object-forge-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Ada\n80».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        // variables\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Ada"}, xp: 45 },
    { id: "java-object-forge-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Ada\n80».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        String pilot = \"Ada\";\n        int energy = 80;\n        System.out.println(pilot);\n        System.out.println(energy);\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "80"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-object-forge-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Типизированная энергия»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    public static void main(String[] args) {\n        String pilot = \"Ada\";\n        int energy = 80;\n        System.out.println(pilot);\n        System.out.println(energy);\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "80"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
