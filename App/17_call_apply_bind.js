/** 17_call_apply_bind  - дають змогу задати явно контекст*/

/**
 * если разово использовать привязку к функции то можно исмользовать call() или apply(). Если же в коде необходимо постоянно привязываться к функции то используем bind();
 */

/**
 * call
 *  => context - это объект this - завжди динамічний об'ект; аргументы передаются списком;
[arg1, arg2…] - необязательные параметры. Необязательные параметры берутся в квадратные скобки. В данном случае квадратные скобки это не массив
 */

// function.call(context, arg1, arg2, …);

//Example SoftServe - 1
const user = {
  firstName: "Tetiava",
  lastName: "Berzek",
  getFullName: function () {
    // console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

// console.log(user.getFullName()); // Tetiana Berzek => work correct

function getUserInfo(position, expirience) {
  console.log(this.getFullName());
  console.log(
    `${this.getFullName()} details: ${position}, ${expirience} years`
  );
}

// getUserInfo(); // НЕ працює, бо немає прив'язки до об'єкту - немає прив'язки до контексту

// call()
getUserInfo.call(user, "web dev", 3); // work correct

//Example ITGid - 1

const b1 = document.querySelector(".b-1");
const b2 = document.querySelector(".b-2");

function test() {
  console.log(this);
  this.style.background = "orange";
}

b2.onclick = function () {
  test.call(b1, "green", 5555);
};

test.call(b1); // сразу вызвал функцию - this = b1;

// =========================Task#5_SoftServe=====================
/**
 * We have the product() function, you can see it on the snapshot below. This product() function finds the product of its arguments and also uses this object for the initial value of the product.

Please, create a new function getProduct()  that, no matter how it is called, will be always bound to a particular this value. getProduct() should be created from the original product() function and work with the same logic, but should pass two additional arguments – 2 and 3 – to the original function, every time getProduct() is called.

Object this for getProduct() function you should also define by yourself. Look at snapshot for clues what it should be.
 */

const product = function () {
  return [].reduce.call(
    arguments,
    function (res, elem) {
      return res * elem;
    },
    this.product
  );
};

const contextObj = {
  product: 10,
};
const getProduct = product.bind(contextObj, 2, 3);
console.log(getProduct(4, 5)); //arg_from_obj*2*3*4*5 = 1200

// як ще можно інтерпретувати ідею цієї задачі
function sum(a, b) {
  return a + b;
}
let addTen = sum.bind(null, 10); // создається функція яка буде завжди прибавляти 10, тобто а = 10. І при визові функцію ми передаємо значення b. null - це контекст в bind;
addTen(2); // 12
addTen(22); // 32

/**=================================================================
 * apply
 *  => подобно call. Отличается тем, что если есть ситуация, что не ясно сколько будет параметров, то параметры/аргументы передаются массивом.
 */

// function.applyl(context, [args]);

//Example SoftServe - 2
getUserInfo.apply(user, ["QC", 2]); // work correct

// Example ITGid - 2

// const b1 = document.querySelector('.b-1');
// const b2 = document.querySelector('.b-2');

// function test(color, num) {
//   console.log(this);
//   console.log(num)
//   this.style.background = color;
// }

// b2.onclick = function () {
//   test.apply(b1, ['green', 555])
// }

// ===============Task#4_SoftServe===================
/**
 * Implement the getMin(arr) function, which takes an array of numbers arr and returns the smallest number of the array. To solve the problem, you must use one of the methods to specify the context of this. It is forbidden to use any cycles.
 */

function getMin(arr) {
  let min = Math.min.apply(null, arr);
  return min;
}
let arrNum = [12, 6, 22, 13, 7];
console.log(getMin(arrNum));

/**==================================================================
 * bind
 *  => позволяет создавать экземпляры функций с уже привязаннм контекстом. Параметры передаются в виде списка (аналогично call());
 */

// function.bind(context, arg1, arg2, …);

//Example SoftServe - 3
const userData = getUserInfo.bind(user, "web dev", 3);
userData(); // => work correct

// Example ITGid - 3
// const b1 = document.querySelector('.b-1');
// const b2 = document.querySelector('.b-2');

// function test(color, num) {
//   console.log(this);
//   console.log(num)
//   this.style.background = color;
// }

// let a = test.bind(b1, 'orange', 555);
// let b = test.bind(b2, 'green', 8888);

// b2.onclick = a;
// b2.onclick = b;
