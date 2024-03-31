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

getData()
  .then((posts) => {
    createPosts(posts);
  });
// .catch(() => {
//   showGetDataError();
// });

setUserFormSubmit(closeButton);
