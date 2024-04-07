import './util.js';
import './create-thumbnails.js';
import './create-big-picture.js';
import './user-form.js';//?
import './validate-form.js';//?
import './scale-buttons.js';
import './img-effects.js';
import './get-data.js';

// import {showTypeFileError} from './notifications.js';

// const onFilterChange = (selector) => {
//   const activeButtonElement = imgFilters.querySelector('.img-filters__button--active');
//   const selectedFilter = document.querySelector(selector);
//   activeButtonElement.classList.remove(activeButtonClass);
//   selectedFilter.classList.add(activeButtonClass);
// };

// const getDefaultImg = () => {
//   clearUsersPictures();
//   createPosts(usersPictures);
// };

// const getRandomImg = () => {
//   clearUsersPictures();
//   createPosts(usersPictures.toSorted(() => 0.5 - Math.random()).slice(0, AMOUNT_RANDOM_IMG));
// };

// const getDiscussedImg = () => {
//   function sortComments (rankA, rankB) {
//     return rankB.comments.length - rankA.comments.length;
//   }

//   clearUsersPictures();
//   createPosts(usersPictures.slice().sort(sortComments));
// };

// defaultButton.addEventListener('click', () => {
//   onFilterChange('#filter-default');
//   debounce(getDefaultImg)();
// });

// randomButton.addEventListener('click', () => {
//   onFilterChange('#filter-random');
//   debounce(getRandomImg)();
// });

// discussedButton.addEventListener('click', () => {
//   onFilterChange('#filter-discussed');
//   debounce(getDiscussedImg)();
// });

// // avatar.js
// const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

// const fileChooser = document.getElementById('upload-file');
// const preview = document.querySelector('.img-upload__preview img');
// const previewItem = document.querySelectorAll('.effects__preview');
// const uploadOverlay = document.querySelector('.img-upload__overlay');

// fileChooser.addEventListener('change', () => {
//   const file = fileChooser.files[0];
//   const fileName = file.name.toLowerCase();
//   const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

//   if (!matches) {
//     showTypeFileError('Неверный тип файла');
//     uploadOverlay.classList.add('hidden');
//   }
//   preview.src = URL.createObjectURL(file);
//   previewItem.forEach((item) => {
//     item.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
//   });
// });
