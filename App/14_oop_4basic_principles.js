//OOP - basic principles:
// => inheritance => Наследование
// => prototypal inheritance
// => polymorphism => Полиморфизм
// => encapsulation => Инкапсуляция
// => abstraction => Абстрагирование

/**
 * => INHERITANCE => Наследование - позволяет расширить и повторно использовать код;
 */

class Vehicle {
  constructor(kind, speed) {
    this.kind = kind;
    this.speed = speed;
  }
  drive() {
    console.log(`${this.kind} is driving`);
  }
}

class Car extends Vehicle {
  constructor(kind, speed, passengers) {
    super(kind, speed);
    this.passengers = passengers;
  }
  carryPassengers() {
    console.log(`${this.kind} carries ${this.passengers} passengers`);
  }

  render() {
    super.drive(); // виклик батьківського методу в дочірньому
  }
}
const miniven = new Car("Renault Scenic", 220, 7);
console.log(miniven.speed); // 220
console.log(miniven.passengers); // 7
miniven.carryPassengers(); // Renault Scenic carries 7 passengers
miniven.drive(); // Renault Scenic is driving

/**
 * => PROTOTYPAL INHERITANCE => Прототипное наследование. В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо
имеет значение null. Объект, на который ссылается свойство [[Prototype]], называется «прототипом».
 */
function Vehicle(kind, speed) {
  this.kind = kind;
  this.speed = speed;
}

Vehicle.prototype.drive = function () {
  console.log(`${this.kind} is driving`);
};

function Car(kind, speed, passengers) {
  // call super constructor
  Vehicle.call(this, kind, speed);
  this.passengers = passengers;
}

// Prototypal Inheritance
Car.prototype = Object.create(Vehicle.prototype); // чітко прописуємо наслідування
Car.prototype.carryPassengers = function () {
  // задаємо додатковий метод
  console.log(`${this.kind} carries passengers`);
};
const miniven2 = new Car("Renault Scenic", 220, 7);
miniven2.speed; // 220
miniven2.passengers; // 7
miniven2.drive(); // Renault Scenic іs driving

/**
 * => POLYMORPHISM => Полиморфизм - возможность применения в данном контексте свойств и методов но внутри методы меняются для каждой сущности. Возможность менять методы и свойства, соблюдая интерфейс взаимодействия так что эти свойства и методы могут содержать разные данные, разные действия но результат получаем одинаковый (например как результат- получаем масив список курсов - зависит от того админ это или юзер и пишем код для каждого разный. но сам метод называется одинаково - getCourses());
 * АБО
 *  => polymorphism => Полиморфизм - ситуація коли в нас є базовий класс який має свій метод чи набір методів і від цього классу будуть наслідуватися дочірні класи і в них буде перевизначатися даний метод причому кожний клас буде мати свою власну реалізацію цього методуж
 */
class Vehicle {
  constructor(kind, speed) {
    this.kind = kind;
    this.speed = speed;
  }

  drive() {
    console.log(`${this.kind} is driving`);
  }
}

class Car extends Vehicle {
  constructor(kind, speed, passengers) {
    super(kind, speed);
    this.passengers = passengers;
  }

  drive() {
    super.drive();
    console.log(`Maximum ${this.kind} speed: ${this.speed} km/h`);
  }

  carryPassengers() {
    console.log(`${this.kind} carries ${this.passengers} passengers`);
  }
}
const miniven1 = new Car("Renault Scenic", 220, 7);
miniven1.drive(); // Renault Scenic іs driving
// Maximum Renault Scenic speed: 220 km/h

/**
 * => ENCAPSULATION => Инкапсуляция - контролируемый доступ к свойствам (к данным) -невозможно поменять свойство напрямую, изменение свойства происходит через методы - геттеры. просматривать свойства возможно;
 * 
 * В ООП это означает, что объект сохраняет свое состояние в тайне.
только его методы имеют доступ к его изменению.
В JS есть несколько методов реализации инкапсуляции:
1) Обозначение частных свойств и методов путем добавления подчеркивания «_» в конце.
начало их => Designation of private properties and methods by adding an underscore "_" at the beginning of them;
2) На основе замыкания => Closure based;
3) На основе объектов WeakMap => Based on WeakMap objects;
4) На основе символов => Symbols based;
5) Использование частных полей => Using Private Fields.
 */

// Exsemple 1 - Encapsulation via closures
class Vehicle {
  constructor(kind, speed) {
    let maxWeight = 2000; // private field OR _maxWeight = 2000; // защищенное свойство

    this.kind = kind;
    this.speed = speed;

    this.getMaxWeight = function () {
      // const getMaxWeight = function () { => задаємо свойство таким чином якщо не хочемо щом інші мали доступ та могли змінювати це свойство - інкапсулюємо йогож
      //
      // can access both kind, speed and maxWeight from here
      console.log(`${this.kind} has a maximum speed of ${this.speed} km/h,
        a maximum weight of ${maxWeight} kg`);
    };
  }
  drive() {
    console.log(`${this.kind} іs driving`);
  }
}
const miniven3 = new Vehicle("Renault Scenic", 220);
miniven3.getMaxWeight(); // Renault Scenic has a maximum speed of 220 km/h, a maximum weight of 2000 kg
miniven3.maxWeight; // undefined

// Exsemple 2 - Encapsulation via private fields => JavaScript recently added the ability to create private properties and methods. They must start with a #
// character. Access to them is only from the middle of the class.
/**
 * обозначается через # и не доступно за пределами класса - нельзя обратиться напрямую. Можно с ним работать в рамках класса через геттеры и сеттеры и за пределами класса к ним обращаться через get-set. Наследникам доступны через get-set.
 */
class Vehicle {
  #load = 0; // private field
  constructor(kind, speed) {
    this.kind = kind;
    this.speed = speed;
  }
  addLoad(value) {
    // #addLoad(value) { => також можемо приховати від зовнішнього доступу і методи
    return (this.#load += value);
  }
  getLoad() {
    return `The car carries a load of ${this.#load} kg`;
  }
}
const miniven4 = new Vehicle("Renault Scenic", 220);
console.log(miniven4.getLoad()); // The car carries a load of 300 kg
miniven4.#load; // Syntax Error
miniven4.#addLoad(value); // Syntax Error

/**
 * => ABSTRACTION => Абстрагирование - отбрасываем лишние свойства. Он пытается уменьшить и выделите детали, чтобы разработчик мог сосредоточиться на нескольких концепциях одновременно. Этот подход улучшает понятность и удобство сопровождения кода.
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
  const address = "address";
  const findAddress = function () {
    console.log(`${address} is a private`);
  };
  this.getAddress = function () {
    console.log(name, age);
    findAddress();
  };
}
const person = new Person("Peter", 33);
person.findAddress(); // TypeError: p.findAddress is not a function
person.getAddress(); // Peter 33
// address is a private
