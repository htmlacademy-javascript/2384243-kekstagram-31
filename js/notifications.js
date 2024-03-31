// //сообщение об ошибке при загрузке данных с сервера
// const ERROR_SHOW_TIME = 5000;

// const dataErrorTemplate = document.querySelector('#data-error').content;
// const body = document.body;

// const showLoadError = (message) => {
//   const dataError = dataErrorTemplate.cloneNode(true);
//   if(message) {
//     dataError.querySelector('.data-error__title').textContent = message;
//   }
//   body.append(dataError);

//   const dataErrorMessage = body.querySelector('.data-error');

//   setTimeout(() => {
//     dataErrorMessage.remove();
//   }, ERROR_SHOW_TIME);
// };

// //находим шаблоны сообщений
// const errorContainerTemplate = document.querySelector('#error').content;
// const successContainerTemplate = document.querySelector('#success').content;
// // const closeButton = errorContainerTemplate.querySelector('.error__button') || successContainerTemplate.querySelector('.success__button');

// //закрываем окно с уведомлением
// const closeNotification = (evt) => {

//   evt.stopPropagation();

//   const notificationBlock = evt.target.closest('.error__inner') || evt.target.closest('.success__inner');
//   const closeBlock = evt.target.closest('.error__button') || evt.target.closest('.success__button');

//   if (closeBlock || isEscapeKey(evt) || !notificationBlock) {
//     const notification = document.querySelector('.error') || document.querySelector('.success');
//     notification.remove();
//     // closeBlock.removeEventListener('click', closeNotification);
//     body.removeEventListener('click', closeNotification);
//     body.removeEventListener('keydown', closeNotification);
//   }
// };


// const errorContainer = errorContainerTemplate.cloneNode(true);
// const successContainer = successContainerTemplate.cloneNode(true);
// const Mes = {
//   ERROR_MESSAGE: errorContainer.querySelector('.error__title'),
//   SUCCESS_MESSAGE: successContainer.querySelector('.success__title')
// };

// const showMessage = (message, mes, container) => {
//   if (message) {
//     mes.textContent = message;
//   }
//   body.append(container);
//   body.addEventListener('click', closeNotification);
//   body.addEventListener('keydown', closeNotification);
// };

// //сообщения при загрузке изображений
// const showErrorMessage = () => showMessage(Mes.ERROR_MESSAGE, errorContainer);

// const showSuccessMessage = () => showMessage(Mes.SUCCESS_MESSAGE, successContainer);
