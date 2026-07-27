import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "java-reliability-reactor-03",
  trackId: "java",
  worldId: "reliability-reactor",
  order: 3,
  title: "Контролируемый сбой",
  subtitle: "exceptions",
  duration: 24,
  difficulty: "advanced",
  objectives: ["Понять exceptions", "Try", "Catch"],
  theory: [
    { heading: "Сигнал: exceptions", body: "В этом модуле вы изучаете exceptions. В Java эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "public class Main {\n    public static void main(String[] args) {\n        try { Integer.parseInt(\"42\"); System.out.println(\"valid\"); }\n        catch (NumberFormatException ex) { System.out.println(\"invalid\"); }\n    }\n}" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «exceptions» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: exception, try, catch." }
  ],
  starterCode: "public class Main {\n    public static void main(String[] args) {\n        try { Integer.parseInt(\"42\"); System.out.println(\"valid\"); }\n        catch (NumberFormatException ex) { System.out.println(\"invalid\"); }\n    }\n}",
  expectedOutput: "valid",
  tasks: [
    { id: "java-reliability-reactor-03-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «exceptions», которая выводит точный контрольный сигнал.", starterCode: "public class Main {\n    public static void main(String[] args) {\n        try { Integer.parseInt(\"42\"); System.out.println(\"valid\"); }\n        catch (NumberFormatException ex) { System.out.println(\"invalid\"); }\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "valid"}, xp: 35 },
    { id: "java-reliability-reactor-03-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «valid».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        try { ... } catch (...) { ... }\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "valid"}, xp: 45 },
    { id: "java-reliability-reactor-03-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «valid».", starterCode: "public class Main {\n    public static void main(String[] args) {\n        try { Integer.parseInt(\"42\"); System.out.println(\"valid\"); }\n        catch (NumberFormatException ex) { System.out.println(\"invalid\"); }\n    }\n}", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "valid"}, xp: 55 }
  ],
  bonusTask: {
    id: "java-reliability-reactor-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Контролируемый сбой»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "public class Main {\n    public static void main(String[] args) {\n        try { Integer.parseInt(\"42\"); System.out.println(\"valid\"); }\n        catch (NumberFormatException ex) { System.out.println(\"invalid\"); }\n    }\n}",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "valid"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
