/** 07_Default parameters. Arguments */

/** Параметри функції за замовчуванням */
// use function pow()

// початкова умова
function pow(a, b) {
  return a ** b;
}
console.log(pow(2, 3)); // 8

// Example_1

// function pow(a, b) {
//   console.log(a); // undefined
//   console.log(b); // undefined
//   return a ** b;
// }
// console.log(pow()); // NaN

// Example_2 => параметри функції за замовчуванням
// function pow(a = 1, b = 1) {
//   return a ** b;
// }
// console.log(pow()); // 1

// Example_3
// function pow(a = 1, b = 1) {
//   return a ** b;
// }
// console.log(pow(2)); // 2
// console.log(pow(2, 3)); // 8

// Example_4 => інший спосіб передачі параметрів
// function pow(a = 1, b = a + 1) {
//   return a ** b;
// }
// console.log(pow(2, 3));

// Example_5 => якщо передається до функції тільки другий параметр
// function pow(a = 1, b = 1) {
//   return a ** b;
// }
// console.log(pow(undefined, 3)); // => (a = 1, b = 3)

/** Аргументи - об'єкт чи псевдо-масив який містить всі аргументи які передавалися в функцію під час її виклику */

// function pow(a = 1, b = 1) {
//    console.log(arguments); // [Arguments] {'0': 2, '1': 3}
//   return a ** b;
// }
// console.log(pow(2, 3)); // 8

// можемо змінити параметр 'a' в функції
// function pow(a = 1, b = 1) {
//   console.log(arguments); // [Arguments] {'0': 2, '1': 3}
//   return arguments[0] ** b;
// }
// console.log(pow(2, 3)); // 8 - працює коректно

// !!! з arguments не можемо використовувати деякі методи масивів такі як reduce, але має властивість length. Тож можемо перебрати в циклі всі аргументи функції

/**================Task_02_srint-1_SoftS===========================
 * The function filterByN receives an array of integers, a number and a parameter (greater, less). Print a new array, where all elements will be greater/less than this number

By default, the number is 0, the parameter is greater.

Example:

filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater');  //[ 55]
filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less'); // [-2, 2, 3, 0, -13]
filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less'); //  []
filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
filterNums([-2, 2, 3, 0, 43, -13, 6], 23);  // [43]
 */

const filterNums = (arr, number = 0, parameter = "greater") => {
  const resultArr = arr.filter((elem) =>
    parameter != "greater" ? elem < number : elem > number
  );
  return resultArr;
};

console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, "greater"));

//================== Task_08_sprint-2_SoftS=================
/**
 * Using the default parameter technique, overload the overloadedFunc() function, which takes 3 arguments. For the 1st argument of the function set the default value [1, 2, 3], for the 2nd - the value 2, for the 3rd - the function that returns the product of the first two arguments, and the function can multiply both arrays and numbers.

The overloadedFunc() function returns the result of the default function.
For example:
Test	Result
console.log(overloadedFunc()); // Result [ 2, 4, 6 ]
console.log(overloadedFunc([2,4,6,8])); // Result[ 4, 8, 12, 16 ]
console.log(overloadedFunc([2,4,6], 3)); // Result [ 6, 12, 18 ]
console.log(overloadedFunc(10)); // Result 20
console.log(overloadedFunc(8, 3)); // Result 24
 */
function overloadedFunc(arr = [1, 2, 3], num = 2, func = (a, b) => a * b) {
  if (typeof arr === "number") {
    arr = [arr];
  }
  const result = arr.map((element) => func(element, num));
  return Array.isArray(result) && result.length === 1 ? result[0] : result;
}

console.log(overloadedFunc()); // Result [ 2, 4, 6 ]
console.log(overloadedFunc([2, 4, 6, 8])); // Result[ 4, 8, 12, 16 ]
console.log(overloadedFunc([2, 4, 6], 3)); // Result [ 6, 12, 18 ]
console.log(overloadedFunc(10)); // Result 20
console.log(overloadedFunc(8, 3)); // Result 24

/**========================== Task 10_sprint-01_SoftS================
 * Suppose, you have an array of students:
 * /

let students = [{
  name: 'Anna',
  languages: ['English', 'Ukrainian'],
  age: 21
}, {
  name: 'Bob',
  languages: ['Polish', 'Spanish'], 
  age: 26 
}, { 
  name: 'Alice', 
  languages: ['Italian', 'Russian'], 
  age: 18 
}]

/* Please, implement a function getLanguages.
The function takes an array of students as a first parameter
nd a condition on a student (function)
getLanguages should return an array of languages from students that satisfy a condition.

For example:
getLanguages(students, student => student.age < 26) should return
['English', 'Ukrainian',  'Italian', 'Russian']

getLanguages(students, student => student.name === 'Alice') should return
['Italian', 'Russian']

getLanguages(students) should return
['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Russian']

Try to use reduce and not use loops to solve this task. 
 */
let students = [
  {
    name: "Anna",
    languages: ["English", "Ukrainian"],
    age: 21,
  },
  {
    name: "Bob",
    languages: ["Polish", "Spanish"],
    age: 26,
  },
  {
    name: "Alice",
    languages: ["Italian", "Russian"],
    age: 18,
  },
];

const getLanguages = (students, condition = () => true) => {
  return students.reduce((result, student) => {
    if (condition(student)) {
      result.push(...student.languages);
    }
    return result;
  }, []);
};

// Examples
console.log(getLanguages(students, (student) => student.age < 26)); // Output: ['English', 'Ukrainian', 'Italian', 'Russian']
console.log(getLanguages(students, (student) => student.name === "Alice")); // Output: ['Italian', 'Russian']
console.log(getLanguages(students)); // Output: ['English', 'Ukrainian', 'Polish', 'Spanish', 'Italian', 'Russian']
