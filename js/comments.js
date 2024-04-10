const LOADING_STEP = 5;

const bigPictureSocialComments = document.querySelector('.social__comments');
const commentsLoader = document.querySelector('.comments-loader');
const socialCommentShownCount = document.querySelector('.social__comment-shown-count');

let commentShownCount = 0;
let currentPicture = null;

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
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => commentsFragment.appendChild(createCommentTemplate(comment)));
  return commentsFragment;
};

const openComments = (photo, isInit) => {
  if (isInit) {
    commentShownCount = 0;
  }
  if (photo) {
    currentPicture = photo;
  }

  bigPictureSocialComments.appendChild(createCommentsFragment(currentPicture.comments.slice(commentShownCount, commentShownCount += LOADING_STEP)));
  const commentsCount = commentShownCount < currentPicture.comments.length ? commentShownCount : currentPicture.comments.length;
  socialCommentShownCount.textContent = commentsCount;

  if (commentShownCount >= currentPicture.comments.length) {
    commentsLoader.classList.add('hidden');
  } else {
    commentsLoader.classList.remove('hidden');
  }
};

export {openComments};
