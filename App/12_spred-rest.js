/** 12_Spred operator and Rest operator */

// Spred operator дозволяє використати масив чи об'єкт де вимагається набір окремих елементів

// 1. додавання елементів існуючого масиву в новий масив
let additionalSubjects = ["Philisophy", "Phsychology"];
let subject = [
  "Math",
  "Ukrainian language",
  "Chemistry",
  ...additionalSubjects,
];
console.log(subject); // ['Math', 'Ukrainian language', 'Chemistry', 'Philisophy', 'Phsychology'];

// 2. копіювання масивів
let numbers1 = [1, 2, 3];
let numbers2 = [...numbers1];
numbers2.push(4);
console.log(numbers1); // [1, 2, 3]
console.log(numbers2); // [1, 2, 3, 4]

// 3. конкатенація масивів
numbers1 = [1, 2, 3];
numbers2 = [3, 4, 5];
console.log(numbers1.concat(numbers2)); // [1, 2, 3, 3, 4, 5];
console.log([...numbers1, 18, ...numbers2]); // [1, 2, 3, 18, 3, 4, 5];

// 4. передача елементів масиву в ролі аргументів функції
function perimeter(a, b, c) {
  console.log(a + b + c);
}

let args = [2, 3, 4];
console.log(perimeter(...args)); // 9

// 5. REST - збирає окремі елементи в масив - синтаксис ідентичний до spred, але значення протилежне
function addExclamation(...arr) {
  return arr.map((el) => el + "!");
}
console.log(addExclamation(1, 3, "hello", "rest")); // ['1!', '3!', 'hello!', 'rest!'];

/**========Task_01_SoftServe=====================================
 *Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns an array with the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.

Function example:

getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]
 */
function getModifiedArray(array) {
  return ["Start", ...array.slice(1, -1), "End"];
}

console.log(getModifiedArray([12, 6, 22, 0, -8]));

/**=================Task_03_sprint-1_SoftS================================
 * Find the maximum interval between two consecutive arguments.

Example:
maxInterv(3, 5, 2, 7); //5
maxInterv(3, 5, 2, 7, 11, 0, -2); //11
maxInterv(3, 5); //2
maxInterv(3); //0
 */
const maxInterv = (...arr) => {
  let incomingArr = [...arr];
  let maxInterv = 0;
  for (let i = 0; i < incomingArr.length; i++) {
    let valueDifference = incomingArr[i + 1] - incomingArr[i];
    if (valueDifference > maxInterv) {
      maxInterv = valueDifference;
    }

    valueDifference = incomingArr[i] - incomingArr[i + 1];
    if (valueDifference > maxInterv) {
      maxInterv = valueDifference;
    }
  }
  return maxInterv;
};

// ChatGPT
// const maxInterv = (...arr) =>
//   Math.max(
//     ...arr
//       .map((value, i) => Math.max(arr[i + 1] - value, value - arr[i]))
//       .slice(0, -1)
//   );
console.log(maxInterv(3));

//
/**=================Task_04_sprint-1_SoftS==========================
 * The function takes any number of strings and returns the sum of their lengths.

Example:
console.log(sumOfLen('hello', 'hi')); //7
console.log(sumOfLen('hi')); //2
console.log(sumOfLen()); //0
console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16
 */

const sumOfLen = (...arg) =>
  arg.reduce((sum, current) => sum + current.length, 0);
console.log(sumOfLen("hi"));

//

/**=================Task_05_sprint-1_SoftS============================
 * Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.

Function example:

combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]
 */

function combineArray(arr1, arr2) {
  return [...arr1, ...arr2].filter((elem) => typeof elem == "number");
}
console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));
