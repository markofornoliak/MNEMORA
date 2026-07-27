import type { Lesson } from '../../../../types/course';

const lesson: Lesson = {
  id: 'cpp-core-mechanics-01',
  trackId: 'cpp',
  worldId: 'core-mechanics',
  order: 1,
  title: 'Запуск реактора',
  subtitle: 'Компиляция, функция main и поток вывода cout',
  duration: 20,
  difficulty: 'beginner',
  objectives: [
    'Описать путь исходного кода от компиляции до запуска',
    'Объяснить роль include, main, cout и return 0',
    'Вывести строковый литерал и типизированную переменную'
  ],
  theory: [
    {
      heading: 'C++ сначала компилируется',
      body: 'Компилятор переводит исходный код в машинный файл и одновременно проверяет синтаксис и типы. Если проверка не пройдена, функция main не запускается. Поэтому сообщения компилятора — это точные координаты структурной проблемы, а не просто препятствие перед запуском.',
      code: '#include <iostream>\n\nint main() {\n    std::cout << "MNEMORA ONLINE" << std::endl;\n    return 0;\n}'
    },
    {
      heading: 'main — точка входа процесса',
      body: 'Операционная система передаёт управление функции main. Тип int означает, что программа возвращает числовой код завершения. return 0 сообщает об успешном окончании. Позже эти коды позволят другим программам отличать успех от ошибки.'
    },
    {
      heading: 'cout формирует поток данных',
      body: 'std::cout — стандартный поток вывода. Оператор << последовательно отправляет в него значения, а std::endl завершает строку. В отличие от простой команды печати, модель потока позволяет соединять текст, числа и объекты в одной последовательности.',
      code: 'std::string signal = "MNEMORA ONLINE";\nstd::cout << signal << std::endl;'
    }
  ],
  starterCode: '#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main() {\n    string signal = "MNEMORA ONLINE";\n    cout << signal << endl;\n    return 0;\n}',
  expectedOutput: 'MNEMORA ONLINE',
  tasks: [
    {
      id: 'cpp-core-mechanics-01-task-1',
      title: 'Корректный запуск',
      prompt: 'Внутри функции main выведите ровно MNEMORA ONLINE и верните код успешного завершения.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    // добавьте вывод\n    return 0;\n}',
      solutionHint: 'Используйте cout, оператор << и endl.',
      validator: { kind: 'exact-output', expected: 'MNEMORA ONLINE' },
      xp: 35
    },
    {
      id: 'cpp-core-mechanics-01-task-2',
      title: 'Типизированный сигнал',
      prompt: 'Создайте string signal со значением MNEMORA ONLINE и отправьте переменную в cout.',
      starterCode: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n    string signal = "...";\n    // выведите signal\n    return 0;\n}',
      solutionHint: 'После подключения <string> переменная типа string может хранить текст.',
      validator: { kind: 'contains-output', expected: 'MNEMORA ONLINE' },
      xp: 45
    },
    {
      id: 'cpp-core-mechanics-01-task-3',
      title: 'Порядок потока',
      prompt: 'Сначала выведите BOOT, затем MNEMORA ONLINE. Обе строки должны завершаться endl.',
      starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "MNEMORA ONLINE" << endl;\n    // добавьте BOOT и исправьте порядок\n    return 0;\n}',
      solutionHint: 'Инструкции main выполняются сверху вниз, а каждый endl создаёт новую строку.',
      validator: { kind: 'exact-output', expected: 'BOOT\nMNEMORA ONLINE' },
      xp: 55
    }
  ],
  bonusTask: {
    id: 'cpp-core-mechanics-01-bonus',
    title: 'Код завершения диагностики',
    prompt: 'Создайте int checks со значением 3. Сначала выведите число 3, затем отдельной строкой MNEMORA ONLINE.',
    starterCode: '#include <iostream>\nusing namespace std;\n\nint main() {\n    int checks = 3;\n    // выведите checks и статус\n    return 0;\n}',
    solutionHint: 'cout принимает значения разных типов через последовательность операторов <<.',
    validator: { kind: 'exact-output', expected: '3\nMNEMORA ONLINE' },
    xp: 90,
    bonus: true
  }
};

export default lesson;
