import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: 'javascript-runtime-sparks-01',
  trackId: 'javascript',
  worldId: 'runtime-sparks',
  order: 1,
  title: 'Консоль пробуждения',
  subtitle: 'Выражения, инструкции и первый наблюдаемый результат',
  duration: 18,
  difficulty: 'beginner',
  objectives: [
    'Отличать значение, выражение и исполняемую инструкцию',
    'Использовать console.log для наблюдения за состоянием программы',
    'Собирать строку из переменных без потери пробелов и порядка'
  ],
  theory: [
    {
      heading: 'JavaScript вычисляет выражения',
      body: 'Выражение производит значение: число, строку, результат сравнения или вызова функции. Инструкция говорит среде выполнения, что сделать с этим значением. В console.log(2 + 3) сначала вычисляется 2 + 3, и только затем число 5 передаётся в консоль.',
      code: 'console.log(2 + 3);\nconsole.log("MNEMORA".toLowerCase());'
    },
    {
      heading: 'Консоль — инструмент наблюдения, а не часть интерфейса',
      body: 'console.log помогает увидеть промежуточное состояние и проверить гипотезу. В реальном приложении пользователь может никогда не увидеть консоль, но разработчик использует её, чтобы понять порядок событий и значения переменных. Вывод должен отвечать на конкретный диагностический вопрос.',
      code: 'const system = "MNEMORA";\nconst status = "ONLINE";\nconsole.log(`${system} ${status}`);'
    },
    {
      heading: 'Точка с запятой и порядок выполнения',
      body: 'Точка с запятой завершает инструкцию явно. JavaScript часто может вставить её автоматически, но на старте полезно видеть границы команд. Среда выполняет инструкции сверху вниз, пока асинхронные события не изменят этот порядок — к ним вы вернётесь в третьем мире.'
    }
  ],
  starterCode: 'const system = "MNEMORA";\nconst status = "ONLINE";\nconsole.log(`${system} ${status}`);',
  expectedOutput: 'MNEMORA ONLINE',
  tasks: [
    {
      id: 'javascript-runtime-sparks-01-task-1',
      title: 'Точный вывод',
      prompt: 'Выведите ровно MNEMORA ONLINE одним вызовом console.log.',
      starterCode: 'console.log("...");',
      solutionHint: 'Проверьте регистр, пробел и отсутствие дополнительных символов.',
      validator: { kind: 'exact-output', expected: 'MNEMORA ONLINE' },
      xp: 35
    },
    {
      id: 'javascript-runtime-sparks-01-task-2',
      title: 'Шаблонная строка',
      prompt: 'Создайте const system и const status, затем соберите из них строку MNEMORA ONLINE с помощью template literal.',
      starterCode: 'const system = "MNEMORA";\nconst status = "...";\n\nconsole.log(`...`);',
      solutionHint: 'Внутри обратных кавычек значение переменной вставляется конструкцией ${variable}.',
      validator: { kind: 'contains-output', expected: 'MNEMORA ONLINE' },
      xp: 45
    },
    {
      id: 'javascript-runtime-sparks-01-task-3',
      title: 'Порядок инструкций',
      prompt: 'Сначала выведите BOOT, затем MNEMORA ONLINE. Результат должен содержать ровно две строки в этом порядке.',
      starterCode: 'console.log("MNEMORA ONLINE");\n// добавьте BOOT и расположите команды правильно',
      solutionHint: 'Синхронные инструкции выполняются сверху вниз.',
      validator: { kind: 'exact-output', expected: 'BOOT\nMNEMORA ONLINE' },
      xp: 55
    }
  ],
  bonusTask: {
    id: 'javascript-runtime-sparks-01-bonus',
    title: 'Диагностический объект',
    prompt: 'Создайте объект system с полями name и online. Выведите MNEMORA ONLINE, используя значения этих полей.',
    starterCode: 'const system = {\n  name: "MNEMORA",\n  online: true\n};\n\n// сформируйте диагностическую строку',
    solutionHint: 'Преобразуйте boolean в слово ONLINE с помощью условного выражения.',
    validator: { kind: 'contains-output', expected: 'MNEMORA ONLINE' },
    xp: 90,
    bonus: true
  }
};

export default lesson;
