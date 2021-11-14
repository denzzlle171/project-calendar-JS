import { getItem } from '../common/storage.js';
import { generateWeekRange } from '../common/time.utils.js';
import { openModal } from '../common/modal.js';

const daysOfWeek = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

export const renderHeader = () => {
  // на основе displayedWeekStart из storage с помощью generateWeekRange сформируйте массив дней текущей недели
  // console.log(getItem('displayedWeekStart'));
  const daysCurentWeek = generateWeekRange(getItem('displayedWeekStart'));
  // на основе полученного массива сформируйте разметку в виде строки - 7 дней (день недели и число в месяце)
  const daysItem = daysCurentWeek.map(
    (elem) =>
      `<div class='calendar__day-label day-label' data-data-week=${elem.toISOString()}>
<span class = 'day-label__day-name'>${daysOfWeek[elem.getDay()]}</span>
<span class = 'day-label__day-number'>${elem.getDate()}</span>
  </div>`
  );
  // полученную разметку вставить на страницу с помощью innerHTML в .calendar__header
  const headerWeek = document.querySelector('.calendar__header');

  const curentWeek = daysItem.toString().replace(/,/g, ' ');
  headerWeek.innerHTML = curentWeek;
  // в дата атрибуте каждой ячейки должно хранить для какого часа эта ячейка
  // при клике на кнопку "Create" открыть модальное окно с формой для создания события
  // назначьте здесь обработчик
  //---------------------------------------------------------
  // for marker day of week
  const allWeekDays = [...document.querySelectorAll('.calendar__day-label')];
  allWeekDays.map((day) => {
    const curentDayWeek = new Date(day.dataset.dataWeek).toDateString();
    const dayMark = new Date().toDateString();

    if (curentDayWeek === dayMark) {
      day.classList.add('day-marker');
      console.log(day);
    }
    return null;
  });
  //---------------------------------------------------------
};
