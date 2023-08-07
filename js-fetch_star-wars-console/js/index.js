// import { renderElement } from "./utils.js";

console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error("Bad Response");
    } else {
      console.log("Great! It worked.");
      const starWarsData = await response.json();
      console.log("Data:", starWarsData);
      console.log("results:", starWarsData.results[2]);
      console.log("eyecolor:", starWarsData.results[2].eye_color);
      console.log("eyecolor:", starWarsData.results[12]);
    }
  } catch (error) {
    console.error(error);
  }
}

fetchData();
