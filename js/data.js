//модуль, который создаёт данные

import {getRandomInteger, createRandomIdFromRangeGenerator, getRandomArrayElement} from './util.js';

const DESCRIPTION = [
  'black',
  'red',
  'blue',
  'yellow',
  'green',
  'white',
  'purple',
  'pink',
  'brown',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const NAME = [
  'Аиша',
  'Лев',
  'Леон',
  'Руфина',
  'Варвара',
  'Аполлон',
];

const AMOUNT_POSTS = 25;

const getRandomIdCommentsIndex = createRandomIdFromRangeGenerator(1, 30 * 25);
const getRandomIdIndex = createRandomIdFromRangeGenerator(1, 25);
const getRandomUrlIndex = createRandomIdFromRangeGenerator(1, 25);

const createComments = () => ({
  id: getRandomIdCommentsIndex (),
  avatar: `img/avatar-${ (getRandomInteger(1, 6)) }.svg`,
  message: ((getRandomInteger(1, 2)), getRandomArrayElement(MESSAGE)),
  name:getRandomArrayElement(NAME),
});

const createPhotoPost = () => ({
  id: getRandomIdIndex(),
  url: `photos/${ getRandomUrlIndex() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: Array.from({length: getRandomInteger(0, 30)}, createComments),
});

const createPosts = () => Array.from({length: AMOUNT_POSTS}, createPhotoPost);
export {createPosts};
