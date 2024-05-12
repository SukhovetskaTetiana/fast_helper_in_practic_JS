// CLOSURE FUNCTION

//Замыкание (англ. closure) в программировании — функция первого класса, в теле которой присутствуют ссылки на переменные, объявленные вне тела этой функции в окружающем коде и не являющиеся её параметрами.

// Замыкание - это функция, содержащая в себе ссылки на переменные из внешней области видимости. Т.е. она "замыкает" внешние переменные в себе.

//Относительно javascrtipt замыкание - это копирование родительской области видимости (а стало быть всех переменных в ней) в дочернюю. А область видимости в javascript ограничивается функциями.

//выполняющаяся функция - это обьект в памяти
// свойства этого обьекта - это переменные функции
// внутри обьекта одной функции можно запустить другую функцию которая может использовать свойства обьекта внешней функции
// обычно после выполнения функции ее обьект удаляется из памяти атоматически сборщиком мусора
// но если свойства этого обекта используются например внутренней функцией то обьект не исчезает

const fnA = (parameter) => {
  const innerVaiableFnA = `It's inner fnA`;

  const innerfnB = () => {
    console.log(`${parameter} ${innerVaiableFnA} and it's call innerFnB`);
  };
  return innerfnB;
};

// fnA('hI'); // undefined

const fnC = fnA("HI!");
console.log(fnC); // () => {console.log(`${parameter} ${innerVaiableFnA} and it's call innerFnB`);}

fnC(); // HI! It's inner fnA and it's call innerFnB

// make dish

// const makeDish = (sheffName, dish) => {
// console.log(`${sheffName} make ${dish}`);
// };

const makeSheff = (name) => {
  const makeDish = (dish) => {
    console.log(`${name} make ${dish}`);
  };
  return makeDish;
};

makeSheff("Stefan"); // undefined

const sheffStefan = makeSheff("Stefan");
console.log(sheffStefan); // (sheffName, dish) => {console.log(`${sheffName} make ${dish}`);}
sheffStefan(); // Stefan make undefined
sheffStefan("potato"); // Stefan make potato

const sheffNicholas = makeSheff("Nicholas");
sheffNicholas("soup with cheese"); // Nicholas make soup with cheese

// closure rounders

function rounders(num, quantity) {
  return Number(num.toFixed(quantity));
}

console.log(rounders(2.34565, 2)); //2.35

function getRounder(quantity) {
  function rounders(num) {
    return Number(num.toFixed(quantity));
  }
  return rounders;
}

const rounder1 = getRounder(1);
console.log(rounder1(3.342341)); // 3.3
console.log(rounder1(8.042342)); // 8

const rounder2 = getRounder(2);
console.log(rounder2(3.342341)); // 3.34
console.log(rounder2(8.042342)); // 8.04

const rounder3 = getRounder(3);
console.log(rounder3(3.342343)); // 3.342
console.log(rounder3(8.042344)); // 8.042

const rounder4 = getRounder(4);
console.log(rounder4(3.342343)); // 3.3423
console.log(rounder4(8.042344)); // 8.0423

// closure value

function myLibFactory() {
  let value = 1;

  const add = (num) => {
    value += num;
  };

  return {
    add,
    getValue() {
      return value;
    },
  };
}

const myLib = myLibFactory();
console.log(myLib); // {add: ƒ, getValue: ƒ}
console.log(myLib.getValue); // getValue() {return value;}
myLib.getValue(); // undefined
console.log(myLib.getValue()); // 1
myLib.add(10);
console.log(myLib.getValue()); // 11

// closure salary

const salary = (teacherName, salary = 0) => {
  // private variable
  let baseSalary = salary;

  //interface
  return {
    raise(amount) {
      if (amount > 1000) {
        return `Are you awesome?`;
      }
      baseSalary += amount;
    },
    lower(amount) {
      return (baseSalary -= amount);
    },
    currentSalary(amount) {
      return `${teacherName}'s current salary is ${baseSalary}$`;
    },
  };
};

const mathTeacher = salary("Oncu", 700);
console.log(mathTeacher); // {raise: ƒ, lower: ƒ, currentSalary: ƒ}
mathTeacher.currentSalary(); // undefined
console.log(mathTeacher.currentSalary()); // Oncu's current salary is 700$

mathTeacher.raise(100);
console.log(mathTeacher.currentSalary()); // Oncu's current salary is 800$

mathTeacher.lower(30); // undefined
console.log(mathTeacher.lower(30)); // 740 => 800 - 30 - 30
// console.log(mathTeacher.lower()); // NaN
console.log(mathTeacher.currentSalary()); // Oncu's current salary is 740$

mathTeacher.raise(15000);
console.log(mathTeacher.raise(15000)); // Are you awesome?
console.log(mathTeacher.currentSalary()); // Oncu's current salary is 740$

// ARROW FUNCTION ==============================================================================

const arrowFn = () => {
  return {
    name: "Harry",
  };
};

console.log(arrowFn()); // {name: 'Harry'}

const arrowFnA = () => ({ name: "Harry" });
console.log(arrowFnA()); // {name: 'Harry'}

// INLINE FUNCTION ===============================================================================

const fnD = (arr, test) => {
  const filterArr = [];

  for (const num of arr) {
    const passed = test(num);

    if (passed) {
      filterArr.push(num);
    }
  }
  return filterArr;
};

const getEqual = (num) => num > 12;

const fnE = fnD([10, 5, 13, 234], getEqual);
console.log(fnE); //  [13, 234]

const fnF = fnD([10, 5, 13, 234], (num) => num > 12); // INLINE FUNCTION
console.log(fnF); //[13, 234]

// ARROW FUNCTION + THIS
// EXPLICIT RETURN  явный возврат  { return ... }
// IMPLICIT RETURN  неявный возврат

const add = (...args) => args;
add(1, 23, 45);
console.log(add(1, 23, 45)); // [1, 23, 45]

// context this
//  якщо в стрілочній ф-ції в глобальному полі контексту this - window (undefined)
const showThis = () => {
  console.log("this is in showThis: ", this);
};

showThis(); // this is in showThis: window (undefined)
// this.showThis(); //Uncaught TypeError:

const showThatThis = function () {
  console.log("this is in showThatThis: ", this);
};

showThatThis(); // this is in showThatThis:  undefined

const anybody = { nameAnybody: "Anybody" };

anybody.showContext = showThis;
anybody.showContext(); //this is in showThis: window (undefined)

// this в методі
// arrow how object methods
const anybodyUser = {
  fullName: "Anybody",
  showName() {
    console.log("this: ", this); // {fullName: 'Anybody', showName{....}}
    console.log("this.fullName: ", this.fullName); // 'Anybody'

    const inner = function () {
      console.log("this is in inner: ", this); // this is in inner:  undefined
      // console.log('this.fullName: ', this.fullName); // Uncaught TypeError: Cannot read properties of undefined
    };

    inner();

    const innerArrow = () => {
      console.log("this is in innerArrow: ", this); // {fullName: 'Anybody', showName{....}}
      console.log("this.fullName: ", this.fullName); // this.fullName:  Anybody
    };

    innerArrow();
  },
};
anybodyUser.showName();

// context this
const book = {
  title: "React for beginners",
  showThis() {
    console.log("showThis -> this", this);
  },
  showTitle() {
    console.log("showTitle -> this.title", this.title);
  },
};

book.showThis(); // title: 'React for beginners', showThis: ƒ, showTitle: ƒ}
book.showTitle(); // React for beginners

const outerShowThis = book.showThis;
outerShowThis(); // this undefined

// const outerShowTitle = book.showTitle;
// outerShowTitle(); // TypeError: Cannot read properties of undefined

//context this
const makeChangeColor = function () {
  const changeColor = function (color) {
    console.log("changeColor -> this", this);
    //this.color = color;
  };
  changeColor(); // this undefined

  const sweater = {
    color: "teal",
  };

  sweater.updateColor = changeColor;

  sweater.updateColor("red"); // {color: 'teal', updateColor: ƒ}

  return sweater.updateColor;
};

makeChangeColor(); //
console.log(makeChangeColor());
//  f (color) {
//   console.log('changeColor -> this', this);
//   //this.color = color;
// }

/*
 * Колбек-функції, функції вищого порядку
 */

const greet = function (username, callback) {
  callback(username);
};

const simpleGreet = function (username) {
  console.log(`Hello ${username}`);
};

const fullGreet = function (fullName) {
  console.log(`Hello ${fullName}`);
};

const prettyGreet = function (username) {
  console.log(`Hello ${username} 👋`);
};

greet("Oleksii", simpleGreet);
greet("Oleksii Repin", fullGreet);
greet("Oleksii", prettyGreet);

// ? Запит на сервер
//
const fetchUser = async function (userUrl, callback) {
  const response = await fetch(`https://api.github.com/users/${userUrl}`);
  const result = await response.json();

  callback(result);
};

const showInfoAboutUser = function (user) {
  console.log(user);
};

const showAvatar = function (user) {
  console.log(user.avatar_url);
};

fetchUser("olexiy-repin", showInfoAboutUser);
fetchUser("olexiy-repin", showAvatar);

/*
? Напишіть функцію each(array, callback), яка першим параметром очікує масив, а другим - функцію, яка застосовується до кожного елемента масиву.
? Функція each повинна повернути новий масив, елементами якого будуть результати виклику колббека.
*/

const numbersA = [1, 2, 3, 4, 5];

const eachEl = function (array, callback) {
  const newArray = [];

  for (const item of array) {
    const updatedItem = callback(item);
    newArray.push(updatedItem);
  }

  return newArray;
};

const multi = function (el) {
  return el * 2;
};

const addA = function (el) {
  return el + 2;
};

const logElements = function (el) {
  return el * el;
};

console.log(eachEl(numbersA, multi)); // [2, 4, 6, 8, 10]
console.log(eachEl(numbersA, addA)); // [3, 4, 5, 6, 7]
console.log(eachEl(numbersA, logElements)); //[1, 4, 9, 16, 25]

/*
? Напишіть такі функції:
? createProduct(product, callback) - приймає об'єкт товару без id, а також колбек-функцію.
? Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор до властивості id і викликає колбек передаючи йому створений об'єкт.
? logProduct(product) - коллбек, що приймає об'єкт продукту і логує його в консоль
? logTotalPrice(product) - коллбек, що приймає об'єкт продукту і логіює загальну вартість товару в консоль
*/

const createProduct = (product, callback) => {
  const newProduct = {
    id: Date.now(),
    ...product,
  };

  callback(newProduct);
};

const logProduct = (product) => {
  console.log(product);
};

const logTotalPrice = ({ price, quantity } = {}) => {
  console.log(`Total price: ${price * quantity}`);
};

function doubleQuantity({ quantity }) {
  console.log(quantity * 2);
}

const product = { name: "Tomato", price: 10, quantity: 43 };
createProduct(product, doubleQuantity);
createProduct({ name: "🍎", price: 30, quantity: 3 }, logProduct);
createProduct({ name: "🍎", price: 30, quantity: 3 }, logTotalPrice);

createProduct({ name: "🍋", price: 20, quantity: 5 }, logProduct);
createProduct({ name: "🍋", price: 20, quantity: 5 }, logTotalPrice);

/*
? Додайте об'єкту account методи  withdraw(amount, onSuccess, onError) і deposit(amount, onSuccess, onError), де перший параметр це сума операції, а другий і третій - колбеки.
?
? Метод withdraw викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount can't exceed account balance of ${this.balance} credits`) якщо amount більше this.balance
? інакше знімаємо гроші з балансу і викликаємо onSuccess(`Account balance: ${this.balance}`)
?
? Метод deposit викликає:
? onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`) якщо amount більше TRANSACTION_LIMIT
? onError(`Amount must be more than 0 credits`) якщо amount менше або дорівнює нулю
? інакше додаємо до балансу amount і викликаємо onSuccess(`Account balance: ${this.balance}`)
*/

const TRANSACTION_LIMIT = 1000;

const account = {
  username: "Jacob",
  balance: 400,

  withdraw(amount, onSuccess, onError) {
    if (amount > TRANSACTION_LIMIT || amount > this.balance) {
      onError({
        message: "Cталась біда. Ліміт перевищено або грошей нема",
        status: "ERROR",
      });
    } else {
      onSuccess({
        status: "OK",
        message: "Операція withdraw успішна",
      });
    }
  },

  // withdraw(amount, onSuccess, onError) {
  //   if (amount > TRANSACTION_LIMIT) {
  //     onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
  //   } else if (amount > this.balance) {
  //     onError(`Amount can't exceed account balance of ${this.balance} credits`);
  //   } else {
  //     this.balance -= amount;
  //     onSuccess(`Account balance: ${this.balance}`);
  //   }
  // },

  deposit(amount, onSuccess, onError) {
    if (amount <= 0 || amount > TRANSACTION_LIMIT) {
      onError({
        message:
          "Deposit не вдався. Бо сума менше або дорівнює нуль. Або ліміт перевищено",
        status: "ERROR DEPOSIT",
      });
    } else {
      onSuccess({
        message: "Все гуд",
      });
    }
  },
};

// deposit(amount, onSuccess, onError) {
//   if (amount > TRANSACTION_LIMIT) {
//     onError(`Amount should not exceed ${TRANSACTION_LIMIT} credits`);
//   } else if (amount <= 0) {
//     onError(`Amount must be more than 0 credits`);
//   } else {
//     this.balance += amount;
//     onSuccess(`Account balance: ${this.balance}`);
//   }
// },

const handleSuccess = ({ message, status = "OK" }) => {
  console.log(`${status}: ${message}`);
};

const handleError = ({ message, status }) => {
  console.log(`${status}: ${message}`);
};

// function handleSuccess(message) {
//   console.log(`✅ Success! ${message}`);
// }

// function handleError(message) {
//   console.log(`❌ Error! ${message}`);
// }

account.withdraw(2000, handleSuccess, handleError);
account.withdraw(600, handleSuccess, handleError);
account.withdraw(300, handleSuccess, handleError);
account.deposit(1700, handleSuccess, handleError);
account.deposit(0, handleSuccess, handleError);
account.deposit(-600, handleSuccess, handleError);
account.deposit(600, handleSuccess, handleError);

//
function eachA(array, callback) {
  const newArr = [];
  for (const el of array) {
    newArr.push(callback(el));
  }
  return newArr;
}

console.log(eachA([64, 49, 36, 25, 16], (value) => value * 2)); //[128, 98, 72, 50, 32]
console.log(eachA([64, 49, 36, 25, 16], (value) => value - 10)); //[54, 39, 26, 15, 6]

console.log(
  eachA([64, 49, 36, 25, 16], function (value) {
    return Math.sqrt(value);
  })
); // [8, 7, 6, 5, 4]

//
const usersA = [
  {
    name: "artem",
    age: 30,
  },
];

const resA = eachA(usersA, (user) => {
  return {
    ...user,
    name: user.name.toUpperCase(),
  };
});

console.log(resA); // {name: 'ARTEM', age: 30}
