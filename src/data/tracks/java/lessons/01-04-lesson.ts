import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-object-forge-04",
  trackId: "java",
  worldId: "object-forge",
  order: 4,
  title: "Чертёж объекта",
  subtitle: "fields, constructor и methods",
  duration: 25,
  difficulty: "beginner",
  objectives: ["Понять fields, constructor и methods", "Constructor", "Method"],
  theory: [
    { heading: "Сигнал: fields, constructor и methods", body: "В этом модуле вы изучаете fields, constructor и methods. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    static class Beacon {\n        private final String name;\n        Beacon(String name) { this.name = name; }\n        String ping() { return name + \": ready\"; }\n    }\n    public static void main(String[] args) {\n        System.out.println(new Beacon(\"Nova\").ping());\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «fields, constructor и methods» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: object, constructor, method." }
  ],
  starterCode: "public class Main {\n    static class Beacon {\n        private final String name;\n        Beacon(String name) { this.name = name; }\n        String ping() { return name + \": ready\"; }\n    }\n    public static void main(String[] args) {\n        System.out.println(new Beacon(\"Nova\").ping());\n    }\n}",
  expectedOutput: "Nova: ready",
  tasks: [
    { id: "java-object-forge-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «fields, constructor и methods», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    static class Beacon {\n        private final String name;\n        Beacon(String name) { this.name = name; }\n        String ping() { return name + \": ready\"; }\n    }\n    public static void main(String[] args) {\n        System.out.println(new Beacon(\"Nova\").ping());\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Nova: ready"}, xp: 35 },
    { id: "java-object-forge-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Nova: ready».", starterCode: "public class Main {\n    static class Beacon { ... }\n    public static void main(String[] args) { ... }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Nova: ready"}, xp: 45 },
    { id: "java-object-forge-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Nova: ready».", starterCode: "public class Main {\n    static class Beacon {\n        private final String name;\n        Beacon(String name) { this.name = name; }\n        String ping() { return name + \": ready\"; }\n    }\n    public static void main(String[] args) {\n        System.out.println(new Beacon(\"Nova\").ping());\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Nova: ready"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-object-forge-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Чертёж объекта»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    static class Beacon {\n        private final String name;\n        Beacon(String name) { this.name = name; }\n        String ping() { return name + \": ready\"; }\n    }\n    public static void main(String[] args) {\n        System.out.println(new Beacon(\"Nova\").ping());\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Nova: ready"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
