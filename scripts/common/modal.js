const modalElem = document.querySelector('.modal');
// const modalContentElem = document.querySelector('.modal__content');
// опишите ф-ции openModal и closeModal
// модальное окно работает похожим на попап образом
// отличие в том, что попап отображается в месте клика, а модальное окно - по центру экрана
const createEvBtn = document.querySelector('.create-event-btn');
export const openModal = () => {
  modalElem.classList.toggle('hidden');
};
createEvBtn.addEventListener('click', openModal);

export const closeModal = () => {
  modalElem.classList.toggle('hidden');
};
