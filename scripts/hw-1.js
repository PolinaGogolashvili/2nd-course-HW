let a = prompt("Введите первое число");
let b = prompt("Введите второе число");

function Compare(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}
console.log(Compare(a, b));
