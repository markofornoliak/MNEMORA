import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-collections-grid-04",
  trackId: "java",
  worldId: "collections-grid",
  order: 4,
  title: "Поток телеметрии",
  subtitle: "Streams API",
  duration: 26,
  difficulty: "intermediate",
  objectives: ["Понять Streams API", "Filter", "Lambda"],
  theory: [
    { heading: "Сигнал: Streams API", body: "В этом модуле вы изучаете Streams API. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        int total = List.of(2, 5, 8, 11).stream().filter(x -> x > 5).mapToInt(Integer::intValue).sum();\n        System.out.println(total);\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «Streams API» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: stream, filter, lambda." }
  ],
  starterCode: "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        int total = List.of(2, 5, 8, 11).stream().filter(x -> x > 5).mapToInt(Integer::intValue).sum();\n        System.out.println(total);\n    }\n}",
  expectedOutput: "19",
  tasks: [
    { id: "java-collections-grid-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «Streams API», которая выводит точный контрольный сигнал.", starterCode: "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        int total = List.of(2, 5, 8, 11).stream().filter(x -> x > 5).mapToInt(Integer::intValue).sum();\n        System.out.println(total);\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "19"}, xp: 35 },
    { id: "java-collections-grid-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «19».", starterCode: "import java.util.List;\npublic class Main { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "19"}, xp: 45 },
    { id: "java-collections-grid-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «19».", starterCode: "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        int total = List.of(2, 5, 8, 11).stream().filter(x -> x > 5).mapToInt(Integer::intValue).sum();\n        System.out.println(total);\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "19"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-collections-grid-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Поток телеметрии»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "import java.util.List;\npublic class Main {\n    public static void main(String[] args) {\n        int total = List.of(2, 5, 8, 11).stream().filter(x -> x > 5).mapToInt(Integer::intValue).sum();\n        System.out.println(total);\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "19"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
