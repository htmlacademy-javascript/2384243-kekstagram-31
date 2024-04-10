import {isEscapeKey} from './util.js';
import {openComments} from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const bigPictureSocialComments = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const loadComments = () => openComments();

const openBigPicture = (photo) => {
  bigPicture.classList.remove('hidden');

  bigPicture.querySelector('.big-picture__img img').src = photo.url;
  bigPicture.querySelector('.social__caption').textContent = photo.description;
  bigPicture.querySelector('.likes-count').textContent = photo.likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = photo.comments.length;

  bigPictureSocialComments.innerHTML = '';

  openComments(photo, true);

  commentsLoader.addEventListener('click', loadComments);
  document.addEventListener('keydown', onPictureEscKeydown);
  document.body.classList.add('modal-open');
};

function closeBigPicture () {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onPictureEscKeydown);
  commentsLoader.removeEventListener('click', loadComments);
  document.body.classList.remove('modal-open');
}

bigPictureCloseButton.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
