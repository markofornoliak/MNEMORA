import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-reliability-reactor-02",
  trackId: "java",
  worldId: "reliability-reactor",
  order: 2,
  title: "Иерархия механизмов",
  subtitle: "inheritance и polymorphism",
  duration: 21,
  difficulty: "advanced",
  objectives: ["Понять inheritance и polymorphism", "Override", "Polymorphism"],
  theory: [
    { heading: "Сигнал: inheritance и polymorphism", body: "В этом модуле вы изучаете inheritance и polymorphism. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    static class Module { String status() { return \"idle\"; } }\n    static class Reactor extends Module { @Override String status() { return \"active\"; } }\n    public static void main(String[] args) { Module m = new Reactor(); System.out.println(m.status()); }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «inheritance и polymorphism» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: inheritance, override, polymorphism." }
  ],
  starterCode: "public class Main {\n    static class Module { String status() { return \"idle\"; } }\n    static class Reactor extends Module { @Override String status() { return \"active\"; } }\n    public static void main(String[] args) { Module m = new Reactor(); System.out.println(m.status()); }\n}",
  expectedOutput: "active",
  tasks: [
    { id: "java-reliability-reactor-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «inheritance и polymorphism», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    static class Module { String status() { return \"idle\"; } }\n    static class Reactor extends Module { @Override String status() { return \"active\"; } }\n    public static void main(String[] args) { Module m = new Reactor(); System.out.println(m.status()); }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "active"}, xp: 35 },
    { id: "java-reliability-reactor-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «active».", starterCode: "public class Main { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "active"}, xp: 45 },
    { id: "java-reliability-reactor-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «active».", starterCode: "public class Main {\n    static class Module { String status() { return \"idle\"; } }\n    static class Reactor extends Module { @Override String status() { return \"active\"; } }\n    public static void main(String[] args) { Module m = new Reactor(); System.out.println(m.status()); }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "active"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-reliability-reactor-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Иерархия механизмов»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    static class Module { String status() { return \"idle\"; } }\n    static class Reactor extends Module { @Override String status() { return \"active\"; } }\n    public static void main(String[] args) { Module m = new Reactor(); System.out.println(m.status()); }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "active"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
