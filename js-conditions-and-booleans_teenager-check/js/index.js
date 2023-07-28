const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!

  console.clear();

  const age = Number(input.value);

  // if (age <= 19) {
  //   console.log("You are a teen.");
  // } else if (age > 19) {
  //   console.log("You are not a teen.");
  // } else if (age < 12) {
  //   console.log("You are a child");
  // }

  // ---> Reihenfolge IMPORTANT! what happens??

  if (age < 13) {
    console.log("You are not a teen yet.");
  } else if (age <= 19) {
    console.log("You are a teen.");
  } else if (age > 19) {
    console.log("You are not a teen.");
  }

  console.clear();
  // ---> 3er-Teil übersetzbar in Ternary Operator?

  const teen =
    age < 12
      ? "You are a child."
      : age > 12 && age < 19
      ? "You are a teen."
      : "You are an adult.";
  console.log(teen);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});

// document.YYY("age-output").innerHTML =
// var
