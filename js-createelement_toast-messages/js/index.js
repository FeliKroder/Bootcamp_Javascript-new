console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const newToastMessage = document.createElement("li");

  newToastMessage.textContent = "I am new";
  newToastMessage.classList.add("toast-container__message");
  console.log(newToastMessage);

  console.log(toastContainer);

  toastContainer.append(newToastMessage);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});

// toastContainer.remove();
