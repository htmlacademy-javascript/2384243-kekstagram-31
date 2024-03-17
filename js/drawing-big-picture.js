import {isEscapeKey} from './util.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureImg = bigPictureElement.querySelector('.big-picture__img img');
const bigPictureDescription = bigPictureElement.querySelector('.social__caption');
const bigPictureLikes = bigPictureElement.querySelector('.likes-count');
const bigPictureCommentShownCount = bigPictureElement.querySelector('.social__comment-shown-count');
const bigPictureCommentTotalCount = bigPictureElement.querySelector('.social__comment-total-count');
const bigPictureSocialComments = bigPictureElement.querySelector('.social__comments');
const commentsLoader = bigPictureElement.querySelector('.comments-loader'); //кнопка «Загрузить ещё»
const body = document.body;

let commentShownCount = 0; //счетчик
let currentPicture = null; //текущее фото

//Закрываем окно esc
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

//Создаем фрагмент с комментариями (по шаблону)
const createCommentsFragment = (comments) => {
  //создаем "коробочку" для комментов
  const commentsFragment = document.createDocumentFragment();

  //перебираем массив с комментариями, каждый коммент создаем по шаблону и помещаем в созданную "коробочку" для комментов
  comments.forEach((comment) => commentsFragment.appendChild(createCommentTemplate(comment)));

  return commentsFragment;
};

//Открываем комментарии
function openComments () {

  //количество открытых комментариев .social__comment-shown-count.
  const commentsCount = commentShownCount > currentPicture.comments.length ? commentShownCount : currentPicture.comments.length;
  bigPictureCommentShownCount.textContent = commentsCount;

  //отрисовываем комменты, увеличивая при каждом клике на 5
  bigPictureSocialComments.appendChild(createCommentsFragment(currentPicture.comments.slice(commentShownCount, commentShownCount += 5)));

  if (commentShownCount >= currentPicture.comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
}

//Функция для открытия большой фотографии
function openBigPicture (bigPicture) {
  bigPictureElement.classList.remove('hidden');//Для отображения окна удаляем класс hidden у элемента .big-picture

  //присваиваем данные фотографии
  currentPicture = bigPicture;
  commentShownCount = 0;
  bigPictureImg.src = bigPicture.url;// * Адрес изображения url,.big-picture__img.
  bigPictureDescription.textContent = bigPicture.description; // * Описание фотографии description, .social__caption.
  bigPictureLikes.textContent = bigPicture.likes; // * Количество лайков likes, .likes-count.
  bigPictureCommentTotalCount.textContent = currentPicture.comments.length; //Общее количество комментариев .social__comment-total-count.

  bigPictureSocialComments.innerHTML = '';// * очищаем список комментариев под фотографией

  openComments();

  commentsLoader.addEventListener('click', openComments);
  document.addEventListener('keydown', onPictureEscKeydown);
  body.classList.add('modal-open');// добавьте тегу <body> класс modal-open,чтобы контейнер с фотографиями позади не прокручивался при скролле
}

//6.Напишите код для закрытия окна по нажатию клавиши Esc и клике по иконке закрытия.
function closeBigPicture () {
  bigPictureElement.classList.add('hidden');

  document.removeEventListener('keydown', onPictureEscKeydown);
  commentsLoader.removeEventListener('click', openComments);
  body.classList.remove('modal-open');
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
