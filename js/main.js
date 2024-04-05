import './util.js';
import './create-thumbnails.js';
import './create-big-picture.js';
import './user-form.js';//?
import './validate-form.js';//?
import './scale-buttons.js';
import './img-effects.js';

import {getData} from './api.js';
import {createPosts} from './create-thumbnails.js';
import {debounce} from './util.js';

const imgFilters = document.querySelector('.img-filters');
const defaultButton = document.getElementById('filter-default');
const randomButton = document.getElementById('filter-random');
const discussedButton = document.getElementById('filter-discussed');
const activeButtonClass = 'img-filters__button--active';
const inactiveClass = 'img-filters--inactive';
const AMOUNT_RANDOM_IMG = 10;

const clearUsersPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const onFilterChange = (evt) => {
  const activeButtonElement = imgFilters.querySelector('.img-filters__button--active');
  if (activeButtonElement === evt.target) {
    activeButtonElement.classList.toggle(activeButtonClass);
    evt.target.classList.toggle(activeButtonClass);
  }
};

const getDefaultImg = () => {
  clearUsersPictures();
  getData()
    .then((posts) => {
      createPosts(posts);
    });
  // defaultButton.classList.add(activeButtonClass);
  // randomButton.classList.remove(activeButtonClass);
  // discussedButton.classList.remove(activeButtonClass);
  onFilterChange();
  // defaultButton.removeEventListener('click', getDefaultImg);
};

const getRandomImg = () => {
  clearUsersPictures();
  // const generator = createRandomIdFromRangeGenerator(0, 24);
  getData()
    .then((posts) => {
      createPosts(posts.toSorted(() => 0.5 - Math.random()).slice(0, AMOUNT_RANDOM_IMG));
    });
  // randomButton.classList.add(activeButtonClass);
  // defaultButton.classList.remove(activeButtonClass);
  // discussedButton.classList.remove(activeButtonClass);
  onFilterChange();
  // randomButton.removeEventListener('click', getRandomImg);
};

const getDiscussedImg = () => {

  function sortComments (a, b) {
    return b.comments.length - a.comments.length;
  }

  clearUsersPictures();
  getData()
    .then((posts) => {
      createPosts(posts
        .slice()
        .sort(sortComments)
      );
    });
  // discussedButton.classList.add(activeButtonClass);
  // defaultButton.classList.remove(activeButtonClass);
  // randomButton.classList.remove(activeButtonClass);
  onFilterChange();
};

const defaultButtonClick = (cb) => {
  defaultButton.addEventListener('click', getDefaultImg);
  cb();
};

const randomButtonClick = (cb) => {
  randomButton.addEventListener('click', getRandomImg);
  cb();
};

const discussedButtonClick = (cb) => {
  discussedButton.addEventListener('click', getDiscussedImg);
  cb();
};

getData()
  .then((posts) => {
    createPosts(posts);
    imgFilters.classList.remove(inactiveClass);
    defaultButtonClick(debounce(() => getDefaultImg));
    randomButtonClick(debounce(() => getRandomImg));
    discussedButtonClick(debounce(() => getDiscussedImg));
  });


// avatar.js
// const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

// const fileChooser = document.getElementById('upload-file');
// const preview = document.querySelector('.img-upload__preview img');

// fileChooser.addEventListener('change', () => {
//   const file = fileChooser.files[0];
//   const fileName = file.name.toLowerCase();
//   const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

//   if (matches) {
//     preview.src = URL.createObjectURL(file);
//   }
// });
//мини сделать
//ошибка выбран файла
