import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-signal-basics-01",
  trackId: "python",
  worldId: "signal-basics",
  order: 1,
  title: "Первый сигнал",
  subtitle: "print и последовательность выполнения",
  duration: 16,
  difficulty: "beginner",
  objectives: ["Понять print и последовательность выполнения", "Строка", "Вывод"],
  theory: [
    { heading: "Сигнал: print и последовательность выполнения", body: "В этом модуле вы изучаете print и последовательность выполнения. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "print(\"MNEMORA ONLINE\")" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «print и последовательность выполнения» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: print, строка, вывод." }
  ],
  starterCode: "print(\"MNEMORA ONLINE\")",
  expectedOutput: "MNEMORA ONLINE",
  tasks: [
    { id: "python-signal-basics-01-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «print и последовательность выполнения», которая выводит точный контрольный сигнал.", starterCode: "print(\"MNEMORA ONLINE\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "MNEMORA ONLINE"}, xp: 35 },
    { id: "python-signal-basics-01-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «MNEMORA ONLINE».", starterCode: "print(\"...\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 45 },
    { id: "python-signal-basics-01-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «MNEMORA ONLINE».", starterCode: "print(\"MNEMORA ONLINE\")", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-signal-basics-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Первый сигнал»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "print(\"MNEMORA ONLINE\")",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "MNEMORA ONLINE"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
