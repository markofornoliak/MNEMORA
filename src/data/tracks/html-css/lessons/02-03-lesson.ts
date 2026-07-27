import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-styling-spectrum-03",
  trackId: "html-css",
  worldId: "styling-spectrum",
  order: 3,
  title: "Гибкая орбита",
  subtitle: "Flexbox",
  duration: 23,
  difficulty: "intermediate",
  objectives: ["Понять Flexbox", "Gap", "Alignment"],
  theory: [
    { heading: "Сигнал: Flexbox", body: "В этом модуле вы изучаете Flexbox. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  .orbit { display: flex; gap: 16px; justify-content: center; align-items: center; min-height: 180px; }\n  .node { padding: 16px; border: 1px solid currentColor; }\n</style>\n<div class=\"orbit\"><div class=\"node\">A</div><div class=\"node\">B</div></div>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «Flexbox» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: flexbox, gap, alignment." }
  ],
  starterCode: "<style>\n  .orbit { display: flex; gap: 16px; justify-content: center; align-items: center; min-height: 180px; }\n  .node { padding: 16px; border: 1px solid currentColor; }\n</style>\n<div class=\"orbit\"><div class=\"node\">A</div><div class=\"node\">B</div></div>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-styling-spectrum-03-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Гибкая орбита» и сохраните ключевую структуру.", starterCode: ".orbit { display: flex; }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["flexbox"]}, xp: 35 },
    { id: "html-css-styling-spectrum-03-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  .orbit { display: flex; gap: 16px; justify-content: center; align-items: center; min-height: 180px; }\n  .node { padding: 16px; border: 1px solid currentColor; }\n</style>\n<div class=\"orbit\"><div class=\"node\">A</div><div class=\"node\">B</div></div>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-styling-spectrum-03-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  .orbit { display: flex; gap: 16px; justify-content: center; align-items: center; min-height: 180px; }\n  .node { padding: 16px; border: 1px solid currentColor; }\n</style>\n<div class=\"orbit\"><div class=\"node\">A</div><div class=\"node\">B</div></div>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-styling-spectrum-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Гибкая орбита»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  .orbit { display: flex; gap: 16px; justify-content: center; align-items: center; min-height: 180px; }\n  .node { padding: 16px; border: 1px solid currentColor; }\n</style>\n<div class=\"orbit\"><div class=\"node\">A</div><div class=\"node\">B</div></div>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
