import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-semantic-hull-02",
  trackId: "html-css",
  worldId: "semantic-hull",
  order: 2,
  title: "Смысловые секции",
  subtitle: "header, main, section и footer",
  duration: 19,
  difficulty: "beginner",
  objectives: ["Понять header, main, section и footer", "Main", "Section"],
  theory: [
    { heading: "Сигнал: header, main, section и footer", body: "В этом модуле вы изучаете header, main, section и footer. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<header><h1>MNEMORA</h1></header>\n<main><section><h2>Mission</h2><p>Restore the archive.</p></section></main>\n<footer>Signal 01</footer>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «header, main, section и footer» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: semantic, main, section." }
  ],
  starterCode: "<header><h1>MNEMORA</h1></header>\n<main><section><h2>Mission</h2><p>Restore the archive.</p></section></main>\n<footer>Signal 01</footer>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-semantic-hull-02-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Смысловые секции» и сохраните ключевую структуру.", starterCode: "<main>...</main>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["semantic"]}, xp: 35 },
    { id: "html-css-semantic-hull-02-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<header><h1>MNEMORA</h1></header>\n<main><section><h2>Mission</h2><p>Restore the archive.</p></section></main>\n<footer>Signal 01</footer>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-semantic-hull-02-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<header><h1>MNEMORA</h1></header>\n<main><section><h2>Mission</h2><p>Restore the archive.</p></section></main>\n<footer>Signal 01</footer>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-semantic-hull-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Смысловые секции»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<header><h1>MNEMORA</h1></header>\n<main><section><h2>Mission</h2><p>Restore the archive.</p></section></main>\n<footer>Signal 01</footer>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
