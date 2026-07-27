import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-styling-spectrum-04",
  trackId: "html-css",
  worldId: "styling-spectrum",
  order: 4,
  title: "Сетка обсерватории",
  subtitle: "CSS Grid",
  duration: 26,
  difficulty: "intermediate",
  objectives: ["Понять CSS Grid", "Columns", "Gap"],
  theory: [
    { heading: "Сигнал: CSS Grid", body: "В этом модуле вы изучаете CSS Grid. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n  .cell { min-height: 80px; background: #111936; }\n</style>\n<div class=\"grid\"><div class=\"cell\"></div><div class=\"cell\"></div><div class=\"cell\"></div></div>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «CSS Grid» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: grid, columns, gap." }
  ],
  starterCode: "<style>\n  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n  .cell { min-height: 80px; background: #111936; }\n</style>\n<div class=\"grid\"><div class=\"cell\"></div><div class=\"cell\"></div><div class=\"cell\"></div></div>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-styling-spectrum-04-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Сетка обсерватории» и сохраните ключевую структуру.", starterCode: ".grid { display: grid; }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["grid"]}, xp: 35 },
    { id: "html-css-styling-spectrum-04-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n  .cell { min-height: 80px; background: #111936; }\n</style>\n<div class=\"grid\"><div class=\"cell\"></div><div class=\"cell\"></div><div class=\"cell\"></div></div>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-styling-spectrum-04-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n  .cell { min-height: 80px; background: #111936; }\n</style>\n<div class=\"grid\"><div class=\"cell\"></div><div class=\"cell\"></div><div class=\"cell\"></div></div>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-styling-spectrum-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Сетка обсерватории»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }\n  .cell { min-height: 80px; background: #111936; }\n</style>\n<div class=\"grid\"><div class=\"cell\"></div><div class=\"cell\"></div><div class=\"cell\"></div></div>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
