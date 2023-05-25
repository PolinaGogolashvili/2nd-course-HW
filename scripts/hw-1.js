// const people = [
//   { name: 'Глеб', age: 29 },
//   { name: 'Анна', age: 17 },
//   { name: 'Олег', age: 7 },
//   { name: 'Оксана', age: 47 }
// ];
// console.log(people.sort((a, b) => a.age > b.age ? 1 : -1));





function isPositive(number) {
  if (number > 0) {
    return number; 
  }
}

  function isMale(name, gender) {
    if (gender === 'male') {
      return name + gender; 
    } 
  }
  function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
      output.push(ruleFunction(arr[i]));
    }
  
    return output;
  }
  
  console.log(filter([3, -4, 1, 9], isPositive));

  const people = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];
 
 console.log(filter(people, isMale));