// DOM

// task01
// вывод данных с интпута списком на страницу
const comment = [];

document.querySelector(".button01").onclick = () => {
  let value = document.querySelector(".input01").value;
  comment.push(value);
  draw();
};

function draw() {
  let out = "";
  for (let i = 0; i < comment.length; i++) {
    out += `<li>${comment[i]}</li>`;
  }
  document.querySelector(".ul01").innerHTML = out;
}

// task 02
// changing content with innerText

const element = document.querySelector("div");
element.innerText = "New content";
// Initial <div>Old content </div>
// Result <div>New content </div>

// Explanation: Sets the text content of an element. It treats content as plain text and doesn`t parse HTML.

// task 03
// changing content with innerHTML

const element = document.querySelector("div");
element.innerHTML = "<b>New content</b>";

//Initial <div>Old content</div>
//Result <div>New content</div>

// Explanation: allows you to change the content inside an HTML element by replacing or adding HTML markup.

//task 04
// changing Attributes with setAttribute

const element = document.querySelector("div");
element.setAttribute("data-value", "123");

// Initial
// <div data-value='562'>Old</div>
//Result
// <div data-value='123'>New</div>

// Explanation: Sets the value of the specified attribute. Useful for custom attributes like data-value.

// task 05
// removing Attributes with removeAttribute

const element = document.querySelector("button");
element.removeAttribute("disabled");

// Initial <button disabled>Click me</button>
// Result <button>Click me</button>

// Explanation: Removes the specified attribute from an element.

// task 06
// setting and getting properties

const element = document.querySelector("input");
// Getting the value property
const inputValue = element.value; // Old value
// Setting the value property
element.value = "New value";

// Initial <input type='text' value='Old value'>
// Result <input type='text' value='New value'>

// Explanation: Accessing and modifying properties, such as value for form elements.

// task 07
// add Classes with classList
const element = document.querySelector("div");
element.classList.add("active");

// Initial <div>Hello world</div>
// Result <div class='activ'>Hello world</div>

// Explanation: classList provides methods to add classes on an element.

// task 08
// removing Classes with classList
const element = document.querySelector("div");
element.classList.remove("active");

// Initial <div class='active'>Hello world</div>
// Result <div class=''>Hello world</div>

// Explanation: classList provides methods to remove classes on an element.

// task 09
// toggling Classes with classList

const element = document.querySelector("div");
element.classList.toggle("active");

// Initial <div class='active'>Hello world</div>
// Result <div class=''>Hello world</div>

// Explanation: classList provides methods to Toggles the presence of a class. If the class is present, it removes it; otherwise, it adds it.

// task 10
// checking for Class existence
const element = document.querySelector("div");
const check = element.classList.contains("active");
// check=true

//Initial <div class='active'>Hello world</div>

// Explanation: Checks if an element has a specific class and returns a boolean.
