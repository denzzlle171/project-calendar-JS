export const createNumbersArray = (from, to) => {
  // ф-ция должна генерировать массив чисел от from до to
  const numbersArray = [];
  for (let hour = from; hour < to; hour += 1) {
    numbersArray.push(hour);
  }
  return numbersArray;
};
