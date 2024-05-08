/** 03_Boolean */

/** Boolean conversion */
function boolean() {
  let a = "1";
  let bln = Boolean(a);
  console.log(bln); // true
  console.log(typeof bln); // "boolean"
}

/** Double Boolean NOT !! */
function doubleBoolean() {
  let a = "1";
  let bln = !!a;
  console.log(bln); // true
  console.log(typeof bln); // "boolean"
}

function printOddNumbers(num) {
  for (let i = 1; i <= num; i += 2) {
    console.log(i);
  }
}

printOddNumbers(5);
