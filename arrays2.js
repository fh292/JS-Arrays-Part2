/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 */

function isArrayLengthOdd(numbers) {
  if (numbers.length % 2 !== 0) return true;
  else return false;
}

console.log(isArrayLengthOdd([1, 2, 3]));
console.log(isArrayLengthOdd([1, 2, 3, 4]));

/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 */
function isArrayLengthEven(numbers) {
  if (numbers.length % 2 === 0) return true;
  else return false;
}

console.log(isArrayLengthEven([1, 2, 3]));
console.log(isArrayLengthEven([1, 2, 3, 4]));

/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array
 * `instructors` with additional string "Laila"
 */
const instructors = ["Mshary", "Hasan"];
function addLailaToArray(instructors) {
  const newInstructors = instructors.slice(0);
  newInstructors.push("Laila");
  return newInstructors;
}
console.log(addLailaToArray(instructors));

/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 */
const teams = ["Brazil", "Germany", "Italy"];
function eliminateTeam(teams) {
  teams.pop();
  return teams;
}
console.log(eliminateTeam(teams));

/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 */
const fruits = ["apple", "orange", "banana", "kiwi", "mango"];
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 === 0) {
    return fruits.slice(fruits.length / 2);
  } else return [];
}
console.log(secondHalfOfArrayIfItIsEven(fruits));

/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 */
function youGottaCalmDown(shout) {
  const firstExclamation = shout.indexOf("!");
  if (firstExclamation === -1) return shout;
  return shout.slice(0, firstExclamation + 1);
}
console.log(youGottaCalmDown("HI!!!!!!!!!!"));
