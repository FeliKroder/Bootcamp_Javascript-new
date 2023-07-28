console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!

const userName = "Jane Doe";

// 1. WELCOME FUNCTION
function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! Your are logged in now.`);
}
// CALL HANDLE FUNCTION AND PASS CALLBACKFUNCTION AS FIRST ARGUMENT
handleUserLogin(showWelcomeMessage);

// 2. CALLBACK FUNCTION AS AN ANONYMOUS FUNCTION INSIDE FUNCTION CALL
handleUserLogin(() => {
  console.log(`Welcome ${userName}! Your are logged in now.`);
});
