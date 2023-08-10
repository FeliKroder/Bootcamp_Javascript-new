export function getAnimal(animals) {
  if (animals === "cats") {
    return `I totally love cats!`;
  } else if (animals) {
    return `I like ${animals}!`;
  } else animals === "";
  return `I do not like animals at all!`;
}

console.clear();

getAnimal("cats");
console.log(getAnimal("cats"));
console.log(getAnimal("dogs"));
console.log(getAnimal("fish"));
console.log(getAnimal());
