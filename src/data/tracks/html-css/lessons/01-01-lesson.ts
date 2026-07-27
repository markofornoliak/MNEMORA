import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: 'html-css-semantic-hull-01',
  trackId: 'html-css',
  worldId: 'semantic-hull',
  order: 1,
  title: 'Первый документ',
  subtitle: 'Как браузер читает структуру страницы',
  duration: 20,
  difficulty: 'beginner',
  objectives: [
    'Объяснить роль doctype, html, head и body',
    'Собрать валидный минимальный документ с языком и заголовком',
    'Разделить метаданные страницы и видимое содержимое'
  ],
  theory: [
    {
      heading: 'HTML описывает смысл и структуру',
      body: 'HTML — не язык оформления. Он сообщает браузеру, какие части документа являются заголовком, навигацией, основным содержимым или подвалом. Правильная структура помогает поиску, клавиатурной навигации и вспомогательным технологиям ещё до подключения CSS.',
      code: '<!doctype html>\n<html lang="ru">\n  <head>\n    <title>MNEMORA</title>\n  </head>\n  <body>\n    <h1>Code Observatory</h1>\n  </body>\n</html>'
    },
    {
      heading: 'head настраивает документ, body показывает содержимое',
      body: 'В head находятся название вкладки, кодировка, viewport и другие метаданные. Пользователь обычно не видит их внутри страницы. В body располагаются элементы, которые формируют интерфейс: текст, изображения, ссылки, формы и смысловые области.'
    },
    {
      heading: 'Минимальный каркас уже содержит решения',
      body: 'doctype включает современный режим браузера. Атрибут lang помогает правильно произносить текст. meta charset защищает символы от неверной интерпретации, а viewport делает страницу предсказуемой на мобильных устройствах. Даже пустой документ — это набор важных инженерных решений.',
      code: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">'
    }
  ],
  starterCode: '<!doctype html>\n<html lang="ru">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>MNEMORA</title>\n</head>\n<body>\n  <h1>Code Observatory</h1>\n  <p>Первый семантический документ.</p>\n</body>\n</html>',
  expectedOutput: '',
  tasks: [
    {
      id: 'html-css-semantic-hull-01-task-1',
      title: 'Минимальный документ',
      prompt: 'Соберите документ, содержащий doctype, корневой html и видимую область body.',
      starterCode: '<h1>MNEMORA</h1>',
      solutionHint: 'Начните с <!doctype html>, затем вложите body внутрь html.',
      validator: { kind: 'html-contains', patterns: ['<!doctype html>', '<html', '<body', '</body>', '</html>'] },
      xp: 35
    },
    {
      id: 'html-css-semantic-hull-01-task-2',
      title: 'Метаданные страницы',
      prompt: 'Добавьте head, title MNEMORA и meta charset UTF-8. Содержимое body сохраните.',
      starterCode: '<!doctype html>\n<html lang="ru">\n<body>\n  <h1>Code Observatory</h1>\n</body>\n</html>',
      solutionHint: 'head должен находиться внутри html перед body.',
      validator: { kind: 'html-contains', patterns: ['<head', '<title>mnemora</title>', 'charset="utf-8"', '<body'] },
      xp: 45
    },
    {
      id: 'html-css-semantic-hull-01-task-3',
      title: 'Осмысленная основная область',
      prompt: 'Внутри body создайте main, заголовок h1 и абзац p. Текст должен описывать учебную обсерваторию.',
      starterCode: '<!doctype html>\n<html lang="ru">\n<head><title>MNEMORA</title></head>\n<body>\n  <!-- добавьте основное содержимое -->\n</body>\n</html>',
      solutionHint: 'Оберните h1 и p в элемент <main>...</main>.',
      validator: { kind: 'html-contains', patterns: ['<main', '<h1', '<p', '</main>'] },
      xp: 55
    }
  ],
  bonusTask: {
    id: 'html-css-semantic-hull-01-bonus',
    title: 'Полный каркас интерфейса',
    prompt: 'Создайте страницу с header, nav, main и footer. В nav добавьте хотя бы одну ссылку с понятным текстом.',
    starterCode: '<!doctype html>\n<html lang="ru">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>MNEMORA</title>\n</head>\n<body>\n  <!-- соберите четыре смысловые области -->\n</body>\n</html>',
    solutionHint: 'Используйте landmarks как верхнеуровневые части страницы и поместите ссылку внутрь nav.',
    validator: { kind: 'html-contains', patterns: ['<header', '<nav', '<a ', '<main', '<footer'] },
    xp: 90,
    bonus: true
  }
};

export default lesson;
