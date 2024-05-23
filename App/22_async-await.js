// Async - Await

// ======================Example 1 - ITGid==========================
async function f1() {
  const requestHeaders = new Headers(); // определяем ключ доступа
  requestHeaders.append("apikey", APIKEY);

  let a = await fetch(URL + "/api/26/employee/read", {
    method: "GET",
    headers: requestHeaders,
  }); // прописываем метод и ключи

  let result = await a.json();

  let out = "";
  for (let item of result.result) {
    out += `${item.age} `;
  }
  document.querySelector(".out-1").innerHTML = out;
}

document.querySelector(".b-1").addEventListener("click", f1);

// ======================Example 2 - ITGid==========================
// выводим картинки
async function f7() {
  let race = document.querySelector(".s-7").value;
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);
  try {
    const response = await fetch(URL + `/api/26/sr/read/${race}`, {
      method: "POST",
      headers: requestHeaders,
    });

    if (!response.ok) {
      //блок отлова ошибки от сервера
      let message = `Error: ${response.status}`;
      throw new Error(message);
    }

    const result = await response.json();
    console.log(result);

    let img = document.createElement("img"); // создаем элемент
    img.src = URL + result.result.image; // присваиваем эл-ту картинку которая находится в ответе от сервера
    document.querySelector(".out-7").innerHTML = ""; //очищаем вывод
    document.querySelector(".out-7").appendChild(img); // выводим изображение
  } catch (e) {
    console.log(e);
  }
}

// ======================Example 3 - ITGid==========================
// метод POST передаем несколько параметров
let min = 500;
let max = 600; // доп.параметры для передачи

async function f10() {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  const formData = new FormData(); // задаем параметры
  formData.append("min", min);
  formData.append("max", max);

  try {
    const response = await fetch(URL + "/api/26/random/random-number", {
      method: "POST",
      headers: requestHeaders,
      body: formData, // передаем в запрос
    });
    //..........
  }
}

// ======================Example 4 - ITGid==========================
// возвращен пароль длиной равный указанной длине в input и используем checkbox (если указан symbols равный 1 то в пароле будут спецсимволы)

async function f12() {
  let inputLength = document.querySelector(".i-12").value;
  let symbols = document.querySelector(".ch-12");

  const formData = new FormData();
  formData.append("length", inputLength);
  if (symbols.checked) {
    formData.append("symbols", 1);
  } else {
    formData.append("symbols", 0);
  }

  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  try {
    const response = await fetch(URL + "/api/26/random/generate-password", {
      method: "POST",
      headers: requestHeaders,
      body: formData,
    });
    //.......
  }
}

// ======================Example 5 - ITGid==========================
/**
 * возвращен пароль длиной равный указанной длине в input и используем НЕСКОЛЬКО  checkbox (если указан symbols равный 1 то в пароле будут спецсимволы) - ДРУГОЙ СПОСОБ ЗАПИСИ
 */

async function f13() {
  let inputLength = document.querySelector(".i-13").value;
  let symbols = document.querySelector(".ch-131");
  let uppercase = document.querySelector(".ch-132");
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", APIKEY);

  const formData = new FormData();
  formData.append("length", inputLength);
  formData.append("symbols", symbols.checked ? 1 : 0);
  formData.append("uppercase", uppercase.checked ? 1 : 0);

  try {
    const response = await fetch(URL + "/api/26/random/generate-password", {
      method: "POST",
      headers: requestHeaders,
      body: formData,
    });
    //.......
  }
}