import {createPosts} from './data.js';
import {openBigPicture} from './drawing-big-picture.js';

//находим шаблон фотографии пользователя
const templateUserPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//контейнер, в который будем вкладывать фотографии
const containerUsersPictures = document.querySelector('.pictures');
//Создаём "коробочку"
const usersPicturesFragment = document.createDocumentFragment();

//массив фотографий
const usersPictures = createPosts();
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

  //складываем фотографии в "коробку"
  usersPicturesFragment.appendChild(userPicture);

  userPicture.addEventListener('click', (evt) => { // 1. Большое фото открывается при клике на миниатюру
    evt.preventDefault();

    //текущее фото = в массиве фотографий ищем фото, id которого равно id, по которому произошел клик
    const currentPicture = usersPictures.find((picture) => evt.currentTarget.dataset.id === picture.id.toString());
    openBigPicture(currentPicture);
  });
});

// И только в конце отрисовываем всё из "коробочки"
containerUsersPictures.appendChild(usersPicturesFragment);

//console.log(containerUsersPictures);
