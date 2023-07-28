console.clear();

// Exercise:
// Use document.createElement() and append another social media post to the body.

// CREATE ELEMENTS
const newPost = document.createElement("article");
const newPostContent = document.createElement("p");
const newFooter = document.createElement("footer");
const newUsername = document.createElement("span");
const newPostButton = document.createElement("button");

// // ADD CLASSES
newPost.classList.add("post");
newPostContent.classList.add("post__content");
newFooter.classList.add("post__footer");
newUsername.classList.add("post__username");
newPostButton.classList.add("post__button");

// ADD TEXT CONTENT
newPostContent.textContent =
  "I hope I will understand soon what the f**k I need to code...";
newUsername.textContent = "@GirlsCoding";
newPostButton.textContent = "♥ Love";

// APPEND ELEMENTS
document.body.append(newPost);
newPost.append(newPostContent, newFooter);
newFooter.append(newUsername, newPostButton);

//EVENT
const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

newPostButton.addEventListener("click", handleLikeButtonClick);
