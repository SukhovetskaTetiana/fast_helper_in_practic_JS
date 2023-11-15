/** 07_Default parameters. Arguments */

/** Параметри функції за замовчуванням */
// use function pow()

function pow(a, b) {
  return a ** b;
}
console.log(pow(2, 3)); // 8

// function pow(a, b) {
//   console.log(a); // undefined
//   console.log(b); // undefined
//   return a ** b;
// }
// console.log(pow()); // NaN

// параметри функції за замовчуванням
// function pow(a = 1, b = 1) {
//   return a ** b;
// }
// console.log(pow()); // 1

// function pow(a = 1, b = 1) {
//   return a ** b;
// }
// console.log(pow(2)); // 2
// console.log(pow(2, 3)); // 8

//інший спосіб передачі параметрів
// function pow(a = 1, b = a + 1) {
//   return a ** b;
// }
// console.log(pow(2, 3));

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
