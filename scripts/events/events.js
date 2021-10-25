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
  // событие должно позиционироваться абсолютно внутри нужной ячейки времени внутри дня
  // нужно добавить id события в дата атрибут
  // здесь для создания DOM элемента события используйте document.createElement
};

export const renderEvents = () => {
  // достаем из storage все события и дату понедельника отображаемой недели

  //
  console.log(getItem('displayedWeekStart'));
  // console.log(getItem('events'));
  const beginWeekDay = new Date(); // need 'displayedWeekStart'witch !=0
  const endWeekDay = new Date(new Date().setDate(new Date().getDate() + 7)); // need shmoment
  // фильтруем события, оставляем только те, что входят в текущую неделю
  const arrCurentWeekEv = getItem('events').filter((element) => {
    if (element.start >= beginWeekDay && element.start < endWeekDay) {
      return element;
    }
  });
  console.log(arrCurentWeekEv);
  return arrCurentWeekEv;
};

renderEvents();
// создаем для них DOM элементы с помощью createEventElement
// arrCurentWeekEv.map((elem) => {
//   const blockOfevent = document.createElement('div');
// для каждого события находим на странице временную ячейку (.calendar__time-slot)
// и вставляем туда событие
// каждый день и временная ячейка должно содержать дата атрибуты, по которым можно будет найти нужную временную ячейку для события
// не забудьте удалить с календаря старые события перед добавлением новых
// });
// renderEvents();
//
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

// const a = l.add('days', 7);
