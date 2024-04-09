import {showGetDataError, showErrorMessage, showSuccessMessage} from './notifications.js';
import {onCloseButtonClick} from './user-form.js';

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';
const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const ErrorText = {
  GET_DATA: showGetDataError,
  SEND_DATA: showErrorMessage,
};

const load = (route, errorText, method = Method.GET, body = null) =>
  fetch(`${BASE_URL}${route}`, {method, body})
    .then((response) => {
      if (!response.ok) {
        throw new Error ();
      } else {
        if (method === Method.POST) {
          showSuccessMessage();
          onCloseButtonClick();
        } else {
          return response.json();
        }
      }
    })
    .catch(() => {
      errorText();
    });

const getData = () => load(Route.GET_DATA, ErrorText.GET_DATA);
const sendData = (body) => load(Route.SEND_DATA, ErrorText.SEND_DATA, Method.POST, body);

export {getData, sendData};
