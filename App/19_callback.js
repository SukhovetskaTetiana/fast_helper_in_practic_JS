/**
 * 19_callback function
 */

/*
 * Функция обратного вызова (callback)
 * - Функция может принимать другие функции как параметры;
 * - Функция которая передаётся другой функции как аргумент называется      «функцией обратного (отложенного) вызова» (callback-функция);
 * - Функция которая принимает другую функцию как параметр
 *   или возвращает функцию как результат своей работы называется «функцией высшего порядка»;
 */

// =========================we have function============================
// function myFunc() {
//   const a = [4, 5, 6];
//   document.querySelector(".out-1").innerHTML = a.join("-");
// }

// myFunc(); // 4-5-6

//=================wright this function using callback function=============
// function myFunction(callback) {
//   const a = [4, 5, 6];
//   let element = document.querySelector(".out-1");
//   callback(element, a);
// }

// // function callback
// function out(element, arr) {
//   element.innerHTML = arr.join("-");
// }

// myFunction(out);
// // 4-5-6

//================== example 2==================================
function twoSquared() {
  return 2 * 2;
}
twoSquared();

function threeSquared() {
  // return Math.pow(3, 3);
  return 3 * 3;
}

const numSquared = (num) => {
  return num * num;
};

// =============example 2 - long result with typical steps===============
const copyArrAndSquareNums = (arr) => {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i] ** 2);
  }
  return output;
};

const nums = [1, 2, 3, 4];
const res = copyArrAndSquareNums(nums);

console.log(res);
// (4) [1, 4, 9, 16]

const copyArrDevideByTwo = (arr) => {
  const output = [];

  for (let i = 0; i < arr.length; i += 1) {
    output.push(arr[i] / 2);
  }
  return output;
};

const res2 = copyArrDevideByTwo(nums);
console.log(res2);
// (4) [0.5, 1, 1.5, 2]

// ===========example 2 - callback function======================
function copyArrDoSomething(arr, instructions) {
  // const output = [];

  // for (let i = 0; i < arr.length; i += 1) {
  //   output.push(instructions(arr[i]));
  // }
  // return output;
  return instructions(...arr);
}

const numInstructions = (num) => {
  return num * num;
};

const result = copyArrDoSomething([1, 3, 5, 6], numInstructions);
console.log(result);
// (4) [1, 9, 25, 36]

const numDevidedBy3 = (num) => {
  return Math.round(num / 3);
};
const result2 = copyArrDoSomething([66, 17, 27, 698], numDevidedBy3);
console.log(result2);
// (4) [22, 6, 9, 233]

const somethingNum = [55, 66, 33, 77];
const resultNum = copyArrDoSomething(somethingNum, numDevidedBy3);
console.log(resultNum);

// ===================example 3 - filter==============================

// 1. надо передать функцию
// 2. функция получает элемент массива
// 3. если элемент массива удовлетворяет условию то функция вернет true
// 3. если элемент массива НЕ удовлетворяет условию то функция вернет false

const filter = function (array, test) {
  const filteredArray = [];

  for (const el of array) {
    console.log(el);
    const passed = test(el);

    if (passed) {
      filteredArray.push(el);
    }
  }

  return filteredArray;
};

// 3.1
const callback1 = function (value) {
  return value >= 3;
};
const r1 = filter([1, 2, 3, 4, 5], callback1);
console.log(r1);

// 3.2
const callback2 = function (value) {
  return value <= 4;
};
const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
console.log(r2);

// 3.3
const fruits = [
  { name: "apples", quantity: 200, isFresh: true },
  { name: "grapes", quantity: 150, isFresh: false },
  { name: "bananas", quantity: 100, isFresh: true },
];
const getFruitsWithQuantity = function (fruit) {
  return fruit.quantity >= 120;
};
const r3 = filter(fruits, getFruitsWithQuantity);
console.log(r3);

/*
 * ==============example 4 - Округлятор=========================
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

// напишемо через callback fanction
const rounder = function (places) {
  return function (number) {
    return Number(number.toFixed(places));
  };
};

const rounder2 = rounder(2);
const rounder3 = rounder(3);

console.dir(rounder2);
console.dir(rounder3);

console.log(rounder2(3.4567));
console.log(rounder2(5.4512312312367));

//====================Example 5===================================
const filterData = (arr, test) => {
  const filter = [];

  for (const num of arr) {
    const passed = test(num);
    if (passed) {
      filter.push(num);
    }
  }
  // console.log(filter);
  return filter;
};

const checkIsTrue = (value) => value >= 3;
const checkIs = (value) => value <= 4;

console.log(checkIsTrue(3));

console.log(filterData([2, 3, 56, 7, 1], checkIsTrue)); //[3, 56, 7]
console.log(filterData([2, 3, 56, 7, 1], checkIs)); //[2, 3, 1]

/// =================Example 6 - function to make Pizza================

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}
const results = makePizza();
const pointer = makePizza;

///
function deliverPizza(pizzaName) {
  return `Delivering ${pizzaName} pizza.`;
}
function makePizza1(pizzaName) {
  return `Pizza ${pizzaName} is being prepared, please wait...`;
}
function makeMessage(pizzaName, callback) {
  return callback(pizzaName);
}

///
function makePizza2(pizzaName, callback) {
  console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
  callback(pizzaName);
}
makePizza2("Royal Grand", function deliverPizza(pizzaName) {
  console.log(`Delivering pizza ${pizzaName}.`);
});
makePizza2("Ultracheese", function eatPizza(pizzaName) {
  console.log(`Eating pizza ${pizzaName}.`);
});

//
const pizzaPalace = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName) {},
};

// ========Example 6.1 - function to make Pizza=========================
const pizzaPalaces = {
  pizzas: ["Ultracheese", "Smoked", "Four meats"],
  order(pizzaName, onSuccess, onError) {
    const { pizzas } = this;
    if (pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName);
    }
    return onError(
      `There is no pizza with a name ${pizzaName} in the assortment.`
    );
  },
};

// Callback for onSuccess
function makePizzas(pizzaName) {
  return `Your order is accepted. Cooking pizza ${pizzaName}.`;
}

// Callback for onError
function onOrderError(error) {
  return `Error! ${error}`;
}

// Method calls with callbacks
pizzaPalace.order("Smoked", makePizzas, onOrderError);
pizzaPalace.order("Four meats", makePizzas, onOrderError);
pizzaPalace.order("Big Mike", makePizzas, onOrderError);
pizzaPalace.order("Vienna", makePizzas, onOrderError);

//======Example 7 - logic of receiving calls for the phone===============
function processCalls(recipient, onAvailable, onNotAvailable) {
  const isRecipientAvailable = Math.random() > 0.5;

  if (!isRecipientAvailable) {
    onNotAvailable(recipient);
    return;
  }
  onAvailable(recipient);
}

function takeCall(name) {
  console.log(`З'єднуємо з ${name}, очікуйте...`);
}

function activateAnsweringMachine(name) {
  console.log(`Абонент ${name} недоступний, залиште повідомлення.`);
}

function leaveHoloMessage(name) {
  console.log(`Абонент ${name} недоступний, записуємо голограму.`);
}

processCalls("Mango", takeCall, activateAnsweringMachine);
processCalls("Poly", takeCall, leaveHoloMessage);
