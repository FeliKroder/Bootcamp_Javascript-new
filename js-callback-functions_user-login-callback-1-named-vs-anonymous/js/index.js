console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log("Welcome! Your are logged in now.");
}

handleUserLogin(showWelcomeMessage);

// Call handleUserLogin below!

handleUserLogin(() => {
  console.log("Welcome! Your are logged in now.");
});

function handleUserLogin() {
  console.log("Welcome! Your are logged in now.");
}
