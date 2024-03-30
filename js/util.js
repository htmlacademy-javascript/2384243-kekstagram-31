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


//сообщения при загрузке изображений
const errorContainerTemplate = document.querySelector('#error').content;
const successContainerTemplate = document.querySelector('#success').content;

const showErrorMessage = (message) => {
  const errorContainer = errorContainerTemplate.cloneNode(true);
  if (message) {
    errorContainer.querySelector('.error__title').textContent = message;
  }
  body.append(errorContainer);
};

const showSuccessMessage = (message) => {
  const successContainer = successContainerTemplate.cloneNode(true);
  if (message) {
    successContainer.querySelector('.success__title').textContent = message;
  }
  body.append(successContainer);
};

//
const notification = errorContainerTemplate.querySelector('.error') || successContainerTemplate.querySelector('.success');
const closeButton = errorContainerTemplate.querySelector('.error__button') || successContainerTemplate.querySelector('.success__button');
// const errorContainer = errorContainerTemplate.cloneNode(true);
// body.append(errorContainer);
// const successContainer = successContainerTemplate.cloneNode(true);
// body.append(successContainer);

const closeNotification = (evt) => {

  // evt.stopPropagation();
  if (evt.target === notification || evt.target === closeButton || isEscapeKey(evt)) {
    notification.remove();
    body.removeEventListener('click', closeNotification);
    body.removeEventListener('keydown', closeNotification);
  }
};

closeButton.addEventListener('click', closeNotification);
body.addEventListener('click', closeNotification);
body.addEventListener('keydown', closeNotification);

export {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement,
  isEscapeKey, showLoadError, showErrorMessage, showSuccessMessage, closeNotification};
