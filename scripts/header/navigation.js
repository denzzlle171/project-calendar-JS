import { getItem, setItem } from '../common/storage.js';
import { renderWeek } from '../calendar/calendar.js';
import { renderHeader } from '../calendar/header.js';
import { getStartOfWeek, getDisplayedMonth } from '../common/time.utils.js';

const today = document.querySelector('.navigation__today-btn');
const forward = document.querySelector('.button_next');
const backward = document.querySelector('.button_prev');

function renderCurrentMonth() {
  // отрисовать месяц, к которому относиться текущая неделя (getDisplayedMonth)
  const corentMomth = getDisplayedMonth(getItem('displayedWeekStart'));
  // вставить в .navigation__displayed-month
  const displeyMonth = document.querySelector('.navigation__displayed-month');
  // displeyMonth.append(corentMomth);
  displeyMonth.innerText = corentMomth;
}
const reRender = () => {
  renderHeader();
  renderWeek();
  renderCurrentMonth();
};
// при переключении недели обновите displayedWeekStart в storage
// и перерисуйте все необходимые элементы страницы (renderHeader, renderWeek, renderCurrentMonth)

const forwardWeek = () => {
  const nextMon = getItem('displayedWeekStart').setDate(
    getItem('displayedWeekStart').getDate() + 7
  );
  setItem('displayedWeekStart', new Date(nextMon));
  reRender();
};

const backwardWeek = () => {
  const prewMon = getItem('displayedWeekStart').setDate(
    getItem('displayedWeekStart').getDate() - 7
  );
  setItem('displayedWeekStart', new Date(prewMon));
  reRender();
};

const onToday = (event) => {
  setItem('displayedWeekStart', getStartOfWeek(new Date()));
  reRender();
};

export const initNavigation = () => {
  renderCurrentMonth();

  today.addEventListener('click', onToday);
  forward.addEventListener('click', forwardWeek);
  backward.addEventListener('click', backwardWeek);
};
