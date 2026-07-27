import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-semantic-hull-04",
  trackId: "html-css",
  worldId: "semantic-hull",
  order: 4,
  title: "Доступная форма",
  subtitle: "label, input и button",
  duration: 25,
  difficulty: "beginner",
  objectives: ["Понять label, input и button", "Label", "Input"],
  theory: [
    { heading: "Сигнал: label, input и button", body: "В этом модуле вы изучаете label, input и button. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<form>\n  <label for=\"call\">Позывной</label>\n  <input id=\"call\" name=\"call\" required>\n  <button>Подключиться</button>\n</form>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «label, input и button» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: form, label, input." }
  ],
  starterCode: "<form>\n  <label for=\"call\">Позывной</label>\n  <input id=\"call\" name=\"call\" required>\n  <button>Подключиться</button>\n</form>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-semantic-hull-04-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Доступная форма» и сохраните ключевую структуру.", starterCode: "<form>...</form>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["form"]}, xp: 35 },
    { id: "html-css-semantic-hull-04-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<form>\n  <label for=\"call\">Позывной</label>\n  <input id=\"call\" name=\"call\" required>\n  <button>Подключиться</button>\n</form>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-semantic-hull-04-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<form>\n  <label for=\"call\">Позывной</label>\n  <input id=\"call\" name=\"call\" required>\n  <button>Подключиться</button>\n</form>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-semantic-hull-04-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Доступная форма»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<form>\n  <label for=\"call\">Позывной</label>\n  <input id=\"call\" name=\"call\" required>\n  <button>Подключиться</button>\n</form>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
