import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "html-css-semantic-hull-01",
  trackId: "html-css",
  worldId: "semantic-hull",
  order: 1,
  title: "Первый документ",
  subtitle: "doctype, html, head и body",
  duration: 16,
  difficulty: "beginner",
  objectives: ["Понять doctype, html, head и body", "Head", "Body"],
  theory: [
    { heading: "Сигнал: doctype, html, head и body", body: "В этом модуле вы изучаете doctype, html, head и body. В HTML / CSS эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "<!doctype html>\n<html lang=\"ru\">\n<head><title>MNEMORA</title></head>\n<body><h1>Code Observatory</h1></body>\n</html>" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «doctype, html, head и body» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: doctype, head, body." }
  ],
  starterCode: "<!doctype html>\n<html lang=\"ru\">\n<head><title>MNEMORA</title></head>\n<body><h1>Code Observatory</h1></body>\n</html>",
  expectedOutput: "",
  tasks: [
    { id: "html-css-semantic-hull-01-task-1", title: "Соберите каркас", prompt: "Создайте собственный вариант примера «Первый документ» и сохраните ключевую структуру.", starterCode: "<h1>Code Observatory</h1>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["doctype"]}, xp: 35 },
    { id: "html-css-semantic-hull-01-task-2", title: "Добавьте доступность", prompt: "Добавьте содержательный текст, семантический элемент или доступный атрибут, соответствующий теме.", starterCode: "<!doctype html>\n<html lang=\"ru\">\n<head><title>MNEMORA</title></head>\n<body><h1>Code Observatory</h1></body>\n</html>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": ["<"]}, xp: 45 },
    { id: "html-css-semantic-hull-01-task-3", title: "Измените визуальный сигнал", prompt: "Измените стиль или структуру так, чтобы результат заметно отличался, но оставался корректным.", starterCode: "<!doctype html>\n<html lang=\"ru\">\n<head><title>MNEMORA</title></head>\n<body><h1>Code Observatory</h1></body>\n</html>", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "html-contains", "patterns": [">"]}, xp: 55 }
  ],
  bonusTask: {
    id: "html-css-semantic-hull-01-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Первый документ»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "<!doctype html>\n<html lang=\"ru\">\n<head><title>MNEMORA</title></head>\n<body><h1>Code Observatory</h1></body>\n</html>",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "html-contains", "patterns": ["<style", "</style>"]},
    xp: 90,
    bonus: true
  }
};

export default lesson;
