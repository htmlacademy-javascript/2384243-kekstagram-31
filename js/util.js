//модуль сo вспомогательными функциями

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

//сообщение об ошибке при загрузке данных с сервера
const ERROR_SHOW_TIME = 5000;

const dataErrorTemplate = document.querySelector('#data-error').content;
const body = document.body;

const showLoadError = (message) => {
  const dataError = dataErrorTemplate.cloneNode(true);
  if(message) {
    dataError.querySelector('.data-error__title').textContent = message;
  }
  body.append(dataError);

  const dataErrorMessage = body.querySelector('.data-error');

  setTimeout(() => {
    dataErrorMessage.remove();
  }, ERROR_SHOW_TIME);
};

//находим шаблоны сообщений
const errorContainerTemplate = document.querySelector('#error').content;
const successContainerTemplate = document.querySelector('#success').content;
// const closeButton = errorContainerTemplate.querySelector('.error__button') || successContainerTemplate.querySelector('.success__button');

//закрываем окно с уведомлением
const closeNotification = (evt) => {

  evt.stopPropagation();

  const notificationBlock = evt.target.closest('.error__inner') || evt.target.closest('.success__inner');
  const closeBlock = evt.target.closest('.error__button') || evt.target.closest('.success__button');

  if (closeBlock || isEscapeKey(evt) || !notificationBlock) {
    const notification = document.querySelector('.error') || document.querySelector('.success');
    notification.remove();
    // closeBlock.removeEventListener('click', closeNotification);
    body.removeEventListener('click', closeNotification);
    body.removeEventListener('keydown', closeNotification);
  }
};

// //сообщения при загрузке изображений
// const showErrorMessage = (message) => {
//   const errorContainer = errorContainerTemplate.cloneNode(true);
//   if (message) {
//     errorContainer.querySelector('.error__title').textContent = message;
//   }
//   body.append(errorContainer);
//   // closeButton.addEventListener('click', closeNotification);
//   body.addEventListener('click', closeNotification);
//   body.addEventListener('keydown', closeNotification);
// };

// const showSuccessMessage = (message) => {
//   const successContainer = successContainerTemplate.cloneNode(true);
//   if (message) {
//     successContainer.querySelector('.success__title').textContent = message;
//   }
//   body.append(successContainer);
//   // closeButton.addEventListener('click', closeNotification);
//   body.addEventListener('click', closeNotification);
//   body.addEventListener('keydown', closeNotification);
// };

const errorContainer = errorContainerTemplate.cloneNode(true);
const successContainer = successContainerTemplate.cloneNode(true);
const Mes = {
  ERROR_MESSAGE: `${'.error__title'}`,
  SUCCESS_MESSAGE: `${'.success__title'}`,
};

const showMessage = (message, mes, container) => {
  if (message) {
    container.querySelector(mes).textContent = message;
  }
  body.append(container);
  body.addEventListener('click', closeNotification);
  body.addEventListener('keydown', closeNotification);
};

//сообщения при загрузке изображений
const showErrorMessage = () => showMessage(Mes.ERROR_MESSAGE, errorContainer);

const showSuccessMessage = () => showMessage(Mes.SUCCESS_MESSAGE, successContainer);

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement,
  isEscapeKey, showLoadError, showErrorMessage, showSuccessMessage};
