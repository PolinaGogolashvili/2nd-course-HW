// let a = 1;
// while (a <= 2) {
//   console.log("Привет!");
//   a++;
// }

// let b = 1;
// while (b <= 5) {
//   console.log(b);
//   b++;
// }

// let c = 7;
// while (c <= 22) {
//   console.log(c);
//   c++;
// }

const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let key in obj) {
  console.log(`${key} - доход ${obj[key]}`);
}
