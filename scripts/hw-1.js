// const userString = 'js';

// console.log(userString.toUpperCase());



const animals = ["Кошка", "Кит", "Комар", "Носорог"];

function searchStart(result, startLetter) {

  return result.map(el => el.toLowerCase()).filter(el => el.startsWith(startLetter));
}

console.log(searchStart(animals, 'ко'));