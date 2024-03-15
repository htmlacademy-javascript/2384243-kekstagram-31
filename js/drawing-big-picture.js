import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
const bigPictureLikes = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentShownCount = bigPictureElement.querySelector('.social__comment-shown-count');
const bigPictureCommentTotalCount = bigPictureElement.querySelector('.social__comment-total-count');
const bigPictureSocialComments = bigPictureElement.querySelector('.social__comments');

const body = document.body;
const commentsLoader = bigPictureElement.querySelector('.comments-loader'); //кнопка «Загрузить ещё»

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

//создаем шаблон 1 комментария
const createCommentTemplate = (({avatar, name, message}) => {
  const comment = document.createElement('li');

  comment.innerHTML = (
    `<li class="social__comment">
      <img
        class="social__picture"
        src="${avatar}"
        alt="${name}"
        width="35" height="35">
      <p class="social__text">${message}</p>
    </li>`
  );

  return comment;
});

const createCommentsFragment = (comments) => {
  //создаем "коробочку" для комментов
  const commentsFragment = document.createDocumentFragment();

  //перебираем массив с комментариями, каждый коммент создаем по шаблону и помещаем в созданную "коробочку" для комментов
  comments.forEach((comment) => commentsFragment.appendChild(createCommentTemplate(comment)));
  //возвращаем "коробку" с комментами
  return commentsFragment;
};

//Функция для открытия окна/большой фотографии
function openBigPicture (currentPicture) {
  bigPictureElement.classList.remove('hidden');//Для отображения окна удаляем класс hidden у элемента .big-picture

  bigPictureImg.src = currentPicture.url;// * Адрес изображения url подставьте как src изображения внутри блока .big-picture__img.
  bigPictureDescription.textContent = currentPicture.description; // * Описание фотографии description вставьте строкой в блок .social__caption.
  bigPictureLikes.textContent = currentPicture.likes; // * Количество лайков likes подставьте как текстовое содержание элемента .likes-count.
  bigPictureCommentShownCount.textContent = currentPicture.comments.length; // * Количество показанных комментариев подставьте как текстовое содержание элемента .social__comment-shown-count.
  bigPictureCommentTotalCount.textContent = currentPicture.comments.length; // * Общее количество комментариев к фотографии comments подставьте как текстовое содержание элемента .social__comment-total-count.

  // function openBigPictureComments (shownComments) {
  bigPictureSocialComments.innerHTML = '';
  bigPictureSocialComments.appendChild(createCommentsFragment(currentPicture.comments));

  commentsLoader.addEventListener('click', (evt) => {
    evt.preventDefault();

    let shownComments = 5;
    if (shownComments >= currentPicture.comments.length) {
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
      shownComments += 5;
    }
    bigPictureCommentShownCount.textContent = shownComments > currentPicture.comments.length ? currentPicture.comments.length : shownComments;
  });

  // commentsLoader.removeEventListener('click', (evt) => {
  //   evt.preventDefault();
  // });


  //bigPictureElement.querySelector('.social__comments').appendChild(createCommentsFragment(currentPicture.comments));// * Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments.

  document.addEventListener('keydown', onPictureEscKeydown);

  // После открытия окна спрячьте блоки счётчика комментариев .social__comment-count, добавив класс hidden
  //const commentsCount = bigPictureElement.querySelector('.social__comment-count');
  //commentsCount.classList.add('hidden');
  // После открытия окна спрячьте блок загрузки новых комментариев .comments-loader, добавив класс hidden
  //commentsLoader.classList.add('hidden');

  body.classList.add('modal-open');// добавьте тегу <body> класс modal-open,чтобы контейнер с фотографиями позади не прокручивался при скролле
}

//6.Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
function closeBigPicture () {
  bigPictureElement.classList.add('hidden');

  document.removeEventListener('keydown', onPictureEscKeydown);

  body.classList.remove('modal-open'); //При закрытии окна - удалить этот класс.
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};

// кнопка «Загрузить ещё» - загрузки с сервера быть не должно не происходит. Просто показываются следующие 5 комментариев из списка.
//Сразу после открытия изображения в полноэкранном режиме отображается не более 5 комментариев
// следующие 5 элементов добавлялись бы по нажатию на кнопку «Загрузить ещё»/Отображение дополнительных комментариев происходит при нажатии на кнопку .comments-loader
//При нажатии на кнопку отображается не более 5 новых комментариев
//При изменении количества показанных комментариев число показанных комментариев в блоке .social__comment-count также изменяется
//Если все комментарии показаны, кнопку .comments-loader следует скрыть, добавив класс hidden
