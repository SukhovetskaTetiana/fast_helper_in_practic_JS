/** All about String */

/** 01. theory block */
const nameFirst = "Tetiana";
console.log(nameFirst.length); // 7;
// console.log(nameFirst.charAt(-2)); // a;
console.log(nameFirst.toUpperCase()); // TETIANA;
console.log(nameFirst.toLowerCase()); // tetiana;
console.log(nameFirst.charAt(2)); // t;
console.log(nameFirst.indexOf("!")); // -1;
console.log(nameFirst.lastIndexOf("a")); // 6;
console.log(nameFirst.includes("ana")); // true;
console.log(nameFirst.toLowerCase().startsWith("tet")); // true;
console.log(nameFirst.startsWith("Tet")); // true;
console.log(nameFirst.endsWith("na!")); // false;
console.log(nameFirst.repeat(3)); // TetianaTetianaTetiana;
console.log(nameFirst.slice(3, 6)); // ian;
console.log(nameFirst.slice(-4, -1)); // ian;
console.log(nameFirst.slice(3)); // iana;
console.log(nameFirst.codePointAt(0)); // T - 84;
console.log(nameFirst.codePointAt(2)); //t - 116;
console.log(String.fromCodePoint(84)); // T;
console.log(String.fromCodePoint(116)); // t;
console.log(nameFirst.split("")); // ['T', 'e', 't', 'i', 'a', 'n', 'a'];

/**replace() */
console.log(nameFirst.replace("T", "N")); // Netiana;
console.log(nameFirst.replace("a", "A")); // TetiAna - заменяет только первое совпадение;
console.log(nameFirst.replace(/a/g, "A")); // TetiAnA - заменяет все совпадения;

let str = "Tetiana Sukhovetska";

// поменять местами имя и фамилию
console.log(str.replace(/(\w+) (\w+)/i, "$2 $1")); // Sukhovetska Tetiana
console.log(
  str.replace(/(\w+) (\w+)/, (match, name, surname) => `${surname} ${name}`)
); // Sukhovetska Tetiana

/** trim() */
const string = "     password      ";
console.log(string.trim()); // "password";
// console.log(string.trimLeft());
// console.log(string.trimRight());

/** можно перебрать строку посимвольно, используя for..of */
for (let char of "Tetiana") {
  console.log(char); // T,e,t,i,a,n,a
}

/** 02. function logPerson(){} */
function logPerson(s, name, age) {
  if (age < 0) {
    age = "Еще не родился";
  }
  return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}

const personName = "Tetiana";
const personName2 = "Khrystyna";
const personAge = 23;
const personAge2 = -10;

const out_1 = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
const out_2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

console.log(out_1);
console.log(out_2);

/**03. function RemoveExclamationMarks() which removes all exclamation marks from a given string - прибирає всі знаки оклику */
function removeExclamationMarks(s) {
  return s.split("!").join("");
}

/**04. function reverseLetter() - reverse string and omit all non-alphabetic characters. For str = "krishan", the output should be "nahsirk". For str = "ultr53o?n", the output should be "nortlu" - переворачиваем строку и опускаем все неалфавитные символы.
 */

const reverseLetter = (str) =>
  str
    .replaceAll(/[^a-zа-яё]/gi, "")
    .split("")
    // .filter((x) => isNaN(x))
    .reverse()
    .join("");

console.log(reverseLetter("anaytet")); // 'tetyana'
console.log(reverseLetter("any44tsyr?/hk")); // 'khrystyna'

/**05. Regular Expressions */

// const str = '1. Как удалить пробелы из строки с помощью JavaScript?';
// str = str.replace(/\s/g, '');
// const str = '2. Как  удалить  двойные  пробелы  из  строки  с  помощью  JavaScript?';
// str = str.replace(/\s+/g, ' ');
// const str = '3. Как удалить все буквы из строки с помощью JavaScript?';
// str = str.replace(/[a-zа-яё]/gi, '');
// const str = '4. Как удалить всё, кроме букв с помощью JavaScript?';
// str = str.replace(/[^a-zа-яё]/gi, '');
// const str = '5. Как удалить всё, кроме букв и пробелов с помощью JavaScript?';
// str = str.replace(/[^a-zа-яё\s]/gi, '');
// const str = '6. Как удалить цифры из строки с помощью JavaScript?';
// str = str.replace(/[0-9]/g, '');
// const str = '7. Как удалить все, кроме цифр из строки с помощью JavaScript?';
// str = str.replace(/[^0-9]/g, '');
// const str = '8. Как удалить всё, кроме 0123456789, . и , из строки с помощью JavaScript?';
// str = str.replace(/[^0-9,.]/g, ' ');
// const str = '9. Как удалить всё, кроме цифр, букв и пробелов из строки с помощью JavaScript?';
// str = str.replace(/[^a-zа-яё0-9\s]/gi, ' ');
// const str = '10. Как удалить 😀😃😄😁😆😅😂🤣😇из строки с помощью JavaScript?';
// str = str.replace(
//   /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83[\uDD10-\uDDFF])/g,
//   ''
// );

/** 05_00  «символ перевода строки» */
let guestList = "Guests:\n * John\n * Pete\n * Mary";

console.log(guestList); // список гостей, состоящий из нескольких строк

/** 05_01 «символа экранирования»*/
console.log("I'm the Walrus!"); // I'm the Walrus!

// next variant

// 05_1. Метод match() возвращает получившиеся совпадения при сопоставлении строки с регулярным выражением. Возвращаемое значение array. Объект Array, содержащий результаты сопоставления, или null, если ничего не было сопоставлено.
function reverseLetters(str) {
  return str.match(/[a-z]/gi).reverse().join("");
}

console.log(reverseLetters("anaytet")); // 'tetyana'
console.log(reverseLetters("any44tsyr?/hk")); // 'khrystyna'

// 05_2. Simple, remove the spaces from the string, then return the resultant string.
const noSpace = (x) => x.match(/[^\s]/gi).join("");

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); // '8j8mBliB8gimjB8B8jlB'
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")); //'88Bifk8hB8BB8BBBB888chl8BhBfd'
console.log(noSpace("8aaaaa dddd r     ")); // '8aaaaaddddr'

//next variant
function noSpaces(x) {
  return x.split(" ").join("");
}

/** 05_3. Write a function that will check if two given characters are the same case - которая будет проверять, совпадают ли два заданных символа.
If either of the characters is not a letter, return -1 / Если какой-либо из символов не является буквой, верните -1; 
If both characters are the same case, return 1 / Если оба символа имеют одинаковый регистр, верните 1;
If both characters are letters, but not the same case, return 0 / Если оба символа являются буквами, но не в одном регистре, верните 0.
Examples:
'a' and 'g' returns 1
'A' and 'C' returns 1
'b' and 'G' returns 0
'B' and 'g' returns 0
'0' and '?' returns -1 */

function sameCase(a, b) {
  if (a.match(/[a-z]/) && b.match(/[a-z]/)) {
    return 1;
  }
  if (a.match(/[A-Z]/) && b.match(/[A-Z]/)) {
    return 1;
  }
  if (b.match(/[a-z]/) && a.match(/[A-Z]/)) {
    return 0;
  }
  if (a.match(/[a-z]/) && b.match(/[A-Z]/)) {
    return 0;
  }
  return -1;
}

console.log(sameCase("a", "g")); // 1
console.log(sameCase("A", "C")); // 1
console.log(sameCase("b", "G")); // 0
console.log(sameCase("B", "g")); // 0
console.log(sameCase("0", "?")); // -1

/** 05_4. Return the number (count) of vowels in the given string (Возвращает количество гласных в заданной строке).
We will consider a, e, i, o, u as vowels for this Kata (but not y) (Гласными для этой Ката мы будем считать a, e, i, o, u (но не y)).
The input string will only consist of lower case letters and/or spaces (Входная строка будет состоять только из строчных букв и/или пробелов). */

const getCount = (str) => str.replace(/[^aeiou]/g, "").length;
console.log(getCount("abracadabra")); // 5

//next variant
function getCounts(str) {
  return str.split("").filter((item) => "aeiou".includes(item)).length;
}
console.log(getCounts("abracadabra")); // 5

//----------------------------------------------------------

// const ds = 'Добрий День та Добрий Вечір';
// const ns = ds.replace(/^([^\s]+)(\s+)([^\s]+)/, '$3$2$1');
// alert(ns);

// let re = /(\w+)\s(\w+)/;
// let name = 'Jane Doe';
// let lastFirst = name.replace(re, '$2, $1');
// Doe, Jane

//Регулярний вираз /(\w+)\s(\w+)/ відповідає одному або декільком символам слова, пробілу, а потім одному або декільком символам слова. Іншими словами, він відповідає будь-якому рядку, який містить слово, пробіл та інше слово.

// Регулярний вираз містить дві групи захоплення.
// Перша група захоплення фіксує перше слово, а друга – друге слово після пробілу.

// У newSubstr ми використовуємо $1 для посилання на першу групу захоплення та $2 для посилання на другу. Щоб поміняти ім’я та прізвище місцями, ми ставимо спочатку другий збіг ($2), а потім перший ($1).
