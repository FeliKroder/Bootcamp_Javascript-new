console.clear();

/*
Rewrite the following functions as arrow functions.
Use implicit returns when possible
*/

// ______ursprüngliche Funktion______
// function getCurrentHour() {
// const now = new Date();
// const currentHour = now.getHours();
// if (currentHour === 0) {
//   return "12am";
// } else if (currentHour === 12) {
//   return "12pm";
// } else if (currentHour <= 11) {
//   return currentHour + "am";
// } else {
//   return currentHour - 12 + "pm";
// }

// ______Nadja's und Feli's Funktion______
const getCurrentHour = () =>
  new Date().getHours() === 0
    ? "12am"
    : new Date().getHours() === 12
    ? "12pm"
    : new Date().getHours() <= 11
    ? new Date().getHours() + "am"
    : new Date().getHours() - 12 + "pm";

console.log(getCurrentHour());

// const getCurrentHour = () =>
//   new Date().getHours() === 0
//     ? "12am"
//     : new Date().getHours() === 12
//     ? "12pm"
//     : new Date().getHours() <= 11
//     ? +"am"
//     : new Date().getHours() - 12 + "pm";

// console.log(getCurrentHour());

// ______Mary's Funktion______
// const getCurrentHour2 = () =>
//   new Date().getHours() === 0
//     ? "12am"
//     : new Date().getHours() === 12
//     ? "12pm"
//     : new Date().getHours() <= 11
//     ? new Date().getHours() + "am"
//     : new Date().getHours() - 12 + "pm";

// console.log(getCurrentHour2());

// ______Gregor's Funktion______
// const getCurrentHour = () => {
//   const now = new Date();
//   const currentHour = now.getHours();

//   if (currentHour === 0) return "12am";
//   else if (currentHour === 12) return "12pm";
//   else if (currentHour <= 11) return currentHour + "am";
//   else return currentHour - 12 + "pm";
// };

// function add2Numbers(first, second) {
// const sum = first + second;
//   return sum;
// }

// const add2Numbers = (first, second) => {
// return first + second;}

// const sum1=add2Numbers(1,2);
// console.log("sum1:", sum1);

// function getVectorLength(x, y, z) {
//   return (x ** 2 + y ** 2 + z ** 2) ** 0.5;
// }

const getVectorLength = (x, y, z) => (x ** 2 + y ** 2 + z ** 2) ** 0.5;
console.log(getVectorLength(3, 4, 5));

// function cleanInput(string) {
//   return string.toLowerCase().trim();
// }

const cleanInput = (string) => string.toLowerCase().trim();
console.log(cleanInput("I AM A UPPERCASE STRING CONVERTED TO LOWERCASE!"));

/*
Rewrite the following arrow functions as classic functions.
*/

// const isOddAndSmall = (number) => {
//   if (number > 10) {
//     return false;
//   }

//   if (number % 2 === 0) {
//     return false;
//   }

//   return true;
// };

function isOddAndSmall(number) {
  if (number > 10) {
    return false;
  }
  if (number % 2 === 0) {
    return false;
  }
  return true;
}
console.log(isOddAndSmall());

// const add3 = (a, b, c) => a + b + c;

function add3(a, b, c) {
  return (add3 = a + b + c);
}
console.log(add3(1, 2, 3));

// const repeat10 = (string) => string.repeat(10);

function repeat10(string) {
  return string.repeat(10);
}
console.log(repeat10("Bla"));
