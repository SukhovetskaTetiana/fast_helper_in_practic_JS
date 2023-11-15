/**02_Number */

const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;

console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER); // 9007199254740991;
console.log("Math.pow 53", Math.pow(2, 53) - 1); // 9007199254740991;
console.log("MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER); // -9007199254740991;
console.log("MAX_VALUE", Number.MAX_VALUE); // 1.79769313148623157e+308;
console.log("MIN_VALUE", Number.MIN_VALUE); // 5e-324;
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY); // Infinity;
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY); // -Infinity;
console.log("2 / 0", 2 / 0); // Infinity;
console.log(Number.NaN); // NaN - Not A Number
console.log(typeof NaN); // number;
const weird = 2 / undefined; // true;
console.log(Number.isNaN(weird)); //
console.log(Number.isNaN(num));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(num));

/** Convert to Number:*/
function number() {
  let a = "20";
  let num = Number(a);
  console.log(num); // 20
  console.log(typeof num); // "number"
}

/** Unary operation + */
function unary() {
  let a = "20";
  let num = +a;
  console.log(num); // 20
  console.log(typeof num); // "number"
}

/** converts to an integer */
function parseInt() {
  console.log(parseInt("7")); // 7
  console.log(parseInt("7.5")); // 7
  console.log(parseInt("7nm")); // 7
  console.log(parseInt("nm")); // NaN
}

/** converts to a fractional number */
function parseFloat() {
  console.log(parseFloat("7")); // 7
  console.log(parseFloat("7.125")); // 7.125
  console.log(parseFloat("7nm")); // 7
  console.log(parseFloat("nm")); // NaN
}

/** checks if a value represents a number */
function isNaN() {
  console.log(isNaN(1)); // false
  console.log(isNaN("1")); // false
  console.log(isNaN("1m")); // true
  console.log(isNaN(null)); // false
  console.log(isNaN(undefined)); // true
}
