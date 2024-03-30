import {showErrorMessage, showSuccessMessage, closeNotification} from './util.js';
// import {closeButton} from './user-form.js';

const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass:'img-upload__field-wrapper--error',
});

let hashtagErrorMessage = null;

//функция проверки хэштега
function validateHashtag (value) {
  if (!value){
    return true;
  }

  const hashtags = value.toLowerCase().split(' '); //создаем массив с пробелами
  if (hashtags.length > 6) {
    hashtagErrorMessage = 'превышено количество хэштегов';
    return false;
  }

  if (new Set(hashtags).size !== hashtags.length) {
  //создаем новый массив без повторений элементов, находим длину и сравниваем с длиной массива
  //если есть неравенство, то в массиве имеется дубликат
    hashtagErrorMessage = 'хэштеги повторяются';
    return false;
  }

  //метод .every проверяет удовлетворяют ли все элементы в массиве условиям в функции-колбэке
  return hashtags.every((hashtag) => {

    if(!hashtag.startsWith('#')) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }

    if(hashtag.length < 2 || hashtag.length > 20) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }

    const regExp = /^#[a-zа-яё0-9]{1,19}$/i;
    if (!regExp.test(hashtag)) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }

    return true;
  });
}

//Чтобы описать валидации в JavaScript, нужно вызвать метод .addValidator()
pristine.addValidator(hashtagInput, validateHashtag, () => hashtagErrorMessage);

//проверяем макс количество символов в описании
function validateDescription (value) {
  return value.length >= 0 && value.length <= 139;
}

pristine.addValidator(descriptionInput, validateDescription, 'длина комментария больше 140 символов');

//отправка фото на сервер при успешной валидации
const setUserFormSubmit = (onSuccess) => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      // uploadForm.submit();
      const formData = new FormData(evt.target);

      fetch('https://31.javascript.htmlacademy.pro/kekstagram',
        {
          method: 'POST',
          body: formData,
        }
      )
        .then((response) => {
          if (response.ok) {
            onSuccess();
            showSuccessMessage();
            closeNotification();
          } else {
            showErrorMessage();
            closeNotification();
          }
        })
        .catch(() => {
          showErrorMessage();
          closeNotification();
        });
      // .finally();
    }
  });
};

export {setUserFormSubmit};
