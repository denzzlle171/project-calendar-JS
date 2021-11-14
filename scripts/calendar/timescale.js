import {
  createNumbersArray,
  formatNumbers,
} from '../common/createNumbersArray.js';
// import { formatNumbers } from '../common/createNumbersArray.js';

export const renderTimescale = () => {
  // ф-ция должна генерировать разметку для боковой шкалы времени (24 часа)
  // bring to format 00:00
  const arrChangeNumber = createNumbersArray(0, 24).map((element) =>
    formatNumbers(element)
  );
  // create string
  const ArrTimeString = arrChangeNumber.map(
    (element) =>
      `<div class="time-slot"><span class="time-slot__time"> ${element}:00 </span>
    </div>`
  );
  // change array  to  string & delete ","
  const TimeRangeString = ArrTimeString.toString().replace(/,/g, ' ');

  // полученную разметку вставьте на страницу с помощью innerHTML в .calendar__time-scale
  const scaleSlots = document.querySelector('.calendar__time-scale');
  scaleSlots.innerHTML = TimeRangeString;
};
