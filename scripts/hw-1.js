// const userString = 'js';

// console.log(userString.toUpperCase());

// const animals = ["Кошка", "Кит", "Комар", "Носорог"];

// function searchStart(result, startLetter) {

//   return result.map(el => el.toLowerCase()).filter(el => el.startsWith(startLetter));
// }

// console.log(searchStart(animals, 'ко'));

// console.log(Math.floor(32.58884));

// console.log(Math.ceil(32.58884));

// console.log(Math.round(32.58884));

// console.log(Math.max(52, 53, 49, 77, 21, 32));

// console.log(Math.min(52, 53, 49, 77, 21, 32));

// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomIntInclusive(1, 10));

function getRandomArr(maxValue) {
  const numbs = [];
  for(let i = 0; i < Math.floor(maxValue / 2); i++) {
    numbs[i] = Math.floor(Math.random() * maxValue);
  }
  return numbs;
}
console.log(getRandomArr(10));

// function getRandomNum(min, max) {
//   let result =  min + Math.random() * (max + 1 - min);
//   return Math.floor(result);
// }
// console.log(getRandomNum(5, 8));

// let currentDate = new Date();
// console.log(currentDate);

// let currentDate = new Date();
// currentDate.setDate(73);
// console.log(currentDate);

// let days = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];
// let months = [
//   "Января",
//   "Февраля",
//   "Марта",
//   "Апреля",
//   "Мая",
//   "Июня",
//   "Июля",
//   "Августа",
//   "Сентября",
//   "Октября",
//   "Ноября",
//   "Декабря",
// ];

// let currentDate = new Date();

// let fullDate =
//   "Дата : " +
//   currentDate.getDate() +
//   " " +
//   months[currentDate.getMonth()] +
//   " " +
//   currentDate.getFullYear() +
//   " - это " +
//   days[currentDate.getDay()];

// let hour = currentDate.getHours(); 
// let minute = currentDate.getMinutes();
// let second = currentDate.getSeconds();

// if (minute < 10) { 
// 	minute = "0" + minute;
// }
// if (second < 10) { 
// 	second = "0" + second;
// }

// let fullTime = "Время : " + hour + ':' + minute + ':' + second;

// console.log(fullDate);
// console.log(fullTime);


