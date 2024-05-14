/* Promise
Мікро процеси мають БІЛЬШИЙ пріорітет
1. Promise
2. Observer
3. Handlers


Макро процеси мають МЕНЬШИЙ пріорітет
setTimeout
setInterval
setImmediate
requestAnimationFrame
----------------------------------------------------------------------------
const promise = new Promise(); // екземпляр класу Promise

! Promise.resolve(value) - статичний метод класу Promise - повертає об'єкт Promise, виконаний з переданим значенням.

! Promise.reject(value) - статичний метод класу Promise - повертає об'єкт Promise, який був відхилений по вказаній причині.

! Promice.race([promise1, promise2, promise3])  -> to wait for the first fulfilled promise 

! Promise.all([promise1, promise2, promise3]) to wait for all promises

! Promise.allSettled([promise1, promise2, promise3]) повертає проміс, який виконується, коли всі отримані проміси завершені (виконані або відхилені), що містить масив результатів виконання отриманих промісів.

const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
const promises = [promise1, promise2];

TODO Promise.allSettled(promises).then((results) => results.forEach((result) => console.log(result.status)));
Expected output:
"fulfilled"
"rejected"

const promise = new Promise(executor: (resolve, reject){ }) // callback function called EXECUTOR
executor приймає 2 аргументи : resolve, reject
! resolve, reject - НЕ МЕТОДИ промісу, а параметри executor

------------------------------------------------------------------------------
promise methods:
.then
.catch
.finally

-----------------------------------------------------------------------------
Проміс може бути у трьох станах:

Очікування (pending) - початковий стан під час створення промісу.
Виконано (fulfilled) - операція виконана успішно з будь-яким результатом.
Відхилено (rejected) - операція відхилена з помилкою.

На момент створення проміс знаходиться в очікуванні (pending), після чого може завершитися успішно (fulfilled), повернувши результат (значення), або з помилкою (rejected), повернувши причину. Коли проміс переходить у стан fulfilled або rejected - це назавжди.

Коли проміс виконаний або відхилений -> завершений (settled), термін, який описує те, що проміс перебуває в будь-якому стані, крім очікування.

! settled - це лише форма мови, яка не є справжнім станом промісу

ВЛАСТИВОСТІ promise:
!Promise.length => Значення властивості завжди дорівнює 1 (кількість аргументів конструктора).

Відмінності промісу і callback-функції:

Колбеки - це функції, обіцянки - це об'єкти.
Колбеки передаються як аргументи з зовнішнього коду у внутрішній, а обіцянки повертаються з внутрішнього коду у зовнішній.
Колбеки обробляють успішне або неуспішне завершення операції, обіцянки нічого не обробляють.
Колбеки можуть обробляти декілька подій, обіцянки пов'язані тільки з однією подією.

 * Створення 'обіцянок' - Promise
 * - Клас Promise

 * -  resolve(value) - функція для виклику у разі успішної операції.    Переданий їй аргумент буде значенням виконаного промісу.

 * -  reject(error) - функція для виклику у разі помилки. Переданий їй аргумент буде значенням відхиленого промісу.

 * - Promise.prototype.then(onResolve, onReject)
 */

//Проміс створюється як екземпляр класу Promise, який приймає функцію (executor) як аргумент і відразу викликає її, ще до створення і повернення промісу.

const promise = new Promise((resolve, reject) => {});
console.log(promise);
//Promise {<pending>}
//[[Prototype]]: Promise
//[[PromiseState]]: "pending"
//[[PromiseResult]]: undefined

//==============Example 1 - ITGid==========================================
function f2() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY); //задаем ключ доступа

  const p = new Promise((resolve, reject) => {
    // создаем промис
    fetch(URL + "/api/27/random/random-string", {
      headers: requestHeaders,
    })
      .then((response) => {
        // когда получаем ответ
        if (response.ok) resolve(response.json());
        else reject(response);
      })
      .catch((error) => reject(error)); // если ответ не получен
  });
  p.then(resolveF2, rejectError); // работаем с ответом
}

function resolveF2(data) {
  // функция resolve
  console.log(data);
  document.querySelector(".out-2").textContent = data["random-string"];
}

function rejectError(err) {
  // функция reject
  console.log("Houston, We Have a Problem!");
  console.log(err);
}

document.querySelector(".b-2").onclick = f2;

//==============Example 2 - ITGid==========================================
/**
 * делаем запрос - получаем ответ. Ответ записываем в переменную и ставим данные в следующий запрос - получаем ответ
 */

let employeeEmail; // задаем переменную

function f4() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  fetch(URL + "/api/27/employee/random-email", {
    headers: requestHeaders,
  })
    .then((response) => response.json())
    .then((data) => {
      employeeEmail = data.email; // записываем полученные данные
      return fetch(URL + `/api/27/employee/email?email=${employeeEmail}`, {
        headers: requestHeaders,
      }); //делаем следующий запрос
    })
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".out-4").textContent = data.result.name;
    });
}

//==============Example 3 - ITGid==========================================
// проверка response на ошибки

fetch(URL + "/api/27/gow/random-world", {
  method: "POST",
  headers: requestHeaders,
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      const message = `Error: ${response.status}`;
      throw new Error(message);
    }
  })
  .then((data) => {
    randomWorld = data.world;
    return fetch(URL + `/api/27/gow/world/${randomWorld}`, {
      headers: requestHeaders,
    });
  })
  .then((response) => {
    // опять пишем блок проверки после следующего ответа от сервера
    if (response.ok) {
      return response.json();
    } else {
      const message = `Error: ${response.status}`;
      throw new Error(message); // ошибки отправляем к одному и тому-же .catch(error)
    }
  })
  .then((data) => {
    document.querySelector(".out-5").textContent = data.world.governor;
  })
  .catch((error) => {
    // пишем в конце кода функции
    console.log(error);
  });

//==============Example 4 - ITGid==========================================
// Promise.all

function f7() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  const promise_1 = new Promise((resolve) => {
    fetch(URL + "/api/27/random/random-number", {
      headers: requestHeaders,
    }).then((response) => resolve(response.json()));
  });

  const promise_2 = new Promise((resolve) => {
    fetch(URL + "/api/27/random/random-string", {
      headers: requestHeaders,
    }).then((response) => resolve(response.json()));
  });

  Promise.all([promise_1, promise_2]).then((data) => {
    console.log(data); // в data заходят response от промиссов - массив объектов
    document.querySelector(".out-71").textContent = data[0]["random-number"];
    document.querySelector(".out-72").innerHTML = data[1]["random-string"];
  });
}

//==============Example 5 - ITGid==========================================
// Promise.all - выводим картинки - СПОСОБ 1

Promise.all([promise_1, promise_2]).then((data) => {
  console.log(data);
  document.querySelector(".out-8").innerHTML = ""; // очищаем место вывода
  for (let item of data) {
    // пройдем по массиву промисов
    let img = document.createElement("img"); // создаем место под картинку

    img.alt = item.result.race;
    img.src = `${URL}${item.result.image}`;

    document.querySelector(".out-8").appendChild(img);
  }
});

//==============Example 6 - ITGid==========================================
// Promise.all - выводим картинки - СПОСОБ 2

Promise.all([promise_1, promise_2]).then((data) => {
  console.log(data);
  let out = "";
  document.querySelector(".out-8").innerHTML = "";
  for (let item of data) {
    let img = document.createElement("img");

    out += `<img src= "${URL}${item.result.image}" alt = '${item.result.race}' >`;
  }
  document.querySelector(".out-8").innerHTML = out;
});

//----- CHAINING --------------------------------
/*
 * Ланцюжки промісів  (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()

 * На практиці в методі then() обробляють тільки успішне виконання промісу, а помилку його виконання у спеціальному методі catch() для «відловлювання» помилок.

 promise.catch(error => {
  /* Promise rejected
});

 promise
  .then(result => {
    console.log('resolve', result);
  })
  .catch(error => {
    console.log('reject', error);
  });
 */

const fullfilled = true;
const promiseD = new Promise((resolve, reject) => {
  if (fullfilled) {
    resolve("fullfilled");
  }
  reject("fullfilled false");
});

/* then return promise
   then - це виклик функції всередині
   then повертає також проміс і тому до then можемо чейнити ще один then
   якщо з першого then нічого не повертаємо - наступний then  - undefined

   then повертає або "good", або "bad",  і так далі по ланцюжку
*/

promiseD
  .then((result) => {
    console.log(result); // fullfilled
  })
  .then((abstractValue) => {
    console.log(abstractValue); // undefined
  });

//   ----------------------------------------------------------------

promiseD
  .then((result) => {
    console.log(result); // fullfilled
    return `Hello, world!`;
  })
  .then((abstractValue) => {
    console.log(abstractValue); // `Hello, world!`
  });

// ----------------------------------------------------------------

promiseD
  .then((result) => {
    console.log(result); // fullfilled
    return `Hello, world!`;
  })
  .then((abstractValue) => {
    console.log(abstractValue); // `Hello, world!`
  })
  .then((nextAbstractValue) => {
    console.log(nextAbstractValue); // undefined
  });

// ----------------------------------------------------------------
/* then повертає або "good", або "bad",  і так далі по ланцюжку */

promiseD
  .then(
    (result) => {
      console.log(result); // fullfilled
      return `Hello, world!`;
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (abstractValue) => {
      console.log(abstractValue); // `Hello, world!`
    },
    (err) => console.log(err)
  )
  .then(
    (nextAbstractValue) => {
      console.log(nextAbstractValue); // undefined
    },
    (err) => console.log(err)
  );

// ----------------------------------------------------------------
/* then повертає або "good", або "bad",  і так далі по ланцюжку */

const fullfilledPlus = true;
const promiseF = new Promise((resolve, reject) => {
  if (fullfilledPlus) {
    resolve("fullfilled");
  }
  reject("fullfilled false");
});

promiseF
  .then(onResolved, onRegected)
  .then(
    (firstAbstractValue) => {
      console.log(firstAbstractValue); // undefined
      return `Hello, world!`;
    },
    (err) => {
      console.log(err);
    }
  )
  .then(
    (abstractValue) => {
      console.log(abstractValue); // `Hello, world!`
    },
    (err) => console.log(err)
  )
  .then(
    (nextAbstractValue) => {
      console.log(nextAbstractValue); // undefined
    },
    (err) => console.log(err)
  );

function onResolved(result) {
  console.log("onSuccess call inside promise.then()"); // onSuccess call inside promise.then()
  console.log(`✅ ${result}`); // ✅ fullfilled
}
function onRegected(err) {
  console.log("onErr call inside promise.then()");
  console.log(`❌ ${err}`);
}

// ------------------------------------------------------------------

/* щоб не робити такий довгий ланцюжок, де в кожному then є і "добре", і "погано", в then передаємо лише resolve - успішне виконання, без оброблювання помилок - error. АЛЕ в кінці ланцюжка промісів then ставимо catch, який ловитиме наші помилки і опрацьовуватиме їх.
Якщо проміс на початку відхилений - rejected, всі послідуючі then не виконаються, а дія перейде в catch, щоб опрацювати помилку.
Де-небудь в ланцюжку помилка - все зламалось далі, наступні нижче then не виконуються, і вся дыя перейшла в catch(error=>{}) */

const fullfilledA = true;
const promiseK = new Promise((resolve, reject) => {
  if (fullfilledA) {
    resolve("fullfilled");
  }
  reject("fullfilled false");
});

promiseK
  .then(onLuck)
  .then((firstAbstractValue) => {
    console.log(firstAbstractValue); // undefined
    return `Hello, world!`;
  })
  .then((abstractValue) => {
    console.log(abstractValue); // `Hello, world!`

    throw new Error("error in third then");
  })
  .then((nextAbstractValue) => {
    console.log(nextAbstractValue); // doesn`t work because under Error
  })
  .catch((err) => console.log(err)); //Error: error in third then at 51-promise.js:278:11

function onLuck(result) {
  console.log("onSuccess call inside promise.then()"); // onSuccess call inside promise.then()
  console.log(`✅ ${result}`); // ✅ fullfilled
}

function onFiasco(err) {
  console.log("onErr call inside promise.then()");
  console.log(`❌ ${err}`);
}

/* .finally(() => console.log('Я буду виконаний у будь-якому випадку')); */

// Цей метод може бути корисним, якщо необхідно виконати код після того, як обіцянка буде дозволена (fulfilled або rejected), незалежно від результату. Дозволяє уникнути дублювання коду в обробниках then() і catch(). Наприклад, зняти Loader
// В finally НЕМАЄ АРГУМЕНТІВ/ПАРАМЕТРІВ, так як наперед не знаємо чи успішне виконання, чи ні

// Change value of isSuccess variable to call resolve or reject
const isProsperity = true;

const promiseG = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isProsperity) {
      resolve("Success! Value passed to resolve function");
    } else {
      reject("Error! Error passed to reject function");
    }
  }, 2000);
});

promiseG
  .then((result) => console.log(result)) // "Success! Value passed to resolve function"
  .catch((error) => console.log(error)) // "Error! Error passed to reject function"
  .finally(() => console.log("Promise settled")); // "Promise settled"

//   ----------------------------------------------------------------

const promiseH = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5);
  }, 2000);
});

promiseH
  .then((value) => {
    console.log(value); // 5
    return value * 2;
  })
  .then((value) => {
    console.log(value); // 10
    return value * 3;
  })
  .then((value) => {
    console.log(value); // 30
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Final task"); // Final task
  });

//TODO ----------------------------------------------------------

const family = [
  { member: "Mom", id: 111, coffee: "Latte" },
  { member: "Dad", id: 222, coffee: "Espresso" },
  { member: "Son", id: 333, coffee: "Capuchino" },
];

function getFamilyMember(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const member = family.find((data) => data.id === id);
      if (member) {
        resolve(member);
      }
      reject(Error(`Member didn't find`));
    }, 5000);
  });
}

function getCoffee(member) {
  const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot");
  return coffeePromise
    .then((result) => result.json())
    .then((list) => {
      const coffee = list.find((drink) => drink.title === member.coffee);
      console.log(coffee);
      return {
        ...member,
        // coffee: coffee,
        coffee,
      };
    })
    .catch((err) => Error(err));
}

getFamilyMember(111); //{member: 'Mom', id: 111, coffee: 'Latte'}
//getFamilyMember(121); // Error: Member didn't find

getFamilyMember(222)
  .then((result) => {
    console.log(result);
    // const test = getCoffee(result); // promise: pending
    getCoffee(result);
  })
  .then((newMember) => console.log("newMember: ", newMember))
  .catch((err) => console.log(err));

// list:  (20) [{…}, {…}, {…}, {…}, {…}, {…}, ...]
//{title: 'Espresso', description: 'An espresso shot can be served solo or used as the…f most coffee drinks, like lattes and macchiatos.', ingredients: Array(1), image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg', id: 5}

// {member: 'Dad', id: 222, coffee: {description: "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos."
// id: 5
// image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg"
// ingredients: ['1oz Espresso']
// title: "Espresso"}}

// TODO----------------------------------------------------------------

const makeCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your coffee is ready`);
    }, 7000);
  });
};
const makeToast = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Your toast is ready`);
    }, 7500);
  });
};

const coffeePromise = makeCoffee();
const toastPromise = makeToast();

// coffeePromise.then(result => console.log(result)); //Your coffee is ready
// toastPromise.then(result => console.log(result)); // Your toast is ready

//! Promise.all([promise1, promise2, promise3]);

// nest variant to use Promise.all()

//Promise.all([coffeePromise, toastPromise]).then(result => console.log(result)); // (2) ['Your coffee is ready', 'Your toast is ready']
Promise.all([coffeePromise, toastPromise]).then(
  ([coffeePromise, toastPromise]) => console.log(coffeePromise, toastPromise)
); // Your coffee is ready Your toast is ready

//TODO -------------------------------------------------------------------------

const fetchBeers = fetch("https://api.sampleapis.com/beers/ale");
const fetchWines = fetch("https://api.sampleapis.com/wines/reds");

//Promise.all([fetchBeers, fetchWines]).then(data => console.log(data)); //[Response, Response]

// Promise.all([fetchBeers, fetchWines])
//   .then(data => {
//     return Promise.all(data.map(res => res.json()));
//   })
//   .then(finalData => console.log(finalData)); //[Array(180), Array(718)]

// Promise.all([fetchBeers, fetchWines])
//   .then(data => Promise.all(data.map(res => res.json())))
//   .then(finalData => console.log(finalData)) //[Array(180), Array(718)]
//   .catch(err => console.error(Error(`Doesn't find information for you`))); //Error: Doesn't find information for you

//todo ---- EXAMPLE --------------------------------
const promiseL = new Promise((resolve, reject) => {
  resolve("Hello, world"); // => передаємо все що завгодно, ex: {key: 'hello, world'}
});

console.log(promiseL);
// Promise {<fulfilled>: 'Hello, world'}
//[[Prototype]]: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: "Hello, world"

// console.log(promiseL[[PromiseResult]]); => не можемо звернутися
// використовуємо then
promiseL.then((response) => console.log(response)); // => "Hello, world", ex: {key: 'hello, world'}

// then приймає також, окрім response,  error; але наразi так не пишуть - використовують .catch()
/* promiseL.then((response, error) => console.log(response, error)); */ // Hello, world  undefined

/* icнують декілька конструкцій:
.then().then().then().catch().finally(); - стандарт
.then().catch().then().catch().then().catch().finally(); => щоб опрацювати локальні помилки: 
*/
const promiseM = new Promise((resolve, reject) => {
  // resolve({ key: 'hello, world' });
  resolve(null);
});

promiseM
  .then((response) => Object.keys(response))
  .catch((err) => {
    console.log("catch1: ", err); //catch1:  TypeError: Cannot convert undefined or null to object => if null
    return []; // опрацьовуєм, щоб код спрацював далі в then
  })
  .then((response) => {
    console.log("response2: ", response); // ['key'] => if not null, or get undefined if null, or get [] if return [] in .catch();
    return response.map((item) => `items ${item}`);
  }) // response2:  undefined
  .catch((err) => console.log("error2: ", err))
  .then((response) => console.log("response3: ", response)) // response3:  ['items key'] => if not null, or get undefined if null, or get [] if return [] in .catch();
  .catch((err) => console.log("error3: ", err));

//  todo ---------------------------------------------------------------

Promise.resolve({ name: "Helen" }) // /Promise {<fulfilled>: {…}}
  .then((response) => console.log(response)) // {name: 'Helen'}
  .catch((err) => console.log(err));

// ------------------------------------------------------------

Promise.resolve({ name: "Helen" }) // /Promise {<fulfilled>: {…}}
  .then((response) => {
    console.log(response); // {name: 'Helen'}
    return Object.keys(response);
  })
  .then((response) => console.log(response)) // ['name']
  .catch((err) => console.log(err));

// ------------------------------------------------------------

Promise.resolve() // /Promise {<fulfilled>: {…}}
  .then((response) => {
    console.log(response); // undefined
    return Object.keys(response);
  })
  .then((response) => console.log(response)) // не виконається
  .catch((err) => console.error("err: ", err)); // err: TypeError: Cannot convert undefined or null to object at Function.keys

//------------------------------------------------------------

Promise.reject("Error")
  .then((response) => console.log(response))
  .catch((err) => console.log(err)) // 'Error'
  .finally((resp, err) => console.log("finally: ", resp, err)); // finally: undefined undefined

//------------------------------------------------
Promise.all([
  Promise.resolve({ name: "Helen" }),
  Promise.resolve({ name: "John" }),
]).then(
  (response) => console.log(response) //  [{…}, {…}]
);
//! Promise.all------------------------------------------------
Promise.all([
  Promise.resolve({ name: "Helen" }),
  Promise.reject("Error"),
  Promise.resolve({ name: "John" }),
])
  .then(
    (response) => console.log(response) // нічого, бо не важливі інші, якщо є помилка
  )
  .catch((err) => console.error(err)); //Error

//! Promise.allSettled ------------------------------------------------
Promise.allSettled([
  Promise.resolve({ name: "Helen" }),
  Promise.reject("Error"),
  Promise.resolve({ name: "John" }),
])
  .then(
    (response) => console.log(response) // [{…}, {…}, {…}] => [{ status: 'fulfilled', value: {name: 'Helen'}}, {{status: 'rejected', reason: 'Error'}}, {status: 'fulfilled', value: { name: 'John' }}]
  )
  .catch((err) => console.error(err)); //Error

//TODO ------------------------------------------------------------------------
//Write a script that, at the time of submitting the form, calls the createPromise(position, delay) function as many times as entered in the amount field. During each call, pass it the number of the position being created and the delay, taking into account the first delay entered by the user and the step.
// Add code to the createPromise function so that it returns a single promise that is fulfilled or rejected due to a time delay. The value of the promise must be an object in which there will be the position and delay properties with the values ​​of the parameters of the same name. Use the function's initial code to choose what to do with the promise - perform or reject.
document.body.style.backgroundColor = "#f7eff4";
const form = document.querySelector("form.form");
const options = {
  position: "center-bottom",
  distance: "15px",
  borderRadius: "15px",
  timeout: 10000,
  clickToClose: true,
  cssAnimationStyle: "from-right",
};

form.addEventListener("click", onPromiseCreate);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function onPromiseCreate(e) {
  e.preventDefault();
  const { delay, step, amount } = e.currentTarget.elements;
  let inputDelay = Number(delay.value);
  let inputStep = Number(step.value);
  let inputAmount = Number(amount.value);

  for (let i = 1; i <= inputAmount; i += 1) {
    inputDelay += inputStep;

    createPromise(i, inputDelay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`, options);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`, options);
      });
    e.currentTarget.reset();
  }
}
