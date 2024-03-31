import {showErrorMessage, showSuccessMessage} from './util.js';
import {showLoadError} from './util.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/1',
};

const getData = () => fetch(`${BASE_URL}${Route.GET_DATA}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Произошла ошибка ${response.status} ${response.statusText}`);
    }
    return response.json();
  })
  .catch(() => {
    showLoadError();
  });

const sendData = (body) => fetch(`${BASE_URL}${Route.SEND_DATA}`,
  {
    method: 'POST',
    body,
  })
  .then((response) => {
    if (!response.ok) {
      showErrorMessage();
    }
    showSuccessMessage();
  })
  .catch(() => {
    showErrorMessage();
  });
// .finally();;

export {getData, sendData};
