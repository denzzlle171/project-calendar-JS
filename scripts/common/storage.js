let storage = {
  // используется для удаления события
  eventIdToDelete: null,
  // хранит дату понедельника той отображаемой недели
  displayedWeekStart: null,
  // хранит массив всех событий
  events: [
    {
      id: 0.7520027086457333,
      title: 'go to banana',
      description: 'where is my mind',
      start: new Date('2021-10-28T01:10:00.000Z'),
      end: new Date('2021-10-28T04:30:00.000Z'),
    },
    {
      id: 0.2520027086455533,
      title: 'Title',
      description: 'Some description',
      start: new Date('2021-10-19T08:00:00.000Z'),
      end: new Date('2021-10-19T09:30:00.000Z'),
    },
    {
      id: 0.952002999999993,
      title: 'call my friend',
      description: 'call to HarisonFord',
      start: new Date('2021-10-25T03:10:00.000Z'),
      end: new Date('2021-10-25T05:30:00.000Z'),
    },

    {
      id: 0.25200666669993,
      title: 'hack wite hause',
      description: 'dont ask why, jast do it',
      start: new Date('2021-10-23T03:10:00.000Z'),
      end: new Date('2021-10-23T05:30:00.000Z'),
    },
    {
      id: 0.77777776669993,
      title: 'sleap',
      description: 'go to bed',
      start: new Date('2021-11-04T01:00:00.000Z'),
      end: new Date('2021-11-04T02:00:00.000Z'),
    },
  ],
  // это все данные, которые вам нужно хранить для работы приложения
};

export const setItem = (key, value) => {
  // ф-ция должна устанавливать значения в объект storage
  storage[key] = value;
};

export const getItem = (key) => {
  // ф-ция должна возвращать по ключу значения из объекта storage
  return storage[key];
};

// пример объекта события
const eventExample = {
  id: 0.7520027086457333, // id понадобится для работы с событиями
  title: 'Title',
  description: 'Some description',
  start: new Date('2020-03-17T01:10:00.000Z'),
  end: new Date('2020-03-17T04:30:00.000Z'),
};

// console.log(new Date('2020-03-17T01:10:00.000Z').getDate());
