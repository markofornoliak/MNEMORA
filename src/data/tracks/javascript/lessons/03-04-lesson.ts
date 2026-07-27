import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "javascript-interface-logic-04",
  trackId: "javascript",
  worldId: "interface-logic",
  order: 4,
  title: "Класс навигатора",
  subtitle: "class и композиция",
  duration: 27,
  difficulty: "advanced",
  objectives: ["Понять class и композиция", "Constructor", "Method"],
  theory: [
    { heading: "Сигнал: class и композиция", body: "В этом модуле вы изучаете class и композиция. В JavaScript эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "class Navigator {\n  constructor(name) { this.name = name; }\n  route(destination) { return `${this.name}->${destination}`; }\n}\nconsole.log(new Navigator(\"Iris\").route(\"Core\"));" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «class и композиция» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: class, constructor, method." }
  ],
  starterCode: "class Navigator {\n  constructor(name) { this.name = name; }\n  route(destination) { return `${this.name}->${destination}`; }\n}\nconsole.log(new Navigator(\"Iris\").route(\"Core\"));",
  expectedOutput: "Iris->Core",
  tasks: [
    { id: "javascript-interface-logic-04-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «class и композиция», которая выводит точный контрольный сигнал.", starterCode: "class Navigator {\n  constructor(name) { this.name = name; }\n  route(destination) { return `${this.name}->${destination}`; }\n}\nconsole.log(new Navigator(\"Iris\").route(\"Core\"));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Iris->Core"}, xp: 35 },
    { id: "javascript-interface-logic-04-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Iris->Core».", starterCode: "class Navigator {\n  ...\n}\nconsole.log(new Navigator(\"Iris\").route(\"Core\"));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Iris->Core"}, xp: 45 },
    { id: "javascript-interface-logic-04-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Iris->Core».", starterCode: "class Navigator {\n  constructor(name) { this.name = name; }\n  route(destination) { return `${this.name}->${destination}`; }\n}\nconsole.log(new Navigator(\"Iris\").route(\"Core\"));", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Iris->Core"}, xp: 55 }
  ],
  bonusTask: {
    id: "javascript-interface-logic-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Класс навигатора»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "class Navigator {\n  constructor(name) { this.name = name; }\n  route(destination) { return `${this.name}->${destination}`; }\n}\nconsole.log(new Navigator(\"Iris\").route(\"Core\"));",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Iris->Core"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
