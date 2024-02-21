const checkLengthString = (string = '', length = 1) => string.length <= length;

checkLengthString('Что-нибудь', 10);
checkLengthString('томат', 5);
checkLengthString('томат', 3);

const isPalindrome = (string = '') => {
  let newString = string.replaceAll(' ', '');
  newString = newString.toUpperCase();

  let emptyString = '';

  for(let i = newString.length - 1; i >= 0; i --){
    emptyString += newString.at(i);
  }

  return emptyString === newString;
};

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

const getNumber = (string = '') => {
  let result = '';

  string = string.toString();

  for(let i = 0; i <= string.length - 1; i ++){
    if (Number.isNaN(parseInt(string[i], 10)) === false) {
      result += string[i];
    }
  }

  return result === '' ? NaN : Number(result);
};

getNumber('2023 год');
getNumber('ECMAScript 2022');
getNumber('1 кефир, 0.5 батона');
getNumber('агент 007');
getNumber('а я томат');
getNumber(2023);
getNumber(-1);
getNumber(1.5);
