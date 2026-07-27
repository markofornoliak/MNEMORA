import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-collections-grid-01",
  trackId: "java",
  worldId: "collections-grid",
  order: 1,
  title: "Массив координат",
  subtitle: "arrays и loops",
  duration: 17,
  difficulty: "intermediate",
  objectives: ["Понять arrays и loops", "Loop", "Sum"],
  theory: [
    { heading: "Сигнал: arrays и loops", body: "В этом модуле вы изучаете arrays и loops. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    public static void main(String[] args) {\n        int[] values = {3, 5, 8};\n        int sum = 0;\n        for (int value : values) sum += value;\n        System.out.println(sum);\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «arrays и loops» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: array, loop, sum." }
  ],
  starterCode: "public class Main {\n    public static void main(String[] args) {\n        int[] values = {3, 5, 8};\n        int sum = 0;\n        for (int value : values) sum += value;\n        System.out.println(sum);\n    }\n}",
  expectedOutput: "16",
  tasks: [
    { id: "java-collections-grid-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «arrays и loops», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    public static void main(String[] args) {\n        int[] values = {3, 5, 8};\n        int sum = 0;\n        for (int value : values) sum += value;\n        System.out.println(sum);\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "16"}, xp: 35 },
    { id: "java-collections-grid-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «16».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        int[] values = {3, 5, 8};\n        // sum values\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "16"}, xp: 45 },
    { id: "java-collections-grid-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «16».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        int[] values = {3, 5, 8};\n        int sum = 0;\n        for (int value : values) sum += value;\n        System.out.println(sum);\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "16"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-collections-grid-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Массив координат»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    public static void main(String[] args) {\n        int[] values = {3, 5, 8};\n        int sum = 0;\n        for (int value : values) sum += value;\n        System.out.println(sum);\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "16"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
