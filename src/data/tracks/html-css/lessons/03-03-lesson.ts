import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-responsive-habitat-03",
  trackId: "html-css",
  worldId: "responsive-habitat",
  order: 3,
  title: "Адаптивные изображения",
  subtitle: "picture и object-fit",
  duration: 24,
  difficulty: "advanced",
  objectives: ["Понять picture и object-fit", "Object-fit", "Alt"],
  theory: [
    { heading: "Сигнал: picture и object-fit", body: "В этом модуле вы изучаете picture и object-fit. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<style>.viewport { width: 100%; height: 220px; object-fit: cover; border-radius: 24px; }</style>\n<img class=\"viewport\" src=\"https://picsum.photos/800/400\" alt=\"Абстрактная туманность\">" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «picture и object-fit» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: image, object-fit, alt." }
  ],
  starterCode: "<style>.viewport { width: 100%; height: 220px; object-fit: cover; border-radius: 24px; }</style>\n<img class=\"viewport\" src=\"https://picsum.photos/800/400\" alt=\"Абстрактная туманность\">",
  expectedOutput: "",
  tasks: [
    { id: "html-css-responsive-habitat-03-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Адаптивные изображения» и сохраните ключевую структуру.", starterCode: "img with alt and object-fit", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["image"]}, xp: 35 },
    { id: "html-css-responsive-habitat-03-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<style>.viewport { width: 100%; height: 220px; object-fit: cover; border-radius: 24px; }</style>\n<img class=\"viewport\" src=\"https://picsum.photos/800/400\" alt=\"Абстрактная туманность\">", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-responsive-habitat-03-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<style>.viewport { width: 100%; height: 220px; object-fit: cover; border-radius: 24px; }</style>\n<img class=\"viewport\" src=\"https://picsum.photos/800/400\" alt=\"Абстрактная туманность\">", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-responsive-habitat-03-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Адаптивные изображения»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<style>.viewport { width: 100%; height: 220px; object-fit: cover; border-radius: 24px; }</style>\n<img class=\"viewport\" src=\"https://picsum.photos/800/400\" alt=\"Абстрактная туманность\">",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
