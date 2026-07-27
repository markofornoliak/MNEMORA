import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-styling-spectrum-01",
  trackId: "html-css",
  worldId: "styling-spectrum",
  order: 1,
  title: "Каскад сигнала",
  subtitle: "selectors, cascade и specificity",
  duration: 17,
  difficulty: "intermediate",
  objectives: ["Понять selectors, cascade и specificity", "Cascade", "Class"],
  theory: [
    { heading: "Сигнал: selectors, cascade и specificity", body: "В этом модуле вы изучаете selectors, cascade и specificity. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>\n  body { font-family: system-ui; background: #05070f; color: #edf7ff; }\n  .signal { color: #56f1ff; }\n</style>\n<p class=\"signal\">Linked</p>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «selectors, cascade и specificity» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: selector, cascade, class." }
  ],
  starterCode: "<style>\n  body { font-family: system-ui; background: #05070f; color: #edf7ff; }\n  .signal { color: #56f1ff; }\n</style>\n<p class=\"signal\">Linked</p>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-styling-spectrum-01-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Каскад сигнала» и сохраните ключевую структуру.", starterCode: ".signal { color: ... }", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["selector"]}, xp: 35 },
    { id: "html-css-styling-spectrum-01-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>\n  body { font-family: system-ui; background: #05070f; color: #edf7ff; }\n  .signal { color: #56f1ff; }\n</style>\n<p class=\"signal\">Linked</p>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-styling-spectrum-01-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>\n  body { font-family: system-ui; background: #05070f; color: #edf7ff; }\n  .signal { color: #56f1ff; }\n</style>\n<p class=\"signal\">Linked</p>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-styling-spectrum-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Каскад сигнала»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>\n  body { font-family: system-ui; background: #05070f; color: #edf7ff; }\n  .signal { color: #56f1ff; }\n</style>\n<p class=\"signal\">Linked</p>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
