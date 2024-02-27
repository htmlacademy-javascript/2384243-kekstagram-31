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

function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const getRandomIdCommentsIndex = createRandomIdFromRangeGenerator(1, 30);

const createComments = () => ({
  id: getRandomIdCommentsIndex (),
  avatar: `img/avatar-${ (getRandomInteger(1, 6)) }.svg`,
  message: ((getRandomInteger(1, 2)), getRandomArrayElement(MESSAGE)),
  name:getRandomArrayElement(NAME),

});

const arrayComments = Array.from({length: getRandomInteger(0, 30)}, createComments);
const getRandomIdIndex = createRandomIdFromRangeGenerator(1, 25);
const getRandomUrlIndex = createRandomIdFromRangeGenerator(1, 25);

const createPhotoPost = () => ({
  //const randomCommentsIndex = getRandomInteger(0, 30);

  //return {
  id: getRandomIdIndex(),
  url: `photos/${ getRandomUrlIndex() }.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: arrayComments,
  //};
});

const photoPosts = Array.from({length: 25}, createPhotoPost);

console.log(photoPosts);
