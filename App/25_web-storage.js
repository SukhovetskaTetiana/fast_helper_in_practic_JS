/**
 * Web Storage: (дивимося в інструменті розробника у вкладці Application => Storage)
 * => localStorage
 * => sessionStorage
 * => cookie
 */

/**
 *  => ============= localStorage ==========================
 *  the data is not automatically deleted and will exist even after restarting the browser;
 *  objects represent data as a set of key: value pairs =>
 *  localStorage.setItem(key, value)
 */

localStorage.setItem("user", "Tom"); // saves a key: value pair, if the key already existed, the value will be update;
localStorage.setItem("role", "guest");
console.log(localStorage.getItem("user")); // "Tom" => return value by key;
console.log(localStorage.getItem("role")); // "guest"
console.log(localStorage.length); // 2 => number of pair in storage;
console.log(localStorage.key(0)); // "user" => return key with the specified index;
localStorage.setItem("user", "Bob");
console.log(localStorage.getItem("user")); // "Bob"
localStorage.removeItem("role"); // => remove pair with key;
console.log(localStorage.length); // 1
localStorage.clear(); // => clear all data;
console.log(localStorage.length); // 0

/**
 * RULE: both key and value must be strings only, this lay on some particular qualities when working with non-string data:
 */
localStorage.setItem("num", 10);
const num = localStorage.getItem("num");
console.log(typeof num); // "string"

/**
 * RULE: To store complex data, such as objects or arrays, you need to use serializations to JSON format:
 */
localStorage.setItem("data1", [1, 2, 3]);
localStorage.setItem("data2", JSON.stringify([1, 2, 3]));
const data1 = localStorage.getItem("data1");
console.log(data1 instanceof Array); // false
console.log(data1); // "1,2,3"
const data2 = JSON.parse(localStorage.getItem("data2"));
console.log(data2 instanceof Array); // true
console.log(data2); // [1, 2, 3]

/**
 * RULE: When the data in localStorage or sessionStorage is updated, a "storage" event is fired with the following properties:
• key – the key, which updated (null, if called clear()):;
• oldValue – the old value of the changed storage pair (null, if the pair added firstly);
• newValue – the new value of the changed storage pair (null, if the pair was deleted);
• url – url of the document where the update took place;
• storageArea – the localStorage or sessionStorage object where the update occurred

The event is triggered on all other browser tabs where storage is available, except for the tab where it happened. This mechanism allows ynchronization of tabs and exchange of messages.
 */
// To demonstrate the work of the "storage" event, create an index.html file the following content:

{
  /* <body>
<script>
    window.addEventListener("storage", (e) => {
    console.log("key:", e.key)
    console.log("newValue:", e.newValue);
    });
</script>
</body> */
}

/**
 *  => ================== sessionStorage =====================
 *   the data is stored temporally and will be automatically deleted after closing the browser tab; 
 All methods are the same as in localStorage.
 */
sessionStorage.setItem("user", "Tom");
// ...............

/**
 *  => ======================= cookie ========================
 *  In spite of Web Storage data can be stored in a cookie, but there are a few differences that you need to consider when choosing a storage location:
 *  • data from Web Storage is not sent to the server every time a request is made;
 *  • the size of the Web Storage is much larger than a cookie;
 *  • server cannot directly manipulate data in Web Storage.
 */

document.cookie = "name=Car"; // задаємо значення. відображається Name, Value, дивимося Expires/Max-Age => Session (це час "життя" куків - тобто кукі будуть жити поки відбувається сессія);
document.cookie = "name=Car; expires=" + new Data(2025, 0, 1); // змфнюємо час "життя" куків;
document.cookie = "name=Car; expires=" + new Data(9999, 0, 1); // якщо не хочемо щоб наші кукі стали застарілими в найближчому майбутньому то можемо ставити віддалену дату
document.cookie = "otherName=Express; expires=" + new Data(9999, 0, 1); // якщо хочему установити нове значення, то кукі не перезаписуються а конкатенуються
