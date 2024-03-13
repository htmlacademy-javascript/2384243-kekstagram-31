import {createPosts} from './data.js';

//находим шаблон фотографии пользователя
const templateUserPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//создаем массив фотографий
const usersPictures = createPosts();
//контейнер, в который будем вкладывать фотографии
const containerUsersPictures = document.querySelector('.pictures');
//Создаём "коробочку"
const usersPicturesFragment = document.createDocumentFragment();
//клонируем шаблон
const userPicture = templateUserPicture.cloneNode(true);
//перебираем фотографии
usersPictures.forEach(({url, description, likes, comments, id}) => {

  //вставляем данные в шаблон
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.dataset.id = id;
  //складываем фотографии в "коробку"
  usersPicturesFragment.appendChild(userPicture);
});

// И только в конце отрисовываем всё из "коробочки"
containerUsersPictures.appendChild(usersPicturesFragment);

export {containerUsersPictures, userPicture, usersPictures};

//console.log(containerUsersPictures);
