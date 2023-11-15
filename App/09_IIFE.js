/**Immediately Invoked Function Expression (IIFE) - це JavaScript функція яка виконується одразу при її оголошенні*/

// приклад 1
(function () {
  console.log("function was called");
})(); // 'function was called'

// приклад 2 - можемо давати ім'я IIFE-function
(named = function () {
  console.log("function was called");
})(); // 'function was called'

// приклад 3 - можемо використовувати IIFE із параметрами
(named = function (value = 5) {
  console.log("named function was called with value" + value);
})(); // 'named function was called with value 5'

named(10); // 'named function was called with value 10'

// приклад 4 - область видимості block
let y = 5;
{
  console.log("inside block"); // 'inside block'
  let y = 10;
  console.log(y); // 10
}

console.log("outside block"); // 'outside block'
console.log(y); // 5
