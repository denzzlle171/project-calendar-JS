import { getItem, setItem } from '../common/storage.js';
import { renderEvents } from './events.js';
import { getDateTime } from '../common/time.utils.js';
import { closeModal } from '../common/modal.js';

const eventFormElem = document.querySelector('.event-form');
const closeEventFormBtn = document.querySelector('.create-event__close-btn');
const submitBtn = document.querySelector('.event-form__submit-btn');

function clearEventForm() {
  // ф-ция должна очистить поля формы от значений
  eventFormElem.reset();
}

function onCloseEventForm() {
  // здесь нужно закрыть модальное окно и очистить форму
  closeModal();
  clearEventForm();
}

function onCreateEvent(event) {
  event.preventDefault();
  // задача этой ф-ции только добавить новое событие в массив событий, что хранится в storage
  // при подтверждении формы нужно считать данные с формы
  // с формы вы получите поля date, startTime, endTime, title, description
  const title = eventFormElem.querySelector('[name = "title"]');
  const description = eventFormElem.querySelector('[name="description"]');
  const start = eventFormElem.querySelector('[name="startTime"]');
  const end = eventFormElem.querySelector('[name="endTime"]');
  const date = eventFormElem.querySelector('[name = "date"]');
  // на основе полей date, startTime, endTime нужно посчитать дату начала и окончания события
  // date, startTime, endTime - строки. Вам нужно с помощью getDateTime из утилит посчитать start и end объекта события
  const valueEvent = {
    id: new Date().getTime(), // now time to Timestam
    title: title.value,
    description: description.value,
    start: new Date(getDateTime(date.value, start.value).toISOString()),
    end: new Date(getDateTime(date.value, end.value).toISOString()),
  };
  const events = getItem('events');
  events.push(valueEvent);
  setItem('events', events);
  renderEvents();
  onCloseEventForm();
  // полученное событие добавляем в массив событий, что хранится в storage
  // закрываем форму
  // и запускаем перерисовку событий с помощью renderEvents
  // onCloseEventForm();
}

submitBtn.addEventListener('click', onCreateEvent);

closeEventFormBtn.addEventListener('click', onCloseEventForm);

export function initEventForm() {
  // подпишитесь на сабмит формы и на закрытие формы
}
