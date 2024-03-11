import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

function openBigPicture () {
  bigPictureElement.classList.remove('hidden');

  document.addEventListener('keydown', onPictureEscKeydown);
}

// containerUsersPictures.addEventListener('click', () => {
//   openBigPicture ();
// });
// 1. Окно открывается при клике на миниатюру
// 2. Для отображения окна нужно удалять класс hidden у элемента .big-picture
// и каждый раз заполнять его данными о конкретной фотографии:
// * Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.

// * Количество лайков likes подставьте как текстовое содержание элемента .likes-count.

// * Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.

// * Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

// * Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments. Разметка каждого комментария должна выглядеть так:

// <li class="social__comment">
//   <img
//     class="social__picture"
//     src="{{аватар}}"
//     alt="{{имя комментатора}}"
//     width="35" height="35">
//   <p class="social__text">{{текст комментария}}</p>
// </li>

// * Описание фотографии description вставьте строкой в блок .social__caption.

//6.Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
function closeBigPicture () {
  bigPictureElement.classList.add('hidden');

  document.removeEventListener('keydown', onPictureEscKeydown);
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
