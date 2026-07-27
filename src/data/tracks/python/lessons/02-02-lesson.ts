import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: "python-data-vault-02",
  trackId: "python",
  worldId: "data-vault",
  order: 2,
  title: "Карты метаданных",
  subtitle: "dict и доступ по ключу",
  duration: 20,
  difficulty: "intermediate",
  objectives: ["Понять dict и доступ по ключу", "Key", "Value"],
  theory: [
    { heading: "Сигнал: dict и доступ по ключу", body: "В этом модуле вы изучаете dict и доступ по ключу. В Python эта конструкция задаёт предсказуемый способ выразить намерение программы. Сначала прочитайте пример как последовательность состояний: какие данные существуют, какое действие происходит и какой наблюдаемый результат должен появиться.", code: "probe = {\"name\": \"Iris\", \"power\": 88}\nprint(probe[\"name\"])" },
    { heading: "Модель мышления", body: "Не запоминайте синтаксис изолированно. Свяжите его с моделью MNEMORA: данные — это состояние прибора, операция — импульс, а вывод — измерение. Для темы «dict и доступ по ключу» важно уметь объяснить каждую строку своими словами и предсказать результат до запуска." },
    { heading: "Инженерная привычка", body: "После успешного запуска измените один параметр, затем снова спрогнозируйте результат. Такой микроскопический эксперимент формирует понимание причинности и помогает быстрее находить ошибки. Ключевые понятия урока: dict, key, value." }
  ],
  starterCode: "probe = {\"name\": \"Iris\", \"power\": 88}\nprint(probe[\"name\"])",
  expectedOutput: "Iris",
  tasks: [
    { id: "python-data-vault-02-task-1", title: "Восстановите основной сигнал", prompt: "Напишите программу по теме «dict и доступ по ключу», которая выводит точный контрольный сигнал.", starterCode: "probe = {\"name\": \"Iris\", \"power\": 88}\nprint(probe[\"name\"])", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "exact-output", "expected": "Iris"}, xp: 35 },
    { id: "python-data-vault-02-task-2", title: "Измените параметры", prompt: "Сохраните изучаемую конструкцию, но добейтесь вывода «Iris».", starterCode: "probe = {\"name\": \"Iris\", \"power\": 88}\nprint(...)", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Iris"}, xp: 45 },
    { id: "python-data-vault-02-task-3", title: "Объясните через код", prompt: "Добавьте собственное имя переменной или функцию и сохраните ключевой результат «Iris».", starterCode: "probe = {\"name\": \"Iris\", \"power\": 88}\nprint(probe[\"name\"])", solutionHint: "Сначала предскажите результат, затем меняйте только одну часть программы за раз.", validator: {"kind": "contains-output", "expected": "Iris"}, xp: 55 }
  ],
  bonusTask: {
    id: "python-data-vault-02-bonus",
    title: 'Аномалия созвездия',
    prompt: "Расширьте решение урока «Карты метаданных»: добавьте ещё один осмысленный шаг обработки и сохраните проверяемый результат. Код должен оставаться читаемым и объяснимым.",
    starterCode: "probe = {\"name\": \"Iris\", \"power\": 88}\nprint(probe[\"name\"])",
    solutionHint: 'Разбейте задачу на ввод, преобразование и наблюдаемый результат. Затем проверьте каждую часть отдельно.',
    validator: {"kind": "contains-output", "expected": "Iris"},
    xp: 90,
    bonus: true
  }
};

export default lesson;
