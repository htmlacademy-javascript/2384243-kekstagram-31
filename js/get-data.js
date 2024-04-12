import {getData} from './api.js';
import {createPosts} from './create-thumbnails.js';
import {debounce} from './util.js';

const AMOUNT_RANDOM_IMG = 10;
const FILTER = {
  default: 'filter-default',
  random: 'filter-random',
  discussed: 'filter-discussed',
};

const imgFilters = document.querySelector('.img-filters');
const filterButtons = imgFilters.querySelector('.img-filters__form');
const activeButtonClass = 'img-filters__button--active';
const inactiveClass = 'img-filters--inactive';

let usersPictures = null;

const clearUsersPictures = () => {
  const pictures = document.querySelectorAll('.picture');
  pictures.forEach((picture) => picture.remove());
};

const addFilterListener = () => {
  filterButtons.addEventListener('click', (evt) => {
    const currentButton = evt.target.closest('.img-filters__button');
    const activeButtonElement = imgFilters.querySelector('.img-filters__button--active');

    if (currentButton) {
      evt.preventDefault();
      activeButtonElement.classList.remove(activeButtonClass);
      currentButton.classList.add(activeButtonClass);
    }

    debounce (() => {
      clearUsersPictures();
      changeFilter ();
    })();
  });
};

function changeFilter () {
  const currentFilter = imgFilters.querySelector('.img-filters__button--active');

  if(currentFilter.id === FILTER.default) {
    createPosts(usersPictures);
  }
  if(currentFilter.id === FILTER.random){
    createPosts(usersPictures.toSorted(() => 0.5 - Math.random()).slice(0, AMOUNT_RANDOM_IMG));
  }
  if(currentFilter.id === FILTER.discussed){
    createPosts(usersPictures.slice().sort((rankA, rankB) => rankB.comments.length - rankA.comments.length));
  }
}

getData()
  .then((posts) => {
    imgFilters.classList.remove(inactiveClass);
    if (posts) {
      createPosts(posts);
      usersPictures = posts;
    }
  });

export {addFilterListener};
