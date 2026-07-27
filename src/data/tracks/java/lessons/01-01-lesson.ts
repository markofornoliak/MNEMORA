import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-object-forge-01",
  trackId: "java",
  worldId: "object-forge",
  order: 1,
  title: "Точка запуска",
  subtitle: "class и main",
  duration: 16,
  difficulty: "beginner",
  objectives: ["Понять class и main", "Main", "Println"],
  theory: [
    { heading: "Сигнал: class и main", body: "В этом модуле вы изучаете class и main. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"MNEMORA ONLINE\");\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «class и main» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: class, main, println." }
  ],
  starterCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"MNEMORA ONLINE\");\n    }\n}",
  expectedOutput: "MNEMORA ONLINE",
  tasks: [
    { id: "java-object-forge-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «class и main», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"MNEMORA ONLINE\");\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "MNEMORA ONLINE"}, xp: 35 },
    { id: "java-object-forge-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «MNEMORA ONLINE».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        // print a signal\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 45 },
    { id: "java-object-forge-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «MNEMORA ONLINE».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"MNEMORA ONLINE\");\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-object-forge-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Точка запуска»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    public static void main(String[] args) {\n        System.out.println(\"MNEMORA ONLINE\");\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
