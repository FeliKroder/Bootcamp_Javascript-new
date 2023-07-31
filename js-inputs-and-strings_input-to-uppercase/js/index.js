console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

const firstInput = document.querySelector('[data-js="first-input"]');
const buttonUpperCase = document.querySelector('[data-js="button-uppercase"]');
// const output = document.querySelector('[data-js="first-input"]');

// firstInput.addEventListener("click", () => {
//   const firstInput.value = firstInput.value.toUppercase();
// });

buttonUpperCase.addEventListener("click", () => {
  firstInput.value = firstInput.value.toUpperCase();
});
