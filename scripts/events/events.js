import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
  // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {
  // ф-ция для удаления всех событий с календаря
}

const createEventElement = (event) => {
  // ф-ция создает DOM элемент события
  const blockOfEvent = document.createElement('div');
  const eventTitle = document.createElement('div');
  const eventTime = document.createElement('div');

  blockOfEvent.classList.add('event');
  blockOfEvent.setAttribute('data-event-id', event.id);
  blockOfEvent.setAttribute('data-event-date', event.start.getDate());
  blockOfEvent.setAttribute('data-event-time', event.start.getHours());
  blockOfEvent.setAttribute(
    'style',
    `top: ${event.start.getMinutes()}px; height: ${
      (event.end.getHours() - event.start.getHours()) * 60 +
      (event.end.getMinutes() - event.start.getMinutes())
    }px`
  );

  eventTitle.classList.add('event__title');
  eventTitle.innerText = event.title;
  blockOfEvent.append(eventTitle);

  eventTime.classList.add('event__time');
  eventTime.innerText = `${event.start.getHours()}:${event.start.getMinutes()} - ${event.end.getHours()}:${event.end.getMinutes()}`;
  blockOfEvent.append(eventTime);

  // const test = document.querySelector('.create-event-btn'); // jast test
  // test.append(blockOfEvent); // jast test
  return blockOfEvent;
  //   событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  //   нужно добавить id события в дата атрибут
  //   здесь для создания DOM элемента события используйте document.createElement
};

export const renderEvents = () => {
  // достаем из storage все события и дату понедельника отображаемой недели
  const beginWeekDay = getItem('displayedWeekStart');
  const endWeekDay = shmoment(getItem('displayedWeekStart'))
    .add('days', 6)
    .result();
  // фильтруем события, оставляем только те, что входят в текущую неделю
  const arrCurentWeekEv = getItem('events').filter((element) => {
    if (element.start >= beginWeekDay && element.start <= endWeekDay) {
      return element;
    }
    return false;
  });

  // создаем для них DOM элементы с помощью createEventElement
  const arrElemOfEv = arrCurentWeekEv.map((elem) => {
    return createEventElement(elem);
  });

  arrElemOfEv.forEach((element) => {
    console.log(element);
    // const elemForEvent = document.querySelector('.calendar__time-slot');
    // if (
    // elemForEvent.contains.time === element.dataset.eventTtime
    // &&
    // elemForEvent.closest.contains.date === element.dataset.eventDate
    //   ) {
    //     elemForEvent.append(element);
    //   }
  });

  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  // не забудьте удалить с календаря старые события перед добавлением новых
};

function onDeleteEvent() {
  // достаем из storage массив событий и eventIdToDelete
  // удаляем из массива нужное событие и записываем в storage новый массив
  // закрыть попап
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
}

deleteEventBtn.addEventListener('click', onDeleteEvent);

weekElem.addEventListener('click', handleEventClick);

// `<div data-event-id="${0000000000}" class="event" style="${top:10px; height: 120 px}">
//   <div class="event__title">${Title}</div>
//   <div class="event__time"> ${3:10} - ${6:30}</div>
// </div>`

const dateToId = (date) => {
  console.log(new Date(date).getTime());
  return new Date(date).getTime();
};

// dateToId(new Date('2021-10-28T01:10:00.000Z'));
// dateToId(new Date('2021-10-19T08:00:00.000Z'));
