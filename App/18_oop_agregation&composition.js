// 18_oop_Agregation & Composition
/**
 * Агрегація та композиція є двома принципами об'єктно-орієнтованого програмування (ООП) і використовуються для побудови великих програм з менших компонентів. Ці принципи можна застосовувати і в мові програмування JavaScript.

Агрегація:

Означення: Агрегація вказує на те, що один об'єкт є частиною іншого, але може існувати самостійно від нього.
Приклад в JavaScript:
 */

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  drive() {
    console.log("Car is moving");
  }
}

const myCar = new Car();
myCar.drive(); // "Car is moving"
myCar.engine.start(); // "Engine started"

/**
 * Композиція:

Означення: Композиція є більш жорстким об'єднанням об'єктів, де один об'єкт є частиною іншого і не може існувати без нього.
Приклад в JavaScript:
 */

class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  constructor() {
    this.engine = new Engine();
  }

  drive() {
    this.engine.start();
    console.log("Car is moving");
  }
}

const myCar1 = new Car();
myCar1.drive(); // "Engine started" followed by "Car is moving"

/**
 * Обидва ці принципи дозволяють створювати більш складні системи, де класи взаємодіють один з одним. Вони допомагають зменшити залежність між класами і роблять код більш гнучким та легко змінюваним.
 */
