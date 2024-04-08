import {isEscapeKey} from './util.js';
import {openComments} from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureSocialComments = bigPictureElement.querySelector('.social__comments');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const loadComments = () => openComments();

function openBigPicture (bigPicture) {
  bigPictureElement.classList.remove('hidden');

  bigPictureElement.querySelector('.big-picture__img img').src = bigPicture.url;
  bigPictureElement.querySelector('.social__caption').textContent = bigPicture.description;
  bigPictureElement.querySelector('.likes-count').textContent = bigPicture.likes;
  bigPictureElement.querySelector('.social__comment-total-count').textContent = bigPicture.comments.length;
  bigPictureSocialComments.innerHTML = '';
  openComments(bigPicture, true);

  commentsLoader.addEventListener('click', loadComments);
  document.addEventListener('keydown', onPictureEscKeydown);
  document.body.classList.add('modal-open');
}

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onPictureEscKeydown);
  commentsLoader.removeEventListener('click', loadComments);
  document.body.classList.remove('modal-open');
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
