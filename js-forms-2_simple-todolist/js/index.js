console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData);
//     console.log(data);

//     form.reset();
//     form.headline.focus();
//     createListItems(data);
//   });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // JAVASCRIPT + FORMULARE KOMBINIEREN
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  form.reset();
  headline.focus();
  //   ODER: event.target.elements[1].focus();

  // CREATE LISTITEM:
  const listItem = document.createElement("li");

  // ADD CSS:
  listItem.classList.add("li");

  // CHANGE TEXTCONTENT:
  listItem.textContent = `Headline: ${data.headline} Task: ${data.task}`;

  // APPEND TO LIST:
  todoList.append(listItem);
});

//   //FUNCTION
//   function createListItems(parameter) {
//     const listItem = document.createElement("li");
//     listItem.classList.add("li");
//     // console.log(parameter, parameter.headline);
//     listItem.textContent = `Headline: ${parameter.headline}
//     Task: ${parameter.task}`;

//     todoList.append(listItem);
//   }
