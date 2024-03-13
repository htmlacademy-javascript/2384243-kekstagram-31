import {createPosts} from './data.js';
import {openBigPicture} from '/js/drawing-big-picture.js';

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

//перебираем фотографии
usersPictures.forEach(({url, description, likes, comments, id}) => {
  const userPicture = templateUserPicture.cloneNode(true);
  //вставляем данные в шаблон
  userPicture.querySelector('.picture__img').src = url;
  userPicture.querySelector('.picture__img').alt = description;
  userPicture.querySelector('.picture__likes').textContent = likes;
  userPicture.querySelector('.picture__comments').textContent = comments.length;
  userPicture.dataset.id = id;

  userPicture.addEventListener('click', (evt) => { // 1. Окно открывается при клике на миниатюру
    evt.preventDefault();
    const currentPicture = usersPictures.find((picture) => evt.currentTarget.dataset.id === picture.id.toString());
    openBigPicture(currentPicture);
  });
  //складываем фотографии в "коробку"
  usersPicturesFragment.appendChild(userPicture);
});

// И только в конце отрисовываем всё из "коробочки"
containerUsersPictures.appendChild(usersPicturesFragment);

export {containerUsersPictures, usersPictures};

//console.log(containerUsersPictures);
