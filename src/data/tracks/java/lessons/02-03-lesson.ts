import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-collections-grid-03",
  trackId: "java",
  worldId: "collections-grid",
  order: 3,
  title: "Карта модулей",
  subtitle: "HashMap",
  duration: 23,
  difficulty: "intermediate",
  objectives: ["Понять HashMap", "Key", "Value"],
  theory: [
    { heading: "Сигнал: HashMap", body: "В этом модуле вы изучаете HashMap. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> power = new HashMap<>();\n        power.put(\"Iris\", 88);\n        System.out.println(power.get(\"Iris\"));\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «HashMap» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: hashmap, key, value." }
  ],
  starterCode: "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> power = new HashMap<>();\n        power.put(\"Iris\", 88);\n        System.out.println(power.get(\"Iris\"));\n    }\n}",
  expectedOutput: "88",
  tasks: [
    { id: "java-collections-grid-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «HashMap», которая выводит точный контрольный сигнал.", starterCode: "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> power = new HashMap<>();\n        power.put(\"Iris\", 88);\n        System.out.println(power.get(\"Iris\"));\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "88"}, xp: 35 },
    { id: "java-collections-grid-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «88».", starterCode: "import java.util.HashMap;\npublic class Main { ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "88"}, xp: 45 },
    { id: "java-collections-grid-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «88».", starterCode: "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> power = new HashMap<>();\n        power.put(\"Iris\", 88);\n        System.out.println(power.get(\"Iris\"));\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "88"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-collections-grid-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Карта модулей»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "import java.util.HashMap;\npublic class Main {\n    public static void main(String[] args) {\n        HashMap<String, Integer> power = new HashMap<>();\n        power.put(\"Iris\", 88);\n        System.out.println(power.get(\"Iris\"));\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "88"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
