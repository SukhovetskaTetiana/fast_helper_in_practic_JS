/** 13_Template Literals */
// Шаблонні літерали - це літерали які обмежені зворотніми апострофами "бек-тіки";

// 13.1 Багаторядкові шаблонні літерали

console.log("string text line 1\n" + "string text line 2"); // це звичайний літерал
/**
 *  "\n" - символ переходу на новий рядок
 *  в консоль виводиться:
 *  string text line 1
 *  string text line 2
 */
console.log(`string text line 1
string text line 2`); // це запис шаблонного літералу
/**
 *  в консоль виводиться:
 *  string text line 1
 *  string text line 2
 */

// 13.2 Інтерполяція

let a = 5;
let b = 10;

//  Вивід в консоль однаковий по двом строкам
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

// 13.3 Шаблони з вкладенням

function isLargeScreen() {
  return false;
}

const isCollapsed = false;

let classes = "header"; // формується певний рядок на базі літералів та виразів
classes += isLargeScreen()
  ? ""
  : isCollapsed
  ? " icon-expander"
  : " icon-collapser";

console.log(classes); // header icon-collapser

// можемо переписати використавши шаблонні літерали

classes = `header${
  isLargeScreen() ? "" : isCollapsed ? " icon-expander" : " icon-collapser"
}`;

console.log(classes); // header icon-collapser

// вираз може бути більш вдосконаленним

classes = `header${
  isLargeScreen() ? "" : `icon - ${isCollapsed ? "expander" : "collapser"}`
}`;

console.log(classes); // header icon-collapser

// 13.4 Теговані шаблони

let person = "Mike";
let age = 28;

function myTag(string, personExp, ageExp) {
  let str0 = string[0]; // 'That '
  let str1 = string[1]; // ' is a '
  let str2 = string[2]; // '.'

  let ageStr;
  if (ageExp > 99) {
    ageStr = "centenarian";
  } else {
    ageStr = "youngster";
  }

  // Ми можемо повернути рядок, побудований з використанням шаблоного літералу
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${person} is a ${age}.`;

console.log(`That ${person} is a ${age}.`); // That Mike is a 28.
console.log(output); // That Mike is a youngster.
