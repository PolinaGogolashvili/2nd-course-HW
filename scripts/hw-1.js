// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");

// function compare(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(compare(a, b));

// function checkNumber(a) {
//   if (a % 2 === 0) {
//     return console.log("Число четное");
//   } else {
//     return console.log("Число нечетное");
//   }
// }
// checkNumber(7);

// function calc(a) {
//   console.log(a ** 2);
// }
// calc(9);

// function calc(a, b) {
//   return a ** b;
// }

// let result = calc(4, 2);

// alert(result);

// function sayHi() {
//   let age = Number(prompt("Сколько вам лет?"));
//   if (age < 0) {
//     console.log("Вы ввели неправильное значение");
//   } else if (age >= 0 && age <= 12) {
//     console.log("Привет, друг!");
//   } else if (age >= 13) {
//     console.log("Добро пожаловать!");
//   }
// }
// sayHi();

// let a = Number(prompt("Введите первое число"));
// let b = Number(prompt("Введите второе число"));

// function checkNumber() {
//   if (isNaN(a) || isNaN(b))) {
//     return console.log("Одно или оба значения не являются числом");
//   } else {
//     return console.log(a * b);
//   }
// }
// checkNumber();

// function checkNumber() {
//   let input = prompt("Введите число");
//   if (isNaN(input)) {
//     return console.log("Некорректное значение");
//   } else {
//     return console.log(input * 3);
//   }
// }
// checkNumber();



// function getCircleArea () {
//   return this.radius ** 2 * 3,14;
// }
// function getCirclePerimeter() {
//   return 2 * 3,14 * this.radius; 
// }

// const circle1 = {
//   radius: 5,

//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// };

// const circle2 = {
//   radius: 7,

//   getArea: getCircleArea,
//   getPerimeter: getCirclePerimeter,
// };

// console.log(circle1.getArea());
// console.log(circle1.getPerimeter());
// console.log(circle2.getArea());
// console.log(circle2.getPerimeter());