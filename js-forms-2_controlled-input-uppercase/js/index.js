console.clear();

const input = document.querySelector('[data-js="toUpperCase"]');

input.addEventListener("input", (event) => {
  console.log(event.target.value);
  input.value = input.value.toUpperCase();
});
