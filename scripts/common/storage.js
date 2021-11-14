const storage = {
  // используется для удаления события
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: null,
  // хранит массив всех событий
  events: [
    {
      id: 0.7520027086457333,
      title: 'go to shop',
      description: '......',
      start: new Date('2021-11-21T01:30:00.000Z'),
      end: new Date('2021-11-21T04:30:00.000Z'),
    },
    {
      id: 0.2520027086455533,
      title: 'Just Title',
      description: 'Some description',
      start: new Date('2021-11-19T08:00:00.000Z'),
      end: new Date('2021-11-19T09:30:00.000Z'),
    },
    {
      id: 0.952002999999993,
      title: 'call my friend',
      description: 'call to HarisonFord',
      start: new Date('2021-11-17T21:10:00.000Z'),
      end: new Date('2021-11-17T22:22:00.000Z'),
    },

    {
      id: 0.25200666669993,
      title: 'hack wite hause',
      description: 'dont ask why, jast do it',
      start: new Date('2021-11-16T04:10:00.000Z'),
      end: new Date('2021-11-16T05:30:00.000Z'),
    },
    {
      id: 0.77777776669993,
      title: 'sleap',
      description: 'go to bed',
      start: new Date('2021-11-20T01:00:00.000Z'),
      end: new Date('2021-11-20T07:00:00.000Z'),
    },
  ],
  // это все данные, которые вам нужно хранить для работы приложения
};
console.log();

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage
  storage[key] = value;
};

export const getItem = (key) => {
  // ф-ция должна возвращать по ключу значения из объекта storage
  return storage[key];
};
