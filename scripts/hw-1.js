// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort((a, b) => a.age > b.age ? 1 : -1));




// function isPositive(number) {
//   if (number > 0) {
//     return number; 
//   }
// }

//   function isMale(name, gender, key) {
//     if (name[key] === 'Глеб' && name[key] === 'Олег') {
//       return name;
//     } else if (gender[key] === 'male') {
//       return gender
//     }
//   }

//   function filter(arr, ruleFunction) {
//     const output = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (ruleFunction(arr[i])) {
//       output.push(ruleFunction(arr[i]));
//     }
//     }
//     return output;
//   }
  
//   console.log(filter([3, -4, 1, 9], isPositive));

//   const people = [
//     {name: 'Глеб', gender: 'male'},
//     {name: 'Анна', gender: 'female'},
//     {name: 'Олег', gender: 'male'},
//     {name: 'Оксана', gender: 'female'}
//  ];
 
//  console.log(filter(people, isMale));



// const timer = (deadline) => {
//   const interval = setInterval(() => {
//    let currentDate = new Date;
//  console.log(currentDate);
//  }, 3000);

//   setTimeout(() => {
//     clearInterval(interval);
//     console.log('30 секунд прошло')
//   }, deadline * 3000)
// };

// timer(30);



function delayForSecond(callback) {
 setTimeout(callback, 1000);
}

delayForSecond(function() {
 console.log('Привет, Глеб!');
});



// function delayForSecond(cb) {
// setTimeout(() => {
//  console.log('Прошла одна секунда');
//  if(cb) { cb(); }
//  }, 1000)
// }

// function sayHi (name) {
// console.log(`Привет, ${name}!`);
// }

// delayForSecond();
// sayHi('Глеб');
