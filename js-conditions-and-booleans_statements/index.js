console.clear();

// -  check if the received password matches our `SUPER_SECRET_PASSWORD`
// - if the password is wrong, console.log "Access denied!"
// - if the password matches, console.log "Welcome! You are logged in as Brunhilde1984."
// - try our different values for `receivedPassword`
// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

const check = SUPER_SECRET_PASSWORD === receivedPassword;
console.log(check);

if (SUPER_SECRET_PASSWORD !== receivedPassword) {
  console.log("Access denied!");
} else {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 35;
if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 1000000;
if (numberOfHotdogs < 5) {
  console.log("2.00€/Hotdog");
}

// else if (numberOfHotdogs < 100) {
//     console.log("1.50 euro");
// }

// if (numberOfHotdogs < 5 + numberOfHotdogs < 100) {
//   console.log("1.50 euro");
// }
else if (numberOfHotdogs < 100) {
  console.log("1.50€/Hotdog");
} else if (numberOfHotdogs < 1000000) {
  console.log("1.00€/Hotdog");
} else if (numberOfHotdogs >= 1000000) {
  console.log("0.10€/Hotdog");
}

// Part 4: Daytime
const currentHour = 17;
const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!!!";
console.log(statement);
// if (currentHour < 8) {
//   console.log("Better be Sleeping!");
// } else if (currentHour >= 17) {
//   console.log("Partytime!!!");
// } else {
//   console.log("Still need to learn...");
// }

// Part 5: Greeting
const name = "Feli";
const greeting = "Hello " + (name === "Ronald" ? "Coach" : name) + "!";
console.log(greeting);
