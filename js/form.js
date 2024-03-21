import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('.img-upload__input'); //контрол загрузки файла
const uploadOverlay = document.querySelector('.img-upload__overlay'); //загрузка наложения
const closeButtonElement = document.querySelector('.img-upload__cancel');
const uploadForm = document.querySelector('.img-upload__form');
const hashtagInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');
const body = document.body;//?
let hashtagErrorMessage = null;

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass:'.img-upload__field-wrapper--error',
});

//функция проверки
function validateHashtag (value) {
  if (!value){
    return true;
  }

  const hashtags = value.toLowerCase().split(' '); //создаем массив с пробелами
  if (hashtags.length > 5) {
    hashtagErrorMessage = 'превышено количество хэштегов';
    return false;
  }

  if (new Set(hashtags).size !== hashtags.length) {
  //создаем новый массив без повторений элементов, находим длину и сравниваем с длиной массива
  //если есть неравенство, то в массиве имеется дубликат
    hashtagErrorMessage = 'хэштеги повторяются';
    return false;
  }

  hashtags.forEach((hashtag) => {

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

uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    uploadForm.submit();
  }
});

//Закрываем окно esc
const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeButton();
  }
};

//исключаем закрытие полей формы при нажатии esc
hashtagInput.addEventListener('click', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

descriptionInput.addEventListener('click', (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
});

//
uploadFile.addEventListener('input', () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onFileEscKeydown);
});

function closeButton () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFileEscKeydown);
}

closeButtonElement.addEventListener('click', () => {
  closeButton ();
  uploadFile.innerHTML = '';
});
