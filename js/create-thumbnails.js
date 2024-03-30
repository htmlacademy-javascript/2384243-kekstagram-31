// import {createPosts} from './data.js';
import {openBigPicture} from './create-big-picture.js';

//находим шаблон фотографии пользователя
const templateUserPicture = document.querySelector('#picture')
  .content
  .querySelector('.picture');

//контейнер, в который будем вкладывать фотографии
const containerUsersPictures = document.querySelector('.pictures');

// //массив фотографий
// const usersPictures = createPosts();

//
const createPosts = (usersPictures) => {
  //Создаём "коробочку"
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

    //складываем фотографии в "коробку"
    usersPicturesFragment.appendChild(userPicture);
  });

  // И только в конце отрисовываем всё из "коробочки"
  containerUsersPictures.appendChild(usersPicturesFragment);

  //Большое фото открывается при клике на миниатюру
  containerUsersPictures.addEventListener('click', (evt) => {
    const picture = evt.target.closest('.picture');

    if(picture){
      evt.preventDefault();
      //в массиве фотографий находим элемент/фото, id которого равно id, по которому произошел клик
      const currentPicture = usersPictures.find((item) => picture.dataset.id === item.id.toString());

      openBigPicture(currentPicture);
    }
  });
};

export {createPosts};
