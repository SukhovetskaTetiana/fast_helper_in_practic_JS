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
