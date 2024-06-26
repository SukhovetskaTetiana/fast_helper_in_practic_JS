/**
 *  Web Sockets
 *
 * => забезпечує можливість обміну данними між браузером і сервером через постійне з'єднання данні передаються по ньому в обох напрямках без розривів з'єднання та додаткових http-запитів. Підходять для сервісів яким необхідний постійний обмін данними: он-лайн ігри, чати, програми з відображенням данних в реальному часі і т.д.
 */

// ============  ілюстрація роботи клієнт-сервер  ==========================

// серверна частини: папка server => index.js
// в терміналі створимо сервер:
// cd server // => перейшли в папку server
// npm init -y // початок роботи установка
// npm i ws // початок роботи установка
// node index.js // запуск роботи сервера. якщо виникає помилка при запуску сервера "Cannot use import statment outside a module", тоді в файлі package.json добавляємо поле ключ:значення => 'type': 'moduls';

// ======> в файлі index.js - сервер
import { webSocketServer } from "ws"; // підключемо модуль SocketServer

// створимо сервер за допомогою коду
const socketServer = new webSocketServer({ port: 8080 }); // порт задається

// підпишемося на подію коли до сервера доєднується новий клієнт
socketServer.on("connection", () => {
  console.log("Новий клієнт під'єднався");

  // підписка на отримання повідомдення
  connection.on("message", (message) => {
    console.log(`Клієнт надіслав ${message}`);

    // відповідь клієнту після отримання повідомлення
    connection.send(`Я отримав повідомлення ${message}, дякую!`);
  });

  // підписалися на закриття клієнта
  connection.on("close", () => {
    console.log("Клієнт від'єднався");
  });
});

// ======> в файлі client.js - сторона клієнта
// створимо webSocketClient за допомогою коду

const client = new WebSocket("ws://localhost:8080"); // передамо URL і PORT на якому раняться SocketServer;

// додамо підписку на подію відкриття зв'язку
client.onopen = () => {
  console.log("Під'єднання виконано");

  // клієнт надсилає повідомлення на сервер
  client.send("Привіт! Як справи?");
};

// обробка отримання повідомлення
client.onmessage = (message) => {
  console.log(message);
};

// обробка отримання повідомлення через деструктурізацію
// client.onmessage = ({ data }) => {
//   console.log(data);
// };
