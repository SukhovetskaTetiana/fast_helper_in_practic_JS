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
