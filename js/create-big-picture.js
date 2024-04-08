import {isEscapeKey} from './util.js';
import {openComments} from './comments.js';

const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseElement = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureSocialComments = bigPictureElement.querySelector('.social__comments');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');

// let commentShownCount = 0;
// let currentPicture = null;

const onPictureEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// const createCommentTemplate = (({avatar, name, message}) => {
//   const comment = document.createElement('li');

//   comment.innerHTML = (
//     `<li class="social__comment">
//       <img
//         class="social__picture"
//         src="${avatar}"
//         alt="${name}"
//         width="35" height="35">
//       <p class="social__text">${message}</p>
//     </li>`
//   );

//   return comment;
// });

// const createCommentsFragment = (comments) => {

//   const commentsFragment = document.createDocumentFragment();
//   comments.forEach((comment) => commentsFragment.appendChild(createCommentTemplate(comment)));
//   return commentsFragment;
// };

// function openComments () {

//   bigPictureSocialComments.appendChild(createCommentsFragment(currentPicture.comments.slice(commentShownCount, commentShownCount += 5)));
//   const commentsCount = commentShownCount < currentPicture.comments.length ? commentShownCount : currentPicture.comments.length;
//   bigPictureElement.querySelector('.social__comment-shown-count').textContent = commentsCount;
//   if (commentShownCount >= currentPicture.comments.length) {
//     commentsLoader.classList.add('hidden');
//   } else {
//     commentsLoader.classList.remove('hidden');
//   }
// }

function openBigPicture (bigPicture) {
  bigPictureElement.classList.remove('hidden');

  // currentPicture = bigPicture;
  // commentShownCount = 0;
  bigPictureElement.querySelector('.big-picture__img img').src = bigPicture.url;
  bigPictureElement.querySelector('.social__caption').textContent = bigPicture.description;
  bigPictureElement.querySelector('.likes-count').textContent = bigPicture.likes;
  bigPictureElement.querySelector('.social__comment-total-count').textContent = bigPicture.comments.length;

  bigPictureSocialComments.innerHTML = '';

  openComments();

  commentsLoader.addEventListener('click', openComments);
  document.addEventListener('keydown', onPictureEscKeydown);
  document.body.classList.add('modal-open');
}

function closeBigPicture () {
  bigPictureElement.classList.add('hidden');
  document.removeEventListener('keydown', onPictureEscKeydown);
  commentsLoader.removeEventListener('click', openComments);
  document.body.classList.remove('modal-open');
}

bigPictureCloseElement.addEventListener('click', () => {
  closeBigPicture();
});

export {openBigPicture};
