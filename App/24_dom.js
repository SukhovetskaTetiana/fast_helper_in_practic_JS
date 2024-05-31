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
