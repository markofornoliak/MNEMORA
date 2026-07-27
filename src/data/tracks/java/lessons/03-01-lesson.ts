import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-reliability-reactor-01",
  trackId: "java",
  worldId: "reliability-reactor",
  order: 1,
  title: "Контракт модуля",
  subtitle: "interfaces",
  duration: 18,
  difficulty: "advanced",
  objectives: ["Понять interfaces", "Implements", "Contract"],
  theory: [
    { heading: "Сигнал: interfaces", body: "В этом модуле вы изучаете interfaces. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    interface Signal { String read(); }\n    static class Beacon implements Signal { public String read() { return \"stable\"; } }\n    public static void main(String[] args) { System.out.println(new Beacon().read()); }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «interfaces» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: interface, implements, contract." }
  ],
  starterCode: "public class Main {\n    interface Signal { String read(); }\n    static class Beacon implements Signal { public String read() { return \"stable\"; } }\n    public static void main(String[] args) { System.out.println(new Beacon().read()); }\n}",
  expectedOutput: "stable",
  tasks: [
    { id: "java-reliability-reactor-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «interfaces», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    interface Signal { String read(); }\n    static class Beacon implements Signal { public String read() { return \"stable\"; } }\n    public static void main(String[] args) { System.out.println(new Beacon().read()); }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "stable"}, xp: 35 },
    { id: "java-reliability-reactor-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «stable».", starterCode: "public class Main {\n    interface Signal { ... }\n    public static void main(String[] args) { ... }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "stable"}, xp: 45 },
    { id: "java-reliability-reactor-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «stable».", starterCode: "public class Main {\n    interface Signal { String read(); }\n    static class Beacon implements Signal { public String read() { return \"stable\"; } }\n    public static void main(String[] args) { System.out.println(new Beacon().read()); }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "stable"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-reliability-reactor-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Контракт модуля»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    interface Signal { String read(); }\n    static class Beacon implements Signal { public String read() { return \"stable\"; } }\n    public static void main(String[] args) { System.out.println(new Beacon().read()); }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "stable"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
