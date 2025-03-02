function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

function introduce(name, age) {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}

function getEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

function countCharacters(str) {
  return str.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function areAnagrams(str1, str2) {
  const formatStr = (str) => str.toLowerCase().split("").sort().join("");
  return formatStr(str1) === formatStr(str2);
}
