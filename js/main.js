// import './data.js';
import './util.js';
import './create-thumbnails.js';
import './create-big-picture.js';
import './user-form.js';//?
import './validate-form.js';//?
import './scale-buttons.js';
import './img-effects.js';
import {getData} from './api.js';

import {createPosts} from './create-thumbnails.js';
import {closeButton} from './user-form.js';
import {setUserFormSubmit} from './validate-form.js';
// import {showLoadError} from './util.js';

// fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error(`${response.status} ${response.statusText}`);
//   })
getData()
  .then((posts) => {
    createPosts(posts);
  });
// .catch(() => {
//   showLoadError();
// });

setUserFormSubmit(closeButton);
