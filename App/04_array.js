/** 04_Array */

/** => theory block */
const num = [3, 4, 5, 6];
// num.at(1); // 4
// num.pop(); // 6 => num = [3, 4, 5]
// num.push(7); // 5 (возвращает длинну масива) => num = [3, 4, 5, 6, 7]
// num.push(... items) - adds items to the end of the array
// num.fill(1); // [1, 1, 1, 1]
// num.fill(1, 2); // [3, 4, 1, 1]
// num.fill(1, 2, 3); // [3, 4, 1, 6]
// num.join("-"); // 3-4-5-6
// num.shift(); // 3 => num = [4, 5, 6]
// num.unshift(1); // 4 (возвращает длинну масива) => num = [1, 3, 4, 5, 6]
// num.unshift(...items) // - adds items to the beginning of the array
// num.reverse(); // [6, 5, 4, 3]
// num.includes(5); // true
// num.slice(1, 3); // [4, 5] - creates a new array, copying elements from start to end (not including end) into it.
// num.slice(1); // [4, 5, 6]
// num.splice(2, 0, "i"); // num = [3, 4, 'i', 5, 6] – starting at the pos index, removes deleteCount items and inserts items;
// num.splice(2, 1, "i"); // num = [3, 4, 'i', 6]

// ========================= EXAMPLES ===================================
// task_01. Напишите функцию f6, которая эмулирует работу метода push применительно к массиву d6. Т.е. добавляет значение из i-6 как последний элемент в массив d6. Эмуляция, значит, что мы получим результат аналогичный методу push без применения его. Эмуляция заключается в присвоение значения как последнего элемента массива.
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let d6 = ["test", 5, 12];

function f6() {
  let num = document.querySelector(".i-6").value;

  d6[d6.length] = num;
  showArr(".out-6", d6);
}

document.querySelector(".b-6").onclick = f6;

// task_02
// Напишите функцию f7, которая эмулирует метод pop, т.е. удаляет последний элемент массива d7. Эмулировать - получать результат аналогичный pop, но без применения pop. Функция может быть вызвана много раз, при этом каждый раз должен удаляться последний элемент d7.
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let d7 = ["china", "india", "brazil", "japan", "egypt"];

function f7() {
  d7.splice(d7.length - 1);
  showArr(".out-7", d7);
}

document.querySelector(".b-7").onclick = f7;

// task_03
// Напишите функцию f8, которая эмулирует работу метода unshift - добавляем значение из i-8 в начало массива d8.
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let d8 = [2, "4", 12, 67, "hello"];

function f8() {
  let num = document.querySelector(".i-8").value;
  d8.splice(0, 0, num);
  showArr(".out-8", d8);
}

document.querySelector(".b-8").onclick = f8;

// task_04
// Напишите функцию f8, которая эмулирует работу метода shift - на примере массива d9.
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let d9 = [100, 200, 300, 400, 700, 121];

function f9() {
  d9.splice(0, 1);
  showArr(".out-9", d9);
}

document.querySelector(".b-9").onclick = f9;

// task_05
// Напишите функцию f10, которая применяет к массиву d10 метод reverse и выводит полученный массив в out-10.
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let d10 = [3, 14, 15, 92, 6];

function f10() {
  d10.reverse();
  showArr(".out-10", d10);
}

document.querySelector(".b-10").onclick = f10;

// task_06
// Напишите функцию, которая получает число из input i-11, переводит в число, и с помощью метода indexOf проверяет наличие в массиве d11. Функция выводит в out-11 -1 если такого числа нет в массиве, либо его индекс в массиве.
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let d11 = [2, 3, 4, 5, 6, 7];

function f11() {
  let num = +document.querySelector(".i-11").value;
  document.querySelector(".out-11").innerHTML = d11.indexOf(num);
}

document.querySelector(".b-11").onclick = f11;

// task_07
// Напишите функцию f12, которая эмулирует работу метода indexOf - ищет введенное число в массиве d12 (перебором). Если числа нет - выводит -1, если есть - его позицию в массиве.
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let d12 = [6, 62, 60, 70, 1, 5];

function f12() {
  let num = +document.querySelector(".i-12").value;
  let out = document.querySelector(".out-12");
  for (let i = 0; i < d12.length; i++) {
    if (d12[i] === num) {
      out.innerHTML = i;
      break;
    } else {
      out.innerHTML = -1;
    }
  }
}

document.querySelector(".b-12").onclick = f12;

// task_08
// Напишите функцию f13, которая эмулирует работу метода reverse. Т.е. создает новый массив на основе d13 с обратным порядком элементов и выводит в out-13.
// Вывод - по нажатию кнопки b-13
// Вывод в out-13

let d13 = [6, 0, 22, 1, 4, 76];

function f13() {
  let arr = [];
  for (let i = d13.length - 1; i >= 0; i--) {
    arr.push(d13[i]);
  }

  showArr(".out-13", arr);
}

document.querySelector(".b-13").onclick = f13;

// task_09
// Напишите функцию, которая получает i-14, переводит в число, а потом заполняет массив d14 так, что количество элементов равно введенному числу, и каждый элемент равен 1. Т.е. пользователь ввел 5, массив будет [1,1,1,1,1]. Выведите массив в out-14.
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let d14 = [];

function f14() {
  let num = +document.querySelector(".i-14").value;
  let a = 1;
  let k = 0;

  while (k < num) {
    d14.push(a);
    k++;
  }
  showArr(".out-14", d14);
}

document.querySelector(".b-14").onclick = f14;

// task_10
// Напишите функцию f15, которая вначале проверяет, есть ли элемент из i-15 в массиве d15  (переводим в число), а потом - если нет - добавляет его в массив.
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
  let num = +document.querySelector(".i-15").value;

  if (!d15.includes(num)) {
    d15.push(num);
  }
  showArr(".out-15", d15);
}

document.querySelector(".b-15").onclick = f15;

// task_11
// Даны два массива d161 и d162 - используя метод concat - добавьте в массив d16 результат применения concat между массивом d161 и d162.
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let d16 = [];
let d161 = [5, 6, 7, 8, 9];
let d162 = [23, 24, 56, 87];

function f16() {
  d16 = d161.concat(d162);
  showArr(".out-16", d16);
}

document.querySelector(".b-16").onclick = f16;

// task_12
// Напишите функцию f17, которая эмулирует работу метода concat. Функция должна объедиять массивы d171 и d172 и записывать результат в d17. Для эмуляции используйт цикл.
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let d17 = [];
let d171 = ["a", "b", "c", "d"];
let d172 = [1, 2, 3, 4, 5];

function f17() {
  for (let i = 0; i < d171.length; i++) {
    d17.push(d171[i]);
  }
  for (let i = 0; i < d172.length; i++) {
    d17.push(d172[i]);
  }
  showArr(".out-17", d17);
}

document.querySelector(".b-17").onclick = f17;

// task_13
// Напишите функцию f18, которая получает значение из i-18 и проверяет есть ли такое значение в массиве d18 c использованием метода include. Результат применения метода - выводится в .out-18.
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let d18 = ["b", "c", "45", "e", "z", "y"];

function f18() {
  let num = document.querySelector(".i-18").value;
  document.querySelector(".out-18").innerHTML = d18.includes(num);
}

document.querySelector(".b-18").onclick = f18;

// task_14
// Напишите фукнцию f19, которая выводит самую длинную строку maxString из массива d19 в out-19.
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let d19 = [
  "Your",
  "payment",
  "method",
  "will",
  "automatically",
  "be",
  "charged",
  "in",
  "advance",
  "every",
];
let maxString = "";

function f19() {
  for (let i = 0; i < d19.length; i++) {
    if (d19[i].length > maxString.length) {
      maxString = d19[i];
    }
  }
  document.querySelector(".out-19").innerHTML = maxString;
}

document.querySelector(".b-19").onclick = f19;

// task_15
// Напишите функцию f20, которая применяет к массиву d20 метод join с параметрами и соединяет элементы массива в одну строку. Результат выводит в .out-20. Укажите мето так d20.join(''). Обратите внимание  - между апострофами нет пробела!!!.
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let d20 = [4, 5, 6, 7, 8, 9, 10];

function f20() {
  document.querySelector(".out-20").innerHTML = d20.join("");
}

document.querySelector(".b-20").onclick = f20;

// task_16
// При нажатии b-3 выполняете функцию f3. Функция должна вывести в out-3 значение my из массива a3. Возвратите это значение.

function f3() {
  let a3 = [
    [1, 2, 3],
    [3, 4, 5],
    [6, [7, "my"]],
  ];
  document.querySelector(".out-3").innerHTML = a3[2][1][1];
  return a3[2][1][1];
}

// task_17
// При нажатии b-5 выполняете функцию f5. Функция должна вывести в out - 5 четные значения из массива a5. Для перебора используем цикл.

function f5() {
  let out = "";
  let a5 = [
    [1, 2],
    [3, 4],
    [5, 6],
    [21, 34],
    [44, 56],
  ];
  for (let i = 0; i < a5.length; i++) {
    if (a5[i][0] % 2 == 0) out += a5[i][0] + " ";
    if (a5[i][1] % 2 == 0) out += a5[i][1] + " ";
  }
  document.querySelector(".out-5").innerHTML = out;
}

document.querySelector(".b-5").onclick = f5;

// task_18
// При нажатии b-8 выполняете функцию f8. Функция должна вывести в out-8 нечетные значения из массива a8. Как видите, вложенные массивы имеют разную длину, значит, предыдущий вариант уже не работает. Используем цикл. Вывод - через пробел.

function f8() {
  let out = "";
  let a8 = [
    [1, 2, 3, 9],
    [3, 4, 7],
    [5, 6, 8, 32],
    [21, 34, 43],
    [44, 56],
  ];

  for (let i = 0; i < a8.length; i++) {
    for (let k = 0; k < a8[i].length; k++) {
      if (a8[i][k] % 2 != 0) out += a8[i][k] + " ";
    }
  }
  document.querySelector(".out-8").innerHTML = out;
}

document.querySelector(".b-8").onclick = f8;

// task_19
// При нажатии b-11 выполняете функцию f11. Функция должна вывести в out-11 значения из массива a11, причем каждый вложенный массив должен идти в обратном порядке. Вывод через пробел. Т.е. вы должны получить в out-10 строку вида 6 5 4 8 7 13 12 11 10 9. Решаем задачу двумя циклами, без reverse.

let a11 = [
  [4, 5, 6],
  [7, 8],
  [9, 10, 11, 12, 13],
];

function f11() {
  let out = "";

  for (let i = 0; i < a11.length; i++) {
    for (let k = a11[i].length - 1; k >= 0; k--) {
      out += a11[i][k] + " ";
    }
  }
  document.querySelector(".out-11").innerHTML = out;
}

document.querySelector(".b-11").onclick = f11;

// Task 20
// При нажатии b-15 выполняете функцию f15. Функция должна вывести в out-15 длину самого большого вложенного массива в a15.
// т.е ожидаем 6

let a15 = [[], [1, 0], [1, 0, 0, 0], [3, 4, 5, 6, 7, 8], [1, 2]];

function f15() {
  let arMax = [];
  for (let i = 0; i < a15.length; i++) {
    if (a15[i].length > arMax.length) arMax = a15[i];
  }
  document.querySelector(".out-15").innerHTML = arMax.length;
}

document.querySelector(".b-15").onclick = f15;
