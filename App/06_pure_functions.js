/** 06_Pure functions */

/** This is pure function. Перевага "чистих" функцій: зменьшує кількість "багів" при розробці, добре читабельна, легка для розуміння, добре тестована - легко покривається тестами*/
// const sum = (a, b) => a + b;

// console.log(sum(3, 5)); // 8
// console.log(sum(3, 5)); // 8
// console.log(sum(3, 5)); // 8

/** NOT pure function - залежить від зовнішніх данних (AJAX, DOM, робота з файловою системою). Перестає бути "чистою" функцією*/
let c = 1;
const sum = (a, b) => a + b + c;

console.log(sum(3, 5)); // 9

c = 4;
console.log(sum(3, 5)); // 12
