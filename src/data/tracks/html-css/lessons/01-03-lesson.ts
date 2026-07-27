import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-semantic-hull-03",
  trackId: "html-css",
  worldId: "semantic-hull",
  order: 3,
  title: "Навигационный контур",
  subtitle: "nav, lists и links",
  duration: 22,
  difficulty: "beginner",
  objectives: ["Понять nav, lists и links", "Anchor", "List"],
  theory: [
    { heading: "Сигнал: nav, lists и links", body: "В этом модуле вы изучаете nav, lists и links. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<nav aria-label=\"Основная навигация\">\n  <ul><li><a href=\"#python\">Python</a></li><li><a href=\"#js\">JavaScript</a></li></ul>\n</nav>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «nav, lists и links» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: nav, anchor, list." }
  ],
  starterCode: "<nav aria-label=\"Основная навигация\">\n  <ul><li><a href=\"#python\">Python</a></li><li><a href=\"#js\">JavaScript</a></li></ul>\n</nav>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-semantic-hull-03-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Навигационный контур» и сохраните ключевую структуру.", starterCode: "<nav aria-label=\"Треки\">...</nav>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["nav"]}, xp: 35 },
    { id: "html-css-semantic-hull-03-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<nav aria-label=\"Основная навигация\">\n  <ul><li><a href=\"#python\">Python</a></li><li><a href=\"#js\">JavaScript</a></li></ul>\n</nav>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-semantic-hull-03-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<nav aria-label=\"Основная навигация\">\n  <ul><li><a href=\"#python\">Python</a></li><li><a href=\"#js\">JavaScript</a></li></ul>\n</nav>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-semantic-hull-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Навигационный контур»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<nav aria-label=\"Основная навигация\">\n  <ul><li><a href=\"#python\">Python</a></li><li><a href=\"#js\">JavaScript</a></li></ul>\n</nav>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
