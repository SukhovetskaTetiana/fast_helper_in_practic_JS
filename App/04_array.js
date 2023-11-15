/** 04_Array */

/** 01. theory block */
// Arrays provide many methods:
// • push(... items) - adds items to the end of the array
// • pop() - removes the element at the end of the array and returns it.
// • shift() - removes the element at the beginning of the array and returns it.
// • unshift(... items) - adds items to the beginning of the array.
// • slice(start, end) – creates a new array, copying elements from start to end (not including end) into it.
// • splice(pos, deleteCount, ...items) – starting at the pos index, removes deleteCount items and
// inserts items.
// • concat(...items) – returns a new array: copies all members of the current array and adds items to
// it.
// • forEach(func) – calls func for each element (enumeration)
// • map() – creates a new array with the results of calling a function for every array element.

// Consider adding an element to the end of an array by the push() method.
// const cities = ["Rome", "Lviv", "Warsaw"];
// cities.push("Kyiv");
// console.log(cities); // ["Rome", "Lviv", "Warsaw", "Kyiv"]

// Consider deleting the first element of the array by the shift() method..
// const cities = ["Rome", "Lviv", "Warsaw"];
// cities.shift();
// console.log(cities); // ["Lviv", "Warsaw"]

// You can also delete an element of the array by its index (position) by the splice() method:.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const deletedElem = cities.splice(0, 1); // Rome
// console.log(cities); // ["Lviv", "Warsaw"]

/** for of */
function forOf() {
  const cities = ["Rome", "Lviv", "Warsaw"];
  for (let i of cities) {
    // run 3 times
    console.log(i); // Rome, Lviv, Warsaw
  }
}

/** Similar actions can be done with for */
function similar() {
  const cities = ["Rome", "Lviv", "Warsaw"];
  for (let i = 0; i < cities.length; i++) {
    // run 3 times
    console.log(cities[i]);
  } // Rome, Lviv, Warsaw
}

/** In for, you can jump several elements forward depending on the step of the
counter and change the elements*/
function changeElem() {
  const cities = ["Rome", "Lviv", "Warsaw"];
  for (let i = 0; i < cities.length; i += 2) {
    cities[i] = cities[i] + "!";
  }
  console.log(cities); // ["Rome!", "Lviv", "Warsaw!"]
}

/** Arrays method */

// The filter() method creates a new array with all the elements tested by the specified function.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const newArr = cities.filter(function(citie) { return citie.length < 5 });
// console.log(newArr); // ["Rome", "Lviv"]

// The map() method creates a new array by performing a given function for each element of the array.
// const cities = ["Rome", "Lviv", "Warsaw"];
// const newArr = cities.map( function(city) { return city + "Capital" }); // ["RomeCapital",
// // "LvivCapital", "WarsawCapital"]

// The reduce() method performs the reducer function you specified for each element of the array and returns a
// single value.
// const data = [2, 4, 6, 8];
// function reducer(total, value) { return total + value; }
// const sum = data.reduce(reducer); // 20
