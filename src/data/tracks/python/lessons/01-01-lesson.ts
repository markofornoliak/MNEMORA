import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: 'python-signal-basics-01',
  trackId: 'python',
  worldId: 'signal-basics',
  order: 1,
  title: 'Первый сигнал',
  subtitle: 'Как Python выполняет программу и показывает результат',
  duration: 18,
  difficulty: 'beginner',
  objectives: [
    'Прочитать короткую программу в порядке её выполнения',
    'Различать строковое значение, вызов функции и наблюдаемый вывод',
    'Собрать сообщение из нескольких частей и проверить точный результат'
  ],
  theory: [
    {
      heading: 'Программа — это последовательность команд',
      body: 'Python начинает с первой исполняемой строки и двигается вниз. В небольшом скрипте порядок особенно заметен: если поменять две команды местами, изменится и порядок наблюдаемого результата. Поэтому первый навык — не угадывать, а мысленно пройти программу строка за строкой.',
      code: 'print("BOOT")\nprint("MNEMORA ONLINE")'
    },
    {
      heading: 'print получает значение и отправляет его в вывод',
      body: 'Текст в кавычках — это строковое значение. print(...) — вызов встроенной функции, которой это значение передаётся как аргумент. Кавычки описывают данные, но сами не появляются в консоли. Скобки показывают границы аргументов функции.',
      code: 'system = "MNEMORA"\nstatus = "ONLINE"\nprint(system, status)'
    },
    {
      heading: 'Сначала прогноз, затем запуск',
      body: 'Перед нажатием Run запишите ожидаемый вывод. После запуска сравните прогноз с фактом. Если результат отличается, проверьте три вещи: точность текста, порядок строк и способ соединения значений. Такой цикл формирует привычку отладки с первого урока.'
    }
  ],
  starterCode: 'system = "MNEMORA"\nstatus = "ONLINE"\nprint(system, status)',
  expectedOutput: 'MNEMORA ONLINE',
  tasks: [
    {
      id: 'python-signal-basics-01-task-1',
      title: 'Точный контрольный сигнал',
      prompt: 'Выведите ровно MNEMORA ONLINE одной командой print. Не добавляйте дополнительные строки или знаки.',
      starterCode: 'print("...")',
      solutionHint: 'Строка внутри кавычек должна полностью совпасть с ожидаемым выводом.',
      validator: { kind: 'exact-output', expected: 'MNEMORA ONLINE' },
      xp: 35
    },
    {
      id: 'python-signal-basics-01-task-2',
      title: 'Соберите сообщение из состояния',
      prompt: 'Создайте две переменные system и status, затем передайте обе в print так, чтобы вывод содержал MNEMORA ONLINE.',
      starterCode: 'system = "MNEMORA"\nstatus = "..."\n\n# выведите обе переменные',
      solutionHint: 'print может принимать несколько аргументов и по умолчанию разделяет их пробелом.',
      validator: { kind: 'contains-output', expected: 'MNEMORA ONLINE' },
      xp: 45
    },
    {
      id: 'python-signal-basics-01-task-3',
      title: 'Предсказуемая последовательность',
      prompt: 'Сначала выведите BOOT, а следующей строкой — MNEMORA ONLINE. Итог должен состоять ровно из двух строк в указанном порядке.',
      starterCode: 'print("MNEMORA ONLINE")\n# добавьте команду и исправьте порядок',
      solutionHint: 'Python выполняет команды сверху вниз, поэтому BOOT должен находиться в первой исполняемой строке.',
      validator: { kind: 'exact-output', expected: 'BOOT\nMNEMORA ONLINE' },
      xp: 55
    }
  ],
  bonusTask: {
    id: 'python-signal-basics-01-bonus',
    title: 'Диагностическая панель',
    prompt: 'Создайте переменную checks со значением 3 и выведите строку CHECKS: 3. Затем отдельной строкой сохраните сигнал MNEMORA ONLINE.',
    starterCode: 'checks = 3\n# выведите количество проверок\n# выведите статус системы',
    solutionHint: 'Можно передать текст и число в print отдельными аргументами. Убедитесь, что статус также остаётся в выводе.',
    validator: { kind: 'contains-output', expected: 'CHECKS: 3' },
    xp: 90,
    bonus: true
  }
};

export default lesson;
