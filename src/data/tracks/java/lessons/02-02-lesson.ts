import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-collections-grid-02",
  trackId: "java",
  worldId: "collections-grid",
  order: 2,
  title: "Динамический список",
  subtitle: "ArrayList",
  duration: 20,
  difficulty: "intermediate",
  objectives: ["Понять ArrayList", "Generic", "Collection"],
  theory: [
    { heading: "Сигнал: ArrayList", body: "В этом модуле вы изучаете ArrayList. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> nodes = new ArrayList<>();\n        nodes.add(\"A\"); nodes.add(\"B\");\n        System.out.println(nodes.size());\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «ArrayList» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: arraylist, generic, collection." }
  ],
  starterCode: "import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> nodes = new ArrayList<>();\n        nodes.add(\"A\"); nodes.add(\"B\");\n        System.out.println(nodes.size());\n    }\n}",
  expectedOutput: "2",
  tasks: [
    { id: "java-collections-grid-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «ArrayList», которая выводит точный контрольный сигнал.", starterCode: "import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> nodes = new ArrayList<>();\n        nodes.add(\"A\"); nodes.add(\"B\");\n        System.out.println(nodes.size());\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "2"}, xp: 35 },
    { id: "java-collections-grid-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «2».", starterCode: "import java.util.ArrayList;\npublic class Main { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "2"}, xp: 45 },
    { id: "java-collections-grid-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «2».", starterCode: "import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> nodes = new ArrayList<>();\n        nodes.add(\"A\"); nodes.add(\"B\");\n        System.out.println(nodes.size());\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "2"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-collections-grid-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Динамический список»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "import java.util.ArrayList;\npublic class Main {\n    public static void main(String[] args) {\n        ArrayList<String> nodes = new ArrayList<>();\n        nodes.add(\"A\"); nodes.add(\"B\");\n        System.out.println(nodes.size());\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "2"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
