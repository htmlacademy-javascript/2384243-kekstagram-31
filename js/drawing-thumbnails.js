//импортируем посты из модуля data
import {createPosts} from './data.js';
import {openBigPicture} from './drawing-big-picture.js';
const bigPictureElement = document.querySelector('.big-picture');

//находим шаблон фотографии пользователя
const templateUserPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//создаем массив фотографий
const usersPictures = createPosts();

//контейнер, в который будем вкладывать фотографии
const containerUsersPictures = document.querySelector('.pictures');

//помещаем элементы в блок
const usersPicturesFragment = document.createDocumentFragment();

//перебираем фотографии
usersPictures.forEach(({url, description, likes, comments, id}) => {
  //клонируем шаблон
  const userPicture = templateUserPicture.cloneNode(true);
  //вставляем данные в шаблон
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.dataset.id = id;
  //отрисовываем фотографию в контейнере
  usersPicturesFragment.appendChild(userPicture);

  userPicture.addEventListener('click', (evt) => {
    evt.preventDefault();

    const currentPicture = usersPictures.find((picture) => evt.currentTarget.dataset.id === picture.id.toString());
    bigPictureElement.querySelector('.big-picture__img').src = currentPicture.url;
    openBigPicture();
    //console.log(currentPicture);
  });
});

containerUsersPictures.appendChild(usersPicturesFragment);

export {containerUsersPictures};

//console.log(containerUsersPictures);
