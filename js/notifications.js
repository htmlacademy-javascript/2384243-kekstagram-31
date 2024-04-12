import {isEscapeKey} from './util.js';

const ERROR_SHOW_TIME = 5000;
const Notification = {
  ERROR_MESSAGE: `${'.error__title'}`,
  SUCCESS_MESSAGE: `${'.success__title'}`,
  DATA_ERROR: `${'.data-error__title'}`,
};
const body = document.body;

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseClick(evt);
  }
};

function onCloseClick (evt) {
  evt.stopPropagation();

  const notificationBlock = evt.target.closest('.error__inner') || evt.target.closest('.success__inner');
  const closeBlock = evt.target.closest('.error__button') || evt.target.closest('.success__button');

  if (closeBlock || isEscapeKey(evt) || !notificationBlock) {
    const notification = document.querySelector('.error') || document.querySelector('.success');
    notification.remove();
    body.removeEventListener('click', onCloseClick);
    body.removeEventListener('keydown', onPictureEscKeydown);
  }
}

const errorContainerTemplate = document.querySelector('#error').content;
const successContainerTemplate = document.querySelector('#success').content;
const dataErrorTemplate = document.querySelector('#data-error').content;

const errorContainer = errorContainerTemplate.querySelector('.error').cloneNode(true);
const successContainer = successContainerTemplate.querySelector('.success').cloneNode(true);
const dataError = dataErrorTemplate.querySelector('.data-error').cloneNode(true);

const showMessage = (message = null, notification, container) => {
  if (message) {
    container.querySelector(notification).textContent = message;
  }
  body.append(container);
  body.addEventListener('click', onCloseClick);
  body.addEventListener('keydown', onPictureEscKeydown);
};

const showErrorMessage = () => showMessage(null, Notification.ERROR_MESSAGE, errorContainer);
const showSuccessMessage = () => showMessage(null, Notification.SUCCESS_MESSAGE, successContainer);

const getErrorMessage = (message = null) => {
  showMessage(message, Notification.DATA_ERROR, dataError);
  const dataErrorMessage = body.querySelector('.data-error');
  setTimeout(() => (dataErrorMessage.remove()), ERROR_SHOW_TIME);
};

const showTypeFileError = (errMessage) => getErrorMessage(errMessage);
const showGetDataError = (errMessage = null) => getErrorMessage(errMessage);

export {showGetDataError, showErrorMessage, showSuccessMessage, showTypeFileError};
