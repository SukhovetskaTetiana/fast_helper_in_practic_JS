/** 04_Methods of Array */

// => ======================= sort ===============================
let str = ["s", "a", "f"];
// str.sort(); // ['a', 'f', 's'];

const numChange = [5, 3, 6, 4];
// numChange.sort((a, b) => a - b); // numChange = [3, 4, 5, 6]
// numChange.sort((a, b) => b - a); // numChange = [6, 5, 4, 3]
// numChange.sort((a, b) => 0.5 - Math.random()); // numChange = [3, 5, 4, 6]

// => =================== forEach(func) ================================
// calls func for each element(enumeration)

//=> =================== filter ============================
// creates a new array with all the elements tested by the specified function;
const phonePrice = [400, 700, 3000, 1200, 8000, 1500, 100, 3200, 4600];
const filterPricePhone = phonePrice.filter((item) => {
  return item >= 700 && item <= 3000;
});
console.log(filterPricePhone); // [700, 3000, 1200, 1500]

// => ===================== map =======================
// creates a new array with the results of calling a function for every array element;
const brands = ["HNC", "IphOne", "nokiA", "SAmSung", "Xiaomi", "Lg"];
const outputBrandsName = brands.map((brand) => brand.toUpperCase());
console.log(outputBrandsName); // ['HNC', 'IPHONE', 'NOKIA', 'SAMSUNG', 'XIAOMI', 'LG']

// => ================= reducde ========================
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
