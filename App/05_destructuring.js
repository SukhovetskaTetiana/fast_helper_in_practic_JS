/** 05_Destructuring */
/** syntax of destructuring assignment - синтаксис деструктуризаціного присвоєння */

/** 05_1. ======= Object - об'єкти ======== */

// 05_1.1. We have an Object/
const user = {
  id: 25,
  isVerified: true,
};

// const id = user.id;
// const isVerified = user.isVerified;

// console.log(id); // 25
// console.log(isVerified); // true

/** Destructuring this Object */
/** version_1 */
// const { id, isVerified } = user;

// console.log(id); // 25
// console.log(isVerified); // true

/** version_2 - can change constant name. Result is the same version_1 */
// const { id: number, isVerified: isApproved } = user;

// console.log(number); // 25
// console.log(isApproved); // true

// 05_1.2. 'person' object and two function ('createUser1' and 'createUser2')
// 'person' Object
const person = {
  name: "Bart",
  job: "Student",
  parents: ["Homer", "Marge"],
};

// Object Destructuring
const { name, job, parents } = person;
console.log(name, job, parents);

// Array Destructuring
const [father, mather] = parents;
console.log(father, mather);

// 'createUser1' Function
function createUser1(person1) {
  const id = Math.floor(Math.random() * 9999);
  return {
    id: id,
    name: person1.name,
    job: person1.job,
    parents: person1.parents,
  };
}
console.log(createUser1(person));

// 'createUser2' Function
function createUser2({ name, job, parents }) {
  const id = Math.floor(Math.random() * 9999);
  const [father] = parents;
  return {
    id,
    name,
    job,
    father,
  };
}
console.log(createUser2(person));

// console result
// { id: 8924, name: 'Bart', job: 'Student', father: 'Homer' }
// id: 8924
// name: 'Bart'
// job: 'Student'
// father: 'Homer'
// [[Prototype]]:Object

/** 05_2. ======= Arrays - масиви =========*/
// We have an Array/
const numbers = ["one", "two", "three", "four"];

/** we want to assign the values ​​of the elements of this array to separate variables */
/** Destructuring this Array */
/** example_1 */
// const [a, b, c, d] = numbers;
// console.log(a); // 'one'
// console.log(b); // 'two'
// console.log(c); // 'three'
// console.log(d); // 'four'

/** example_2 */
// const [a, b, c, d, e] = numbers;
// console.log(a); // 'one'
// console.log(b); // 'two'
// console.log(c); // 'three'
// console.log(d); // 'four'
// console.log(e); // 'undefined'

/** example_3 */
// const [a, b, c, d, e = "some default"] = numbers;
// console.log(a); // 'one'
// console.log(b); // 'two'
// console.log(c); // 'three'
// console.log(d); // 'four'
// console.log(e); // 'some default'

/** example_4 */
// const [a, , , d] = numbers;
// console.log(a); // 'one'
// console.log(d); // 'four'

/** example_5 - use rest operator */
// const [a, ...d] = numbers;
// console.log(a); // 'one'
// console.log(d); // ['two', 'three', 'four']

/** 05_3. Exchange of variables by values - обмін змінних значеннями між собою*/

// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

/** 05_4. Function arguments - аргументи функцій */
/** example_1 */
const student = {
  direction: "Programming",
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function studentDirection({ direction }) {
  return direction;
}

console.log(studentDirection(student)); // 'Programming'

/** example_2 */
function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(whois(student)); // 'jdoe is John'
