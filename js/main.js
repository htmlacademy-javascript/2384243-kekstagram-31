//напишите необходимые функции для создания массива из 25 сгенерированных объектов.
//Каждый объект массива — описание фотографии, опубликованной пользователем.

//Структура каждого объекта должна быть следующей:
//id, число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
//url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
//Адреса картинок не должны повторяться.

//comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
//Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом.

//У каждого комментария есть идентификатор — id — любое число. Идентификаторы не должны повторяться.

//Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения

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

function getRandomInteger (min, max) { //генератор случайных чисел
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
      //линтер ругается на консоль. Подскажи, пжл, чем его можно заменить
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComments = () => {
  const randomIdCommentsIndex = createRandomIdFromRangeGenerator(1, 30);
  const randomAvatarIndex = getRandomInteger(1, 6);
  const randomMessageIndex = getRandomInteger(1, 2);

  return {
    id: randomIdCommentsIndex,
    avatar: `img/avatar-${ randomAvatarIndex }.svg`,
    message: (randomMessageIndex, getRandomArrayElement(MESSAGE)),
    name:getRandomArrayElement(NAME),
  };
};

createComments();
//console.log(createComments());

const createPhotoPost = () => {
  const randomIdIndex = createRandomIdFromRangeGenerator(1, 25);
  const randomUrlIndex = createRandomIdFromRangeGenerator(1, 25);
  const randomLikesIndex = getRandomInteger(15, 200);
  const randomCommentsIndex = getRandomInteger(0, 30);

  return {
    id: randomIdIndex,
    url: `photos/${ randomUrlIndex }.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: randomLikesIndex,
    comments: randomCommentsIndex,
  };
};

const photoPosts = Array.from({length: 2}, createPhotoPost);
photoPosts();

//console.log(photoPosts);
