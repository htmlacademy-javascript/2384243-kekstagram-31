// import {debounce} from './util.js';
// import {createPosts} from './create-thumbnails.js';

// const imgFilters = document.querySelector('.img-filters');
// const defaultButton = document.getElementById('filter-default');
// const randomButton = document.getElementById('filter-random');
// const discussedButton = document.getElementById('filter-discussed');
// const activeButtonClass = 'img-filters__button--active';

// const AMOUNT_RANDOM_IMG = 10;

// const clearUsersPictures = () => {
//   const pictures = document.querySelectorAll('.picture');
//   pictures.forEach((picture) => picture.remove());
// };

// const filterButton = imgFilters.querySelector('.img-filters__button');

// imgFilters.addEventListener('click', (evt) => {
//   const currentButton = evt.target.closest('.img-filters__button');
//   const activeButtonElement = imgFilters.querySelector('.img-filters__button--active');
//   if (currentButton) {
//     evt.preventDefault();
//     activeButtonElement.classList.remove(activeButtonClass);
//     currentButton.classList.add(activeButtonClass);
//   }
//   changeFilter ();
// });

// function sortComments (rankA, rankB) {
//   return rankB.comments.length - rankA.comments.length;
// }

// let usersPictures = null;

// function changeFilter () {
//   clearUsersPictures();
//   const currentFilter = filterButton.classList.contains(activeButtonClass);

//   if(defaultButton && currentFilter) {
//     createPosts(usersPictures);
//   }
//   if(randomButton && currentFilter){
//     createPosts(usersPictures.toSorted(() => 0.5 - Math.random()).slice(0, AMOUNT_RANDOM_IMG));
//   }
//   if(discussedButton && currentFilter){
//     createPosts(usersPictures.slice().sort(sortComments));
//   }
// }
// const inactiveClass = 'img-filters--inactive';
// function config () {
//   imgFilters.classList.remove(inactiveClass);
// }

// getData()
//   .then((posts) => {

//     createPosts(posts);
//     usersPictures = posts;
//   });
