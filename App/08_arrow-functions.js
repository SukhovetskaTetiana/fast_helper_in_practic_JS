/** 08_Arrow-functions (стрілкові функції) */

/** Have function */
// let someFunc = function (a) {
//   return a + 100;
// };

// 08.1. перетворюємо у стрілкову функцію
// let someFunc = (a) => {
//   return a + 100;
// };

// console.log(someFunc(5));

// 08.2. коли маємо один аргумент та один оператор, значення якого обчислюється, то можна записати в такому вигляді
let someFunc = (a) => a + 100; // повертається 105;
// АЛЕ
// let someFunc = (a) => {a + 100}; // повертається undefined;
// якщо використовуються {} то потрібно писати return
// let someFunc = (a) => {return a + 100}; // повертається 105;

console.log(someFunc(5));

// 08.3. перенесення функії по строкам

// let someFunc = (a)
//   => a + 100; // не працює

// let someFunc = (a) =>
// { a + 100 }; // коректна запис

// 08.4. якщо хочемо повернути об'єкт
// let someFunc = (a) => ({ value: a + 100 }); // коректна запис

// 08.5. стрілкові функції не підходять на роль методів
let obj = {
  i: 10,
  b: () => console.log(this.i, this),
  c: function () {
    console.log(this.i, this);
  },
};

obj.b(); // undefined - не коректна запис через стрілкову функцію
obj.c(); // 10 {i: 10, b: f, c: f}

// 08.6. стрілкові функції не мають arguments

//exampel_1
let arguments = [1, 2, 3];
let arr = () => arguments[0];

console.log(arr()); // 1

//exampel_2
function foo(n) {
  let f = () => arguments[0] + n; // масив arguments[0] це об'єкт функції. коли викликається функція, то arguments[0] отримує один параметр зі значенням "3"
  return f();
}

console.log(foo(3)); // 6
