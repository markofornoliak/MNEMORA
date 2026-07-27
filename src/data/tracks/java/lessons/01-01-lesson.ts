import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: 'java-object-forge-01',
  trackId: 'java',
  worldId: 'object-forge',
  order: 1,
  title: 'Точка запуска',
  subtitle: 'Класс Main, метод main и жизненный цикл запуска',
  duration: 20,
  difficulty: 'beginner',
  objectives: [
    'Объяснить, зачем Java-программе нужен класс и метод main',
    'Распознать сигнатуру public static void main(String[] args)',
    'Вывести литерал и значение переменной через System.out.println'
  ],
  theory: [
    {
      heading: 'Java начинает выполнение с метода main',
      body: 'JVM ищет точку входа с точной сигнатурой public static void main(String[] args). public делает метод доступным среде запуска, static позволяет вызвать его без создания объекта Main, void означает отсутствие возвращаемого значения, а args хранит аргументы командной строки.',
      code: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("MNEMORA ONLINE");\n    }\n}'
    },
    {
      heading: 'Класс задаёт границу структуры',
      body: 'Даже минимальная Java-программа находится внутри класса. Позже классы будут описывать объекты и правила предметной области, но уже сейчас они организуют код. Имя public-класса обычно совпадает с именем файла, поэтому в учебной среде используется Main.'
    },
    {
      heading: 'Компиляция отделена от выполнения',
      body: 'Сначала компилятор проверяет синтаксис и типы, затем создаёт bytecode. Только после этого JVM запускает main. Ошибка компиляции означает, что выполнение ещё не началось. Это важное различие: сначала исправляется структура программы, затем исследуется её поведение.',
      code: 'String signal = "MNEMORA ONLINE";\nSystem.out.println(signal);'
    }
  ],
  starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String signal = "MNEMORA ONLINE";\n        System.out.println(signal);\n    }\n}',
  expectedOutput: 'MNEMORA ONLINE',
  tasks: [
    {
      id: 'java-object-forge-01-task-1',
      title: 'Рабочая точка входа',
      prompt: 'Внутри корректного метода main выведите ровно MNEMORA ONLINE.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        // добавьте вывод\n    }\n}',
      solutionHint: 'Используйте System.out.println с одной строкой-литералом.',
      validator: { kind: 'exact-output', expected: 'MNEMORA ONLINE' },
      xp: 35
    },
    {
      id: 'java-object-forge-01-task-2',
      title: 'Типизированный сигнал',
      prompt: 'Создайте переменную String signal со значением MNEMORA ONLINE и выведите переменную.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        String signal = "...";\n        // выведите signal\n    }\n}',
      solutionHint: 'Объявление String фиксирует тип переменной, а println может получить её имя как аргумент.',
      validator: { kind: 'contains-output', expected: 'MNEMORA ONLINE' },
      xp: 45
    },
    {
      id: 'java-object-forge-01-task-3',
      title: 'Порядок инструкций',
      prompt: 'Сначала выведите BOOT, затем MNEMORA ONLINE. Две строки должны появиться в указанном порядке.',
      starterCode: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("MNEMORA ONLINE");\n        // добавьте BOOT и исправьте порядок\n    }\n}',
      solutionHint: 'Инструкции внутри main выполняются сверху вниз.',
      validator: { kind: 'exact-output', expected: 'BOOT\nMNEMORA ONLINE' },
      xp: 55
    }
  ],
  bonusTask: {
    id: 'java-object-forge-01-bonus',
    title: 'Мини-отчёт запуска',
    prompt: 'Создайте int checks со значением 3. Сначала выведите число 3, затем отдельной строкой MNEMORA ONLINE.',
    starterCode: 'public class Main {\n    public static void main(String[] args) {\n        int checks = 3;\n        // выведите checks и статус\n    }\n}',
    solutionHint: 'println принимает и числовые переменные, и строковые литералы.',
    validator: { kind: 'exact-output', expected: '3\nMNEMORA ONLINE' },
    xp: 90,
    bonus: true
  }
};

export default lesson;
