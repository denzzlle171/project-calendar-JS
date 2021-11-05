export const createNumbersArray = (from, to) => {
  // ф-ция должна генерировать массив чисел от from до to
  const numbersArray = new Array(to - from)
    .fill()
    .map((val, index) => from + index);
  return numbersArray;
};
