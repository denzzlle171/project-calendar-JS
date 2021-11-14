import { getItem, setItem } from '../common/storage.js';
import shmoment from '../common/shmoment.js';
import { openPopup, closePopup } from '../common/popup.js';
import { formatNumbers } from '../common/createNumbersArray.js';

const weekElem = document.querySelector('.calendar__week');
const deleteEventBtn = document.querySelector('.delete-event-btn');

function handleEventClick(event) {
  const eventClassName = event.target.className === 'event';
  const parentClassName = event.target.offsetParent.className === 'event';

  if (eventClassName || parentClassName) {
    const deleteId = parentClassName
      ? event.target.offsetParent.dataset.eventId
      : event.target.dataset.eventId;

    setItem('eventIdToDelete', deleteId);
    openPopup(event.clientX, event.clientY);
  }
  // если произошел клик по событию, то нужно паказать попап с кнопкой удаления
  // установите eventIdToDelete с id события в storage
}

function removeEventsFromCalendar() {
  // ф-ция для удаления всех событий с календаря
  const events = document.querySelectorAll('.event');
  events.forEach((element) => {
    element.remove();
  });
}
// const formatNumbers = (numb) => {
//   return numb < 10 ? '0' + numb : numb;
// };

const createEventElement = (event) => {
  removeEventsFromCalendar(); // delete old events
  // ф-ция создает DOM элемент события
  const blockOfEvent = document.createElement('div');
  const eventTitle = document.createElement('div');
  const eventTime = document.createElement('div');
  //   событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  //   нужно добавить id события в дата атрибут
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
  eventTime.innerText = `${formatNumbers(
    event.start.getHours()
  )}:${formatNumbers(event.start.getMinutes())} - ${formatNumbers(
    event.end.getHours()
  )}:${formatNumbers(event.end.getMinutes())}`;
  blockOfEvent.append(eventTime);
  return blockOfEvent;
  //   здесь для создания DOM элемента события используйте document.createElement
};

export const renderEvents = () => {
  removeEventsFromCalendar(); // delete old events
  // достаем из storage все события и дату понедельника отображаемой недели
  const beginWeekDay = getItem('displayedWeekStart');
  const endWeekDay = shmoment(getItem('displayedWeekStart'))
    .add('days', 7)
    .result();
  // фильтруем события, оставляем только те, что входят в текущую неделю
  const arrCurentWeekEv = getItem('events').filter(
    (element) => element.start >= beginWeekDay && element.start < endWeekDay
  );

  // создаем для них DOM элементы с помощью createEventElement
  const arrElemOfEv = arrCurentWeekEv.map((elem) => {
    return createEventElement(elem);
  });

  // для каждого события находим на странице временную ячейку (.calendar__time-slot)
  // и вставляем туда событие
  // каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
  const nawWeek = document.querySelectorAll('.calendar__day');
  const arrNodDay = [...nawWeek];

  arrElemOfEv.forEach((element) => {
    arrNodDay.forEach((el) => {
      if (element.dataset.eventDate === el.dataset.day) {
        const nawTime = el.querySelectorAll('.calendar__time-slot');
        const arrNodTime = [...nawTime];

        arrNodTime.forEach((item) => {
          if (item.dataset.time === element.dataset.eventTime) {
            item.append(element);
          }
        });
      }
    });
  }, arrNodDay);
  // не забудьте удалить с календаря старые события перед добавлением новых
};

function onDeleteEvent() {
  // достаем из storage массив событий и eventIdToDelete
  const store = getItem('events');
  const deletedId = getItem('eventIdToDelete');

  // удаляем из массива нужное событие и записываем в storage новый массив
  const newStore = store.filter((elem) => elem.id !== +deletedId);
  setItem('events', newStore);
  // закрыть попап
  closePopup();
  // перерисовать события на странице в соответствии с новым списком событий в storage (renderEvents)
  renderEvents();
}

deleteEventBtn.addEventListener('click', onDeleteEvent);
weekElem.addEventListener('click', handleEventClick);
