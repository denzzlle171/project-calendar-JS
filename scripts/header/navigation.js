import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const navElem = document.querySelector('.navigation');
const displayedMonthElem = document.querySelector(
  '.navigation__displayed-month'
);

function renderCurrentMonth() {
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  const corentMomth = getDisplayedMonth(getItem('displayedWeekStart'));
  // вставить в .navigation__displayed-month
  const displeyMonth = document.querySelector('.navigation__displayed-month');
  // displeyMonth.append(corentMomth);
  displeyMonth.innerText = corentMomth;
}

const onChangeWeek = (event) => {
  const carentMon = getItem('displayedWeekStart').getDate();
  const isNavbtn = event.target.classList.contains('fas');
  if (!isNavbtn) {
    return;
  }

  const navWeekBtn = event.target.closest('.icon-button');
  // console.log(navWeekBtn);

  if (navWeekBtn.dataset.direction === 'next') {
    // next week
    const nextMon = getItem('displayedWeekStart').setDate(carentMon + 7);
    setItem('displayedWeekStart', new Date(nextMon));
  }
  if (navWeekBtn.dataset.direction === 'prev') {
    // prew week
    const prewMon = getItem('displayedWeekStart').setDate(carentMon - 7);
    setItem('displayedWeekStart', new Date(prewMon));
  }

  renderHeader();
  renderWeek();
  renderCurrentMonth();
  // при переключении недели обновите displayedWeekStart в storage
  // и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)
};

// if (navWeekBtn.dataset.direction === 'today') {
//   // сurent week
//   getItem('displayedWeekStart', getStartOfWeek(new Date()));
// }

export const initNavigation = () => {
  renderCurrentMonth();

  navElem.addEventListener('click', onChangeWeek);
};
