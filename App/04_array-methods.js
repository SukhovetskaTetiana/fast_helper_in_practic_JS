/** 04_Methods of Array */

// 1. values(): This method returns an iterator that provides the values for each index in the array. It takes no arguments.

const arr = ["apple", "banana", "cherry"];
const iterator = arr.values();

for (const values of iterator) {
  console.log(value);
}
//Output: apple banana cherry

// 2. length(): This property returns the length of the array.

const arr = ["apple", "banana", "cherry"];
console.log(arr.length);
// Output: 3

// 3. reverse(): This method reverses the order of the elements in the array.

const arr = ["apple", "banana", "cherry"];
arr.reverse();
console.log(arr);
//Output: ['cherry', 'banana', 'apple']

// 4. sort(): This method sorts the elements of an array in place and return the sorted array. It can take an optional compare function as an argument.

// Example 4.1
const arr = ["banana", "apple", "cherry"];
arr.sort();
console.log(arr);
// Output: ['apple', 'banana', 'cherry']

// Example 4.2
let str = ["s", "a", "f"];
// str.sort(); // ['a', 'f', 's'];

const numChange = [5, 3, 6, 4];
// numChange.sort((a, b) => a - b); // numChange = [3, 4, 5, 6]
// numChange.sort((a, b) => b - a); // numChange = [6, 5, 4, 3]
// numChange.sort((a, b) => 0.5 - Math.random()); // numChange = [3, 5, 4, 6]

// 5. at(): This method returns the element at the spesified index in the array. It takes one argument: the index.

const arr = ["apple", "banana", "cherry"];
console.log(arr.flat(1));
// Output: 'banana'

// 6. fill(): This method fills all the elements af an array from a start index to an end index with a static value. It can take up to three arguments: the value to fill with, the start index, and the end index.

const arr = ["apple", "banana", "cherry"];
arr.fill("orange", 1, 2);
console.log(arr);
// Output: ['apple', 'orange', 'cherry']

// 7. from(): This method creates a new array from an array-like object or an iterable object. It can take up to two arguments: the object to convert to an array, and a mapping function to apply to each element of the new array.

const obj = { 0: "apple", 1: "banana", 2: "cherry", length: 3 };
const arr = Array.from(obj);
console.log(arr);
// Output: ['apple', 'banana', 'cherry']

// 8. join(): This method joins all the elements of an array into a string using a specified separator. It takes one optional argument: the separator to use.

const arr = ["apple", "banana", "cherry"];
const str = arr.join(", ");
console.log(str);
// Output: 'apple, banana, cherry'

// 9. toString(): This method returns a string representing the array and its elements.

const arr = ["apple", "banana", "cherry"];
const str = arr.toString();
console.log(str);
// Output: 'apple,banana,cherry'

// 10. pop(): This method removes the last element from an array and returns that element.

const arr = ["apple", "banana", "cherry"];
const last = arr.pop();
console.log(last); // Output: 'cherry'
console.log(arr); // Output: ['apple', 'banana']

// 11. forEach(): method executes a provided function once for each array element. It doesn`t return anything, it just executes the callback function on each element of the array.

let fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (item) {
  console.log(item);
});
// Output: apple, banana, cherry

// 12. shift() method removes the first element from an array and returns that rwmovwd element. This method changes the length of the array.

let fruits = ["apple", "banana", "cherry"];
let shiftFruit = fruits.shift();
console.log(shiftFruit); // Output: 'apple'
console.log(fruits); // Output: ['banana', 'cherry']

// 13. copyWithin() method shallow copies part of an array to another location in the same array and returns the modified array without modifying its length.Syntax.copyWithin(target, start, end)

let numbers = [1, 2, 3, 4, 5];
numbers.copyWithin(2, 0, 2);
console.log(numbers); // Output: [1, 2, 1, 2, 5]

// 14. push(): method adds one or more elements to the end of an array and returns the new length of the array.

let fruits = ["apple", "banana"];
fruits.push("cherry", "orange");
console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'orange']

// 15. unshift(): method adds one or more elements to the beginning of an array and returns the new length of the array.

let fruits = ["cherry", "orange"];
fruits.unshift("apple", "banana");
console.log(fruits);
// Output: ['apple', 'banana', 'cherry', 'orange']

// 16. concat(): method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

let fruits = ["apple", "banana"];
let moreFruits = ["cherry", "orange"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits);
// Output: ['apple', 'banana', 'cherry', 'orange']

// 17. splice(): method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

const fruits = ["apple", "banana", "cherry", "orange"];
// Syntax: arr.splice(start, deleteCount, item1,... itemN)
fruits.splice(2, 1, "mango", "kiwi");
console.log(fruits);
// Output: ["apple", "banana", 'mango', 'kiwi', "orange"];

// 18. flat(): This method creates a new array with all sud-array elements concatenated into it recursively up to the specified depth.

const numbers = [1, [2, [3]], 4];
const flatNumbers = numbers.flat(Infinity);
console.log(flatNumbers);
// Output: [1, 2, 3, 4]

// 19. lastIndexOf(): This method returns the last index at which a given element can be found in the array.

const numbers = [1, 2, 3, 4, 5, 3];
const lastIndex = numbers.lastIndexOf(3);
console.log(lastIndex);
// Output: 5

// 20. indexOf(): This method returns the index of the first occurrence of a specified element ai an array. If the element is not present, it returns -1.

const arr = [5, 10, 15, 20];
const index = arr.indexOf(10);
console.log(index); // Output: 1

// 21. of(): This method creates a new array instance with a variable number of arguments, regardless of number or type of the arguments.

const arr = Array.of(1, 2, 3, "four", true);
console.log(arr);
// Output: [1, 2, 3, 'four', true]

// 22. every(): This method checks if all elements in an array pass a test (provided as a function). It returns true if all elements pass the test; otherwise, it returns false.

const arr = [2, 4, 6, 8];
const isEven = (num) => num % 2 === 0;
const result = arr.every(isEven);
console.log(result); // Output: true

// 23. slice(): This method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included).

const arr = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(2, 4);
console.log(slicedArr); // Output: [3, 4]

// 24. flatMap(): This method maps each element using a mapping function, then flattens the result into a new array.

const arr = [1, 2, 3];
const result = arr.flatMap((x) => [x * 2]);
console.log(result);
// Output: [2, 4, 6]

// 25. findIndex(): This method returns the index of the first element ina array that passes a test (provided a a function). If no element passes the test, it returns -1.

const arr = [10, 20, 30, 40, 50];
const greaterThan30 = (num) => num > 30;
const index = arr.findIndex(greaterThan30);
console.log(index); // Output: 3

// 26. find(): This method returns the value of the first element in an array that passed a test (provided as a function). If no element passed the test, it returns undefined.

const arr = [10, 20, 30, 40, 50];
const greaterThan30 = (num) => num > 30;
const result = arr.find(greaterThan30);
console.log(result); // Output: 40

// 27. includes(): This method determines whether an array includes a certain value among ist entries, returning true or false as appropriate.

const arr = [10, 20, 30, 40, 50];
const has20 = arr.includes(20);
console.log(has20); // Output: true

// 28. entries(): This method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const arr = ["a", "b", "c"];
const iterator = arr.entries();
console.log(iterator.next().value); // Output: [0, 'a']
console.log(iterator.next().value); // Output: [1, 'b']
console.log(iterator.next().value); // Output: [2, 'c']

// 29. reduce(): This method applies a function to each element of an array and reduces the array to a single value.

const numbers = [10, 20, 30, 40];
// accumulator: It is the value returned from the previous iteration of the function.
// currentValue: It is the current element being processed in the array.
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum); // Output: 100

// 30. reduceRight(): This method is similar to the reduce() method. However, it iterates over the array elements from right to left instead of from left to right.

// Example 30.1
const numbers = [10, 20, 30, 40];
const sum = numbers.reduceRight((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(sum); // Output: 100

// Example 30.2
// performs the reducer function you specified for each element of the array and returns a single value.
const orderPrice = [140, 530, 560, 123, 900];
let res = orderPrice.reduce((sum, current) => {
  console.log(`${sum}=>${current}`);
  return sum + current;
});
console.log(`Total price: ${res}`);
// в консоль виводить
/**
 * 140 => 530
 * 670 => 560
 * 1230 => 123
 * 1353 => 900
 * Total price: 2253
 */

// 31. isArray: This method determines whether the passed value is an array or not.

const fruits = ["apple", "banana", "mango"];
console.log(Array.isArray(fruits)); // Output: true

const number = 123;
console.log(Array.isArray(number)); // Output: false

// 32. filter(): This method creates a new array with all elements that pass the test implemented by the provided function.

// Example 32.1
const numbers = [10, 20, 30, 40];
const filterNumbers = numbers.filter((number) => {
  return number > 20;
});
console.log(filterNumbers); // Output: [30, 40]

// Example 32.2
// creates a new array with all the elements tested by the specified function;
const phonePrice = [400, 700, 3000, 1200, 8000, 1500, 100, 3200, 4600];
const filterPricePhone = phonePrice.filter((item) => {
  return item >= 700 && item <= 3000;
});
console.log(filterPricePhone); // [700, 3000, 1200, 1500]

// 33. keys(): This method returns an array containing the keys of the given object.

const myObj = { a: 1, b: 2, c: 3 };
const keysArray = Object.keys(myObj);
console.log(keysArray); // Output: ['a', 'b', 'c']

// 34. map(): This method creates a new array with the results of calling a provided function on every element in the calling array.

// Example 34.1
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// Example 34.2
// creates a new array with the results of calling a function for every array element;
const brands = ["HNC", "IphOne", "nokiA", "SAmSung", "Xiaomi", "Lg"];
const outputBrandsName = brands.map((brand) => brand.toUpperCase());
console.log(outputBrandsName); // ['HNC', 'IPHONE', 'NOKIA', 'SAMSUNG', 'XIAOMI', 'LG']

// ============================== EXAMPLES ================================
// exp_01
// Consider adding an element to the end of an array by the push() method.
// const cities = ["Rome", "Lviv", "Warsaw"];
// cities.push("Kyiv");
// console.log(cities); // ["Rome", "Lviv", "Warsaw", "Kyiv"]

// exp_02
// Consider deleting the first element of the array by the shift() method..
// const cities = ["Rome", "Lviv", "Warsaw"];
// cities.shift();
// console.log(cities); // ["Lviv", "Warsaw"]

// exp_03
// You can also delete an element of the array by its index (position) by the splice() method:.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const deletedElem = cities.splice(0, 1); // Rome
// console.log(cities); // ["Lviv", "Warsaw"]

// exp_04
// filter() - creates a new array with all the elements tested by the specified function;
// const cities = ["Rome", "Lviv", "Warsaw"];
// const newArr = cities.filter(function(citie) { return citie.length < 5 });
// console.log(newArr); // ["Rome", "Lviv"]

// exp_05
// map() - creates a new array by performing a given function for each element of the array;
// const cities = ["Rome", "Lviv", "Warsaw"];
// const newArr = cities.map( function(city) { return city + "Capital" }); // ["RomeCapital", "LvivCapital", "WarsawCapital"]

// exp_06
// reduce() - performs the reducer function you specified for each element of the array and returns a single value;
// const data = [2, 4, 6, 8];
// function reducer(total, value) { return total + value; }
// const sum = data.reduce(reducer); // 20

// exp_07
// Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so: each_cons([1,2,3,4], 2) #=> [[1,2], [2,3], [3,4]]
function eachCons(array, n) {
  const result = [];
  for (let i = 0; i <= array.length - n; i += 1) {
    let arr = array.slice(i, i + n);
    res.push(arr);
  }
  console.log(result);
  return result;
}
eachCons([3, 5, 8, 13], 1); // [[3], [5], [8], [13]]
eachCons([3, 5, 8, 13], 2); // [[3,5], [5,8], [8,13]]
eachCons([3, 5, 8, 13], 3); // [[3,5,8], [5,8,13]]

// exp_08 => задається початкове значення defaultSum;
const orderPrice2 = [140, 530, 560, 123, 900];
const defaultSum = 100;
const res2 = orderPrice2.reduce((sum, current) => {
  console.log(`${sum}=>${current}`);
  return sum + current;
}, defaultSum);
console.log(`Total price: ${res2}`);
// в консоль виводить
/**
 * 100 => 140
 * 240 => 530
 * 770 => 560
 * 1330 => 123
 * 1453 => 900
 * Total price: 2353
 */

// example_9 - схлопування дієве і при роботі зі String
const orderBrands = ["IPhone", "Nokia", "SAMSUNG", "Xiaomi", "LG"];
const resBrands = orderBrands.reduce((sum, current) => {
  return `${sum}; ${current}`;
}, defaultSum);
console.log(resBrands); // IPhone; Nokia; SAMSUNG; Xiaomi; LG

// example_10 ===========Task_06_sprint-1_SoftS======================
/**
 * Implement the longestLogin(loginList) function, which takes an array of user logins loginList  and returns the longest login. If the logins of the same length are the longest in the array, the login element with the largest index is returned. Tip: You can use the reduce() method to solve the task.

Function examples:
longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]);   //  Prokopenko
longestLogin(["user1", "user2", "333", "user4", "aa"]);   //  user4
 */

//ChatGPT

function longestLogin(loginList) {
  if (!Array.isArray(loginList) || loginList.length === 0) {
    // Check if input is a valid array with at least one element
    return null;
  }
  return loginList.reduce((longestLogin, currentLogin, currentIndex, array) => {
    if (
      currentLogin.length > longestLogin.length ||
      (currentLogin.length === longestLogin.length &&
        currentIndex > array.indexOf(longestLogin))
    ) {
      // If the current login is longer than the longest login so far,
      // or if they have the same length but the current login has a larger index,
      // update the longest login.
      return currentLogin;
    } else {
      return longestLogin;
    }
  }, loginList[0]); // Initialize with the first login in the array
}

// другой вариант - более короче в написании
function longestLogin(loginList) {
  return loginList.reduce(
    (longest, current, index, array) =>
      current.length > longest.length ||
      (current.length === longest.length && index > array.indexOf(longest))
        ? current
        : longest,
    loginList[0]
  );
}
console.log(longestLogin(["user1", "user2", "333", "user4", "aa"]));

// example_11 ================ Task_07_sprint-1_SoftS==============
/**
 * Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second parameter the function factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)

The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.

Example
// determines the factorial of the number n
function factorial(n) { // your code}; 
processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]
 */
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function processArray(arr, factorial) {
  return arr.map((i) => factorial(i));
}

console.log(processArray([1, 2, 3, 4, 5], factorial));

/** for of */
function forOf() {
  const cities = ["Rome", "Lviv", "Warsaw"];
  for (let i of cities) {
    // run 3 times
    console.log(i); // Rome, Lviv, Warsaw
  }
}

/** Similar actions can be done with for */
function similar() {
  const cities = ["Rome", "Lviv", "Warsaw"];
  for (let i = 0; i < cities.length; i++) {
    // run 3 times
    console.log(cities[i]);
  } // Rome, Lviv, Warsaw
}

/** In for, you can jump several elements forward depending on the step of the
counter and change the elements*/
function changeElem() {
  const cities = ["Rome", "Lviv", "Warsaw"];
  for (let i = 0; i < cities.length; i += 2) {
    cities[i] = cities[i] + "!";
  }
  console.log(cities); // ["Rome!", "Lviv", "Warsaw!"]
}
