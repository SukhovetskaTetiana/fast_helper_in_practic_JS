/** 10_overloading - Перевантаження функції в JavaScript */
/** Це такі функцію які мають однакову назву але різну кількість або типи аргументів  */

/** !!! В JAvaScript не можливо перевантажити функцію */

function doSomething(a, b) {
  return [a, b];
}

console.log(doSomething(3, 4)); // [3, 4];
console.log(doSomething({ a: 3, b: 4 })); // [{...}, undefined];

// АЛЕ якщо

function doSomething(a, b) {
  // бачимо що перша функція перетерта та не відпрацьовує
  return [a, b];
}

function doSomething({ a, b }) {
  // друга функція перетирає першу функцію
  return [a, b];
}
console.log(doSomething(3, 4)); // [undefined, undefined];
console.log(doSomething({ a: 3, b: 4 })); // [3,4];

// можливо придумати обхідні шляхи такі як перевірка типів аргументів

//приклад перевірки типів аргументів - функція працює коректно

function doSomething(a, b) {
  if (typeof a === "object") {
    return [a.a, a.b];
  } else {
    return [a, b];
  }
}

console.log(doSomething(3, 4)); // [3, 4];
console.log(doSomething({ a: 3, b: 4 })); // [3,4];

// на практиці краще відмовитися від перевантаження функції і створити функції з різними назвами
