import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-responsive-habitat-02",
  trackId: "html-css",
  worldId: "responsive-habitat",
  order: 2,
  title: "Медиашлюз",
  subtitle: "media queries",
  duration: 21,
  difficulty: "advanced",
  objectives: ["Понять media queries", "Breakpoint", "Responsive"],
  theory: [
    { heading: "Сигнал: media queries", body: "В этом модуле вы изучаете media queries. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  .panel { padding: 16px; }\n  @media (min-width: 768px) { .panel { padding: 40px; } }\n</style>\n<section class=\"panel\">Adaptive panel</section>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «media queries» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: media query, breakpoint, responsive." }
  ],
  starterCode: "<style>\n  .panel { padding: 16px; }\n  @media (min-width: 768px) { .panel { padding: 40px; } }\n</style>\n<section class=\"panel\">Adaptive panel</section>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-responsive-habitat-02-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Медиашлюз» и сохраните ключевую структуру.", starterCode: "@media (min-width: 768px)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["media"]}, xp: 35 },
    { id: "html-css-responsive-habitat-02-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  .panel { padding: 16px; }\n  @media (min-width: 768px) { .panel { padding: 40px; } }\n</style>\n<section class=\"panel\">Adaptive panel</section>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-responsive-habitat-02-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  .panel { padding: 16px; }\n  @media (min-width: 768px) { .panel { padding: 40px; } }\n</style>\n<section class=\"panel\">Adaptive panel</section>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-responsive-habitat-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Медиашлюз»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  .panel { padding: 16px; }\n  @media (min-width: 768px) { .panel { padding: 40px; } }\n</style>\n<section class=\"panel\">Adaptive panel</section>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
