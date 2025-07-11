// arrayMethodsActivity.js
// Reference: MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// 1. Use concat() to join two arrays
const arr1 = ["Cecile", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const combinedArr = arr1.concat(arr2);
console.log("1. Combined Array:", combinedArr);

// 2. Use push() to add an element "Kiwi" to the fruits array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("2. After push:", fruits);

// 3. Use unshift() to add 4 and 5 at the beginning of array1
let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("3. After unshift:", array1);

// 4. Use pop() to remove the last element from fruits array
fruits.pop();
console.log("4. After pop:", fruits);

// 5. Use shift() to remove the first element from array2
let array2 = [1, 2, 3];
array2.shift();
console.log("5. After shift:", array2);

// 6. Use sort() to sort the fruits array alphabetically
fruits.sort();
console.log("6. After sort:", fruits);

// 7. Use slice() to create a new array from fruits (index 1 to 3)
const slicedFruits = fruits.slice(1, 3);
console.log("7. Sliced Fruits (1 to 3):", slicedFruits);

// 8. Use splice() to insert and remove elements in the months array
let months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); // Insert "Feb" at index 1
months.splice(4, 1, "May"); // Replace "June" with "May"
console.log("8. After splice:", months);
