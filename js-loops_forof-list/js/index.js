console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--

for (const programmingLanguage of programmingLanguages) {
  const listElement = document.createElement("li");
  listElement.textContent = programmingLanguage;
  console.log(programmingLanguage);
  ol.append(listElement);
}

// CREATE LIST ITEM FROM AN ARRAY
// const JavaScript = document.createElement("li");
// const Python = document.createElement("li");
// const Java = document.createElement("li");
// const CHash = document.createElement("li");
// const CPlusPlus = document.createElement("li");
// const PHP = document.createElement("li");
// const Ruby = document.createElement("li");

// JavaScript.textContent = "JavaScript";
// Python.textContent = "Python";
// Java.textContent = "Java";
// CHash.textContent = "C#";
// CPlusPlus.textContent = "C++";
// PHP.textContent = "PHP";
// Ruby.textContent = "Ruby";

// ol.append(JavaScript);
// ... usw.

// --^-- write/change code here --^--
