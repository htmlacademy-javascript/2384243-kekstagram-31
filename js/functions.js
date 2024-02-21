const checkLengthString = (string, length) => {
  const result = string.length <= length;
  return result;
};

checkLengthString();

const getCheckString = (string) => {
  let newString = string.replaceAll(' ', '');
  newString = string.toUpperCase();

  let emptyString;

  for(let i = newString.length - 1; i >= 0; i --){
    newString.at(i);
    emptyString += newString.at(i);
  }

  const result = emptyString === newString;
  return result;
};

getCheckString();

//console.log('1. Ожидаю true, получаю - ', getCheckString('топот'));// Строка является палиндромом
//console.log('2. Ожидаю true, получаю - ', getCheckString('ДовОд'));// Несмотря на разный регистр, тоже палиндром
//console.log('3. Ожидаю false, получаю - ', getCheckString('Кекс'));// Это не палиндром
//console.log('4. Ожидаю true, получаю - ', getCheckString('Лёша на полке клопа нашёл '));// Это палиндром*/

const getNumber = (string) => {
  let result;

  for(let i = 0; i <= string.length - 1; i ++){
    parseInt(i, 10);
    if (Number.isNaN(i * 10)) {
      result += [i];
    }
  }

  return result;
};

getNumber();

//console.log('1. Ожидаю 2023, получаю - ', getNumber('2023 год'));
//console.log('1. Ожидаю 2022, получаю - ', getNumber('ECMAScript 2022'));
//console.log('1. Ожидаю 105, получаю - ', getNumber('1 кефир, 0.5 батона'));
//console.log('1. Ожидаю 7, получаю - ', getNumber('агент 007'));
//console.log('1. Ожидаю NaN, получаю - ', getNumber('а я томат'));

//console.log('1. Ожидаю 2023, получаю - ', getNumber(2023));
//console.log('1. Ожидаю 1, получаю - ', getNumber(-1));
//console.log('1. Ожидаю 15, получаю - ', getNumber(1.5));
