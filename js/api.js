import {showGetDataError, showErrorMessage, showSuccessMessage} from './notifications.js';
import {closeButton} from './user-form.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Произошла ошибка ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .catch(() => {
    showGetDataError();
  });

const sendData = (body) => fetch(`${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      showErrorMessage();
    } else {
      showSuccessMessage();
      closeButton();
    }
  })
  .catch(() => {
    showErrorMessage();
  });

export {getData, sendData};
