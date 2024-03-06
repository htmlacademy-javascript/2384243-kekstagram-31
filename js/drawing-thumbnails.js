//импортируем посты из модуля data
import {createPosts} from './data.js';

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
usersPictures.forEach(({url, description, likes, comments}) => {
  //клонируем шаблон
  const userPicture = templateUserPicture.cloneNode(true);
  //вставляем данные в шаблон
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments;
  //отрисовываем фотографию в контейнере
  usersPicturesFragment.appendChild(userPicture);
});

containerUsersPictures.appendChild(usersPicturesFragment);

//console.log(containerUsersPictures);
