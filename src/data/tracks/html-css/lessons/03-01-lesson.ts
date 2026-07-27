import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-responsive-habitat-01",
  trackId: "html-css",
  worldId: "responsive-habitat",
  order: 1,
  title: "Жидкая типографика",
  subtitle: "clamp и относительные единицы",
  duration: 18,
  difficulty: "advanced",
  objectives: ["Понять clamp и относительные единицы", "Rem", "Viewport"],
  theory: [
    { heading: "Сигнал: clamp и относительные единицы", body: "В этом модуле вы изучаете clamp и относительные единицы. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  h1 { font-size: clamp(2rem, 8vw, 6rem); line-height: .9; }\n</style>\n<h1>MNEMORA</h1>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «clamp и относительные единицы» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: clamp, rem, viewport." }
  ],
  starterCode: "<style>\n  h1 { font-size: clamp(2rem, 8vw, 6rem); line-height: .9; }\n</style>\n<h1>MNEMORA</h1>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-responsive-habitat-01-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Жидкая типографика» и сохраните ключевую структуру.", starterCode: "font-size: clamp(...)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["clamp"]}, xp: 35 },
    { id: "html-css-responsive-habitat-01-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  h1 { font-size: clamp(2rem, 8vw, 6rem); line-height: .9; }\n</style>\n<h1>MNEMORA</h1>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-responsive-habitat-01-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  h1 { font-size: clamp(2rem, 8vw, 6rem); line-height: .9; }\n</style>\n<h1>MNEMORA</h1>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-responsive-habitat-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Жидкая типографика»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  h1 { font-size: clamp(2rem, 8vw, 6rem); line-height: .9; }\n</style>\n<h1>MNEMORA</h1>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
