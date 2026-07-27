import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-responsive-habitat-04",
  trackId: "html-css",
  worldId: "responsive-habitat",
  order: 4,
  title: "Уважение к движению",
  subtitle: "prefers-reduced-motion",
  duration: 27,
  difficulty: "advanced",
  objectives: ["Понять prefers-reduced-motion", "Motion", "Media"],
  theory: [
    { heading: "Сигнал: prefers-reduced-motion", body: "В этом модуле вы изучаете prefers-reduced-motion. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  .beacon { animation: pulse 1.2s infinite alternate; }\n  @keyframes pulse { to { transform: scale(1.08); } }\n  @media (prefers-reduced-motion: reduce) { .beacon { animation: none; } }\n</style>\n<button class=\"beacon\">Activate</button>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «prefers-reduced-motion» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: accessibility, motion, media." }
  ],
  starterCode: "<style>\n  .beacon { animation: pulse 1.2s infinite alternate; }\n  @keyframes pulse { to { transform: scale(1.08); } }\n  @media (prefers-reduced-motion: reduce) { .beacon { animation: none; } }\n</style>\n<button class=\"beacon\">Activate</button>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-responsive-habitat-04-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Уважение к движению» и сохраните ключевую структуру.", starterCode: "prefers-reduced-motion", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["accessibility"]}, xp: 35 },
    { id: "html-css-responsive-habitat-04-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  .beacon { animation: pulse 1.2s infinite alternate; }\n  @keyframes pulse { to { transform: scale(1.08); } }\n  @media (prefers-reduced-motion: reduce) { .beacon { animation: none; } }\n</style>\n<button class=\"beacon\">Activate</button>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-responsive-habitat-04-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  .beacon { animation: pulse 1.2s infinite alternate; }\n  @keyframes pulse { to { transform: scale(1.08); } }\n  @media (prefers-reduced-motion: reduce) { .beacon { animation: none; } }\n</style>\n<button class=\"beacon\">Activate</button>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-responsive-habitat-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Уважение к движению»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  .beacon { animation: pulse 1.2s infinite alternate; }\n  @keyframes pulse { to { transform: scale(1.08); } }\n  @media (prefers-reduced-motion: reduce) { .beacon { animation: none; } }\n</style>\n<button class=\"beacon\">Activate</button>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
