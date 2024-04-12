import {openBigPicture} from './create-big-picture.js';

const templateUserPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const containerUsersPictures = document.querySelector('.pictures');
let photos = null;

containerUsersPictures.addEventListener('click', (evt) => {
  const picture = evt.target.closest('.picture');

  if(picture){
    evt.preventDefault();
    const currentPicture = photos.find((item) => picture.dataset.id === item.id.toString());
    openBigPicture(currentPicture);
  }
});

const createPosts = (usersPictures) => {
  const usersPicturesFragment = document.createDocumentFragment();
  photos = usersPictures;
  usersPictures
    .forEach(({url, description, likes, comments, id}) => {
      const userPicture = templateUserPicture.cloneNode(true);

      userPicture.querySelector('.picture__img').src = url;
      userPicture.querySelector('.picture__img').alt = description;
      userPicture.querySelector('.picture__likes').textContent = likes;
      userPicture.querySelector('.picture__comments').textContent = comments.length;
      userPicture.dataset.id = id;

      usersPicturesFragment.appendChild(userPicture);
    });

  containerUsersPictures.appendChild(usersPicturesFragment);
};

export {createPosts};
