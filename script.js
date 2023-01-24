const sum = (...array) => array.reduce((x1, x2) => (x1 += x2));

const multiply = (...array) => array.reduce((x1, x2) => (x1 = x1 * x2));

const reverseArray = (str) => str.split("").reverse().join("");

const filterLongWords = (i, ...str) => str.filter((s) => s.length >= i);

console.log(sum(1, 2, 3, 4, 5));
console.log(multiply(1, 2, 3, 4, 5));
console.log(reverseArray("Trung Dung"));
console.log(filterLongWords(5, "Morning", "Goodnight", "Trung Dung"));
