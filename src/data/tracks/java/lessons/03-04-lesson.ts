import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-reliability-reactor-04",
  trackId: "java",
  worldId: "reliability-reactor",
  order: 4,
  title: "Неизменяемая запись",
  subtitle: "records и value objects",
  duration: 27,
  difficulty: "advanced",
  objectives: ["Понять records и value objects", "Immutable", "Value object"],
  theory: [
    { heading: "Сигнал: records и value objects", body: "В этом модуле вы изучаете records и value objects. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    record Coordinate(int x, int y) {}\n    public static void main(String[] args) {\n        Coordinate point = new Coordinate(4, 7);\n        System.out.println(point.x() + point.y());\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «records и value objects» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: record, immutable, value object." }
  ],
  starterCode: "public class Main {\n    record Coordinate(int x, int y) {}\n    public static void main(String[] args) {\n        Coordinate point = new Coordinate(4, 7);\n        System.out.println(point.x() + point.y());\n    }\n}",
  expectedOutput: "11",
  tasks: [
    { id: "java-reliability-reactor-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «records и value objects», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    record Coordinate(int x, int y) {}\n    public static void main(String[] args) {\n        Coordinate point = new Coordinate(4, 7);\n        System.out.println(point.x() + point.y());\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "11"}, xp: 35 },
    { id: "java-reliability-reactor-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «11».", starterCode: "public class Main {\n    record Coordinate(int x, int y) {}\n    public static void main(String[] args) { ... }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "11"}, xp: 45 },
    { id: "java-reliability-reactor-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «11».", starterCode: "public class Main {\n    record Coordinate(int x, int y) {}\n    public static void main(String[] args) {\n        Coordinate point = new Coordinate(4, 7);\n        System.out.println(point.x() + point.y());\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "11"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-reliability-reactor-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Неизменяемая запись»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    record Coordinate(int x, int y) {}\n    public static void main(String[] args) {\n        Coordinate point = new Coordinate(4, 7);\n        System.out.println(point.x() + point.y());\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "11"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
