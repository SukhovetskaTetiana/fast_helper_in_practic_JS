/** 11_Composition - це компанування декількох функцій в одну*/

import { compose, pipe } from "ramda";
// We have such as functions:

function a(value) {
  value += "a";
  return value;
}

function b(value) {
  value += "b";
  return value;
}

function c(value) {
  value += "c";
  return value;
}

console.log(a("_")); // _a

// Якщо потрібно застосувати обидві функції послідовно до одного значення
console.log(b(a("_"))); // _ab

// Якщо потрібно застосувати три функції послідовно до одного значення
console.log(с(b(a("_")))); // _abс

// використавши бібліотеку ramda можно спростити написання коду console.log(с(b(a("_"))))
// in Terminal => npm ramda

compose(c, b, a); // рез-ом буде нова функція яка відпрацює таким чином: (с(b(a("_"))));
const f = compose(c, b, a);
console.log(f("_")); // _abc

//можемо переписати використавши compose, іншим варіантом
compose(console.log, c, b, a)("_"); // _abc

// pipe => виклик вкладених функцій відбувається у зворотнєму порядку, якщо порівнювати із compose
pipe(a, b, c, conlole.log)("_"); // _abc

/**=============== Task 09*_sprint_01_SoftS=====================
 *Please, implement a function combineFunctions that takes any number of functions as an argument and returns a function that is a composition of the arguments.

For example:
negate = function(x){ return -x; };
halve = function(x){ return x / 2; };
square = function(x){ return x * x; };
double = function(x){ return 2 * x; };
combineFunctions(negate, halve, square) should return a function
square(halve(negate(x)))
combineFunctions(negate, double) should return a function
double(negate(x)))
 */

let combineFunctions = (...functions) => {
  return (x) => {
    return functions.reduce((result, func) => func(result), x);
  };
};

//test
console.log(combineFunctions((x) => x + 5)(3)); // 8
console.log(combineFunctions()(3)); // 3
console.log(
  combineFunctions(
    (x) => x + x,
    (x) => x - 1,
    (x) => x !== 0
  )(5)
); // true
console.log(
  combineFunctions(
    (x) => x + x,
    (x) => x - 1,
    (x) => (x = -x),
    (x) => "Hello, " + x
  )(5)
); // Hello, -9

/**============== Task 11_sprint-01_SoftS===========================
 * Implement 5 functions that take strings of data and process them in a certain way.

1) The upperCase() function takes string data as an argument and returns it to uppercase.
2) The tripleExclaim() function takes string data as an argument and returns it by adding three exclamation marks to it.
3) The split() function takes a separator as an argument, returns a function that accepts string data split by the separator character into an ordered set of substrings, and returns an array of those substrings.
4) The join() function takes separator as an argument, returns a function that takes an array of string data that are concatenated into a string by separator, and returns that string. 
5) The copy() function takes string data as an argument and returns it repeating 2 times.

Implement the createComposition() function, which can take any number of functions as arguments, and create a composition from them. The createComposition() function takes our 5 functions as arguments. The createComposition() function returns a function that takes its initial value as an argument. This nested function successively passes through an array of functions with each iteration returning the result of calling the accumulated value of the current function argument. The reduce() method can be used here.

The final function result is assigned the function createComposition(), which takes our 5 functions as arguments in the appropriate order. (split with '_' argument, join with ' ' argument)

Tips.
Consider that the result of one function can be passed as an argument to another function.
Pay attention to the order of the function arguments.
If you have difficulty implementing the createComposition() function, check out the "Useful links" for the material on function composition.

Usage example:
// implementation of 5 atomic functions
// implementation of createComposition function
const result = createComposition( // 5 function-arguments )
console.log(result("buy_ticket_now"));  //  BUY TICKET NOW!!! BUY TICKET NOW!!!
console.log(result("total sale")); //  TOTAL SALE!!! TOTAL SALE!!!
 */

const upperCase = (str) => str.toUpperCase();
const tripleExclaim = (str) => `${str}!!!`;
const split = (str, separator) => str.split(separator);
const join = (arr, separator) => arr.join(separator);
const copy = (str) => `${str} ${str}`;

const createComposition = (...functions) => {
  return (str) => {
    return functions.reduce((result, func) => func(result), str);
  };
};
const result = createComposition(
  upperCase,
  tripleExclaim,
  (str) => join(split(str, "_"), " "),
  copy
);

//TESTS
// console.log(result("buy_ticket_now")); // BUY TICKET NOW!!! BUY TICKET NOW!!!
// console.log(result("total sale")); // TOTAL SALE!!! TOTAL SALE!!!

// let str = "only_today_big_discounts";
// console.log(upperCase("tetiana")); // work correct
// console.log(tripleExclaim("tetiana")); // work correct
// console.log(split(str, "_")); // work correct
// console.log(join(["tet", "tet", "tet"], " ")); // work correct
//-----------------------------------
// let str = "only_today_big_discounts";
// console.log(join(split(str, "_"), " "));
//-------------------------------------
// console.log(copy("tetiana")); // work correct
