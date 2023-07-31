console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

// const title = "Späte Gäste";
// const author = "Rainer Alfons Kroder";
// let rating = 4.5;
// let sold = 6726;

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

// console.log(title);
// console.log(author);
// console.log(rating);
// console.log(sold);

// sold = sold + 3;
// rating = rating - 0.1;

// console.log(title);
// console.log(author);
// console.log(sold);
// console.log(rating);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

let rating = 4.5;
let sold = 6726;

function logBookData() {
  const title = "Späte Gäste";
  const author = "Rainer Alfons Kroder";
  console.log(title);
  console.log(author);
  console.log(Math.round(rating));
  console.log(sold);
}
logBookData();

sold += 3;
rating -= 0.1;

logBookData();

sold += 360;
// rating += 0.3;
// rating += 0.4; <-- nicht gerundet
rating += 0.5;

logBookData();

// --^-- write your code here --^--
