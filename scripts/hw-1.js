// const numbers = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] == 0) break;
//   console.log(numbers[i]);
// }




// const numbers = [1, 5, 4, 10, 0, 3];

// console.log(numbers);




// let numbers = [1, 3, 5, 10, 20];

// numbers = numbers.join(" ");

// console.log(numbers);





// let arr = [
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1]
// ];

// console.log(arr);





// let arr = [1, 1, 1];

// arr.push(2, 2, 2);

// console.log(arr);





// let arr = [9, 8, 7, 'a', 6, 5];

// arr = arr.sort();

// console.log(arr.pop());

// console.log(arr);





// let userNumber = Number(prompt("Введите число от 1 до 10"));

// let numbers = [9, 8, 7, 6, 5];

// if (userNumber <= 0 || isNaN(userNumber)) {
//   console.log("Неверное значение");
// } else if (userNumber >= 1 || userNumber <= 10) {
//  let search = numbers.includes(userNumber);
//  console.log(search);
// }




// function reverseString(str) {
//   return console.log(str.split('').reverse().join(''));
// }
//  reverseString("abcdef");



// let array = [[1, 2, 3,],[4, 5, 6]];
// console.log(array.reduce((flat, current) => flat.concat(current, [])));


// let array = [3, 8, 6, 1, 9, 5, 10, 7, 4, 2];
// for(i = 0; i < (array.length - 1); i++) {
// console.log(array[i] + array[i + 1]);
// }



// const square = [3, 8, 6, 1, 9, 5, 10, 7, 4, 2];
// let result = square.map(item => (item ** 2));
// console.log(result);



// const getLengthWords = result => result.map(str => str.length);
// console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));



const newNumbs = numbs => numbs.map(el => (el * (-1)));
console.log(newNumbs([3, 8, 6, 1, 9, 5, 10, 7, 4, 2]));






