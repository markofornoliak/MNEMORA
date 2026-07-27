import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-styling-spectrum-02",
  trackId: "html-css",
  worldId: "styling-spectrum",
  order: 2,
  title: "Модель оболочки",
  subtitle: "box model",
  duration: 20,
  difficulty: "intermediate",
  objectives: ["Понять box model", "Padding", "Border"],
  theory: [
    { heading: "Сигнал: box model", body: "В этом модуле вы изучаете box model. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  .module { width: 240px; padding: 24px; border: 1px solid #56f1ff; margin: 32px; box-sizing: border-box; }\n</style>\n<div class=\"module\">Memory core</div>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «box model» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: box model, padding, border." }
  ],
  starterCode: "<style>\n  .module { width: 240px; padding: 24px; border: 1px solid #56f1ff; margin: 32px; box-sizing: border-box; }\n</style>\n<div class=\"module\">Memory core</div>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-styling-spectrum-02-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Модель оболочки» и сохраните ключевую структуру.", starterCode: ".module { padding: ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["box"]}, xp: 35 },
    { id: "html-css-styling-spectrum-02-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  .module { width: 240px; padding: 24px; border: 1px solid #56f1ff; margin: 32px; box-sizing: border-box; }\n</style>\n<div class=\"module\">Memory core</div>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-styling-spectrum-02-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  .module { width: 240px; padding: 24px; border: 1px solid #56f1ff; margin: 32px; box-sizing: border-box; }\n</style>\n<div class=\"module\">Memory core</div>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-styling-spectrum-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Модель оболочки»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  .module { width: 240px; padding: 24px; border: 1px solid #56f1ff; margin: 32px; box-sizing: border-box; }\n</style>\n<div class=\"module\">Memory core</div>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
