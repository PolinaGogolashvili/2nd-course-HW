// let a = prompt("Введите первое число");
// let b = prompt("Введите второе число");

// function Compare(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(Compare(a, b));

// function CheckNumber(a) {
//   if (a % 2 === 0) {
//     return console.log("Число четное");
//   } else {
//     return console.log("Число нечетное");
//   }
// }
// CheckNumber(7);

// function calc(a) {
//   console.log(a ** 2);
// }
// calc(9);

// function calc(a, b) {
//   return a ** b;
// }

// let result = calc(4, 2);

// alert(result);



function sayHi() {
  let age = Number(prompt("Сколько вам лет?"));
  if (age < 0) {
    console.log("Вы ввели неправильное значение");
  } else if (age >= 0 && age <= 12) {
    console.log("Привет, друг!");
  } else if (age >= 13) {
    console.log("Добро пожаловать!");
  }
}
sayHi();
