import './util.js';
import './create-thumbnails.js';
import './create-big-picture.js';
import './user-form.js';//?
import './validate-form.js';//?
import './scale-buttons.js';
import './img-effects.js';

import {getData} from './api.js';
import {createPosts} from './create-thumbnails.js';

import {getRandomArrayElement} from './util.js';

const defaultButton = document.getElementById('filter-default');
const randomButton = document.getElementById('filter-random');
const discussedButton = document.getElementById('filter-discussed');
const AMOUNT_RANDOM_IMG = 10;

const getDefaultImg = () => {
  getData()
    .then((posts) => {
      createPosts(posts);
    });
  defaultButton.classList.add('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
  // defaultButton.removeEventListener('click', getDefaultImg);
};

// const getRandomImg = () => {
//   Array.from({length: AMOUNT_RANDOM_IMG}, createRandomArrayElement());
//   console.log(getRandomImg);
// };

const getRandomImg = () => {
  getData()
    .then((posts) => {
      createPosts(AMOUNT_RANDOM_IMG, getRandomArrayElement(posts));
    });
  randomButton.classList.add('img-filters__button--active');
  defaultButton.classList.remove('img-filters__button--active');
  discussedButton.classList.remove('img-filters__button--active');
  // randomButton.removeEventListener('click', getRandomImg);
};

function sortComments (a, b) {
  return b.comments.length - a.comments.length;
}

const getDiscussedImg = () => {
  getData()
    .then((posts) => {
      createPosts(posts
        .slice()
        .sort(sortComments)
      );
    });
  discussedButton.classList.add('img-filters__button--active');
  defaultButton.classList.remove('img-filters__button--active');
  randomButton.classList.remove('img-filters__button--active');
};

getData()
  .then((posts) => {
    createPosts(posts);
    const imgFilters = document.querySelector('.img-filters');
    imgFilters.classList.remove('img-filters--inactive');
    defaultButton.addEventListener('click', getDefaultImg);
    randomButton.addEventListener('click', getRandomImg);
    discussedButton.addEventListener('click', getDiscussedImg);
  });
