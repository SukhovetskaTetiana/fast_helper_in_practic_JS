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
 * =====================================================================
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

// ==================Task#1_SoftServe================

/**
 * Create a Movie class, the constructor of which accepts 3 parameters: movie name name, movie genre category and start year of startShow.

The class has a watchMovie() method that returns a phrase and adds a movie name name parameter to it at the end. For example, "I watch the movie Titanic!"

Create an instance of the movie1 class with the title of the movie "Titanic", the genre "drama" and 1997 release.

Create an instance of the movie2 class with the title of the movie "Troya", the genre "historical" and the 2004 release.
 */
// варіант-1 пишемо через класи
class Movie {
  constructor(name, category, startShow) {
    this.name = name;
    this.category = category;
    this.startShow = startShow;
  }
  watchMovie() {
    return `I watch the movie ${this.name}!`;
  }
}

// варіант-2 - пишемо через функції та прототипне наслідування  - правильне виконання коду
// function Movie (name, category, startShow) {
//     this.name = name;
//     this.category = category;
//     this.startShow = startShow;
// }
//   Movie.prototype.watchMovie = function() {
//     return `I watch the movie ${this.name}!`;
//   }

let movie1 = new Movie("Titanic", "drama", 1997);
console.log(movie1.watchMovie());
console.log(movie1.name);
console.log(movie1.category);
console.log(movie1.startShow);
let movie2 = new Movie("Troya", "historical", 2004);
console.log(movie2.watchMovie());

/**
 * ======================================================================
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

// Приклад поліморфізму - Task#6_Sprint_02_SoftServe----------------
/**
 * Implement the Plane class, the constructor of which accepts 3 parameters model - model of the plane, fuelSupply - capacity of a stock of fuel of the plane, fuelConsumption - average fuel consumption in liters on 100 km of flight.

Create a method of class calcFlightRange(), which determines the range of the plane by the formula fuelSupply / fuelConsumption * 100 and returns it.

Create a static method of class showSortedByFlightRange(planesArray), which takes an array of instances of classes planesArray, sorts the flight range of plane in ascending order and outputs the result to the console in the format plane_model: range.

Create a TransportPlane class, which is inherited from the Plane class, the constructor of which takes 5 parameters model - plane model, fuelSupply - the amount of fuel, fuelConsumption - the average fuel consumption in liters per 100 km, cargo - maximum tonnage, addTank - about additional tanks of the plane  In this class, you need to override the calcFlightRange() method to take into account that the fuelSupply has increased the amount of fuel added by the addTank.

Create a class PassengerPlane, which is inherited from the class Plane, whose constructor accepts 5 parameters model, fuelSupply, fuelConsumption, passengers - the maximum number of passengers, refueling - the amount of additional fuel received in the refueling. In this class, you need to override the calcFlightRange() method to take into account that the fuelSupply has increased refueling.

Create a WarPlane class, which is inherited from the Plane class, the constructor of which accepts 5 parameters model, fuelSupply, fuelConsumption, missiles - the number of missile weapons, aerodynamicsKoef - the coefficient of aerodynamics of the plane. In this class, you need to override the calcFlightRange() method in such a way as to take into account that the flight range of the plane increases in proportion to the value of the aerodynamics coefficient of aerodynamicsKoef. 
 */

class Plane {
  constructor(model, fuelSupply, fuelConsumption) {
    this.model = model;
    this.fuelSupply = fuelSupply;
    this.fuelConsumption = fuelConsumption;
  }

  calcFlightRange() {
    return (this.fuelSupply / this.fuelConsumption) * 100;
  }

  static showSortedByFlightRange(planesArray) {
    return planesArray
      .slice()
      .sort((a, b) => a.calcFlightRange() - b.calcFlightRange())
      .forEach((plane) => {
        console.log(`${plane.model}: ${plane.calcFlightRange()}`);
      });
  }
}

class TransportPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, cargo, addTank) {
    super(model, fuelSupply + addTank, fuelConsumption);
    this.cargo = cargo;
    this.addTank = addTank;
  }
}

class PassengerPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, passengers, refueling) {
    super(model, fuelSupply + refueling, fuelConsumption);
    this.passengers = passengers;
    this.refueling = refueling;
  }
}

class WarPlane extends Plane {
  constructor(model, fuelSupply, fuelConsumption, missiles, aerodynamicsKoef) {
    super(model, fuelSupply, fuelConsumption);
    this.missiles = missiles;
    this.aerodynamicsKoef = aerodynamicsKoef;
  }

  calcFlightRange() {
    return Math.floor(super.calcFlightRange() * this.aerodynamicsKoef);
  }
}

const plane1 = new TransportPlane("An-225 Mriya", 105000, 5000, 500, 300000);
console.log(`${plane1.model}: ${plane1.calcFlightRange()}`); // An-225 Mriya: 8100
const plane2 = new PassengerPlane("Boeing-747", 193000, 2500, 410, 90000);
console.log(`${plane2.model}: ${plane2.calcFlightRange()}`); // Boeing-747: 11320
const plane3 = new WarPlane("F-22 Raptor", 8200, 320, 20, 1.2); // F-22 Raptor: 3075
console.log(`${plane3.model}: ${plane3.calcFlightRange()}`); //
/**
 * Sorted range of planes:
F-22 Raptor: 3075
An-225 Mriya: 8100
Boeing-747: 11320
*/

/**
 * ==================================================================
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

// =======================Task#2_SoftServe==========================

/**
 * Implement the Student class, the constructor of which accepts 2 parameters fullName - the name and surname of the student, direction - the direction in which he studies and save them in privete fields.

Create a getFullName() method that returns the student's name and surname

Create a nameIncludes(data) method that, using the showFullName() method, checks for the text data argument in the student’s name and returns true if a match is found or false if not found.

Create a static studentBuilder() method that returns a new instance of the class named ‘Ihor Kohut’ and the direction ‘qc’.

Create a getter and setter direction() to read and specify the direction field.

Create an instance of class stud1 named 'Ivan Petrenko' and direction 'web'.

Create an instance of class stud2 named 'Sergiy Koval' and direction 'python'.
 */
class Student {
  #fullName;
  #direction;
  constructor(fullName, direction) {
    this.#fullName = fullName;
    this.#direction = direction;
  }

  getFullName() {
    return `${this.#fullName}`;
  }

  showFullName() {
    return this.#fullName;
  }

  nameIncludes(data) {
    const fullName = this.showFullName();
    return fullName.includes(data);
  }

  static studentBuilder() {
    return new Student("Ihor Kohut", "qc");
  }

  get direction() {
    return this.#direction;
  }

  set direction(newDirection) {
    this.#direction = newDirection;
  }
}

let stud1 = new Student("Ivan Petrenko", "web");
let stud2 = new Student("Sergiy Koval", "python");

console.log(stud1); // Student {}
console.log(stud2);
// console.log(stud1.getFullName()); // Ivan Petrenko
// console.log(stud1.direction); // web

// console.log(stud1.nameIncludes("Ivan")); // true
// console.log(stud1.nameIncludes("Ihor")); // false

// const stud3 = Student.studentBuilder();
// console.log(stud3); // Student {}
// console.log(stud3.getFullName()); // Ihor Kohut
// console.log(stud3.direction); // qc

// ==========Инкапсуляция На основе символов => Symbols based========
// ==================Task#3_SoftServe=======================
/**
 *Please, fill in missed lines of code.
Product constructor should provide a generation of unique product id within the application no matter how many products are created.
Distributor can store information about products in its products property and has an ability to add and remove a product.
addProduct adds a new property to products with name of product id and value - product name.
removeProduct removes a property with specified id from products

Please, use Symbol data type.
 */
class Distributor {
  constructor() {
    this.products = {};
  }

  addProduct(id, name) {
    this.products[id] = name;
  }

  removeProduct(id) {
    delete this.products[id];
  }
}

const localDistributor = new Distributor();

class MyProduct {
  constructor(name) {
    this.id = Symbol(name); // Use the product name as the symbol description
    this.name = name;
  }

  distribute(distributor) {
    distributor.addProduct(this.id, this.name);
  }
}

/**
 * =================================================================
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

// Task#7

/**
 * Implement the PizzaMaker class, which allows you to create pizza of different types, with different ingredients, calculate the price and calorie content of pizza.

The pizza comes in 3 sizes: S, M and L.

There are 4 types of pizza available: meat, fish, cheese and vegetarian.

When creating a new pizza, be sure to specify the size and appearance.

Additional ingredients are available that can be added to the pizza at the customer's request: tomatoes, peppers, bacon and olives.

Each element that makes up pizza has its own name, price and calorie content. All of this data is contained in the pizzaMenu object.

The PizzaMaker class has a number of methods for generating pizza:

- addIngredient(ingredient) method adds an additional ingredient to the pizza. A new ingredient is added if it is not included in the pizza, and the message "ingredient_name has been added" is displayed in the console. If such an ingredient has already been added, the message "Such an ingredient already exists!" Is generated.

- deleteIngredient(ingredient) method removes the specified ingredient from the list of existing ingredients, displays the message "ingredient_name has been deleted" to the console.

- getIngredients() method returns a list of the attached ingredients with their name, price, calorie content.

- getSize() method returns the size of the pizza.

- getKind() method returns the type of pizza.

- calculatePrice() method calculates and returns the total cost of a pizza, which consists of the sum of the values ​​of all its components.

- calculateCalories() method calculates and returns the total calorie content of a pizza, which consists of the sum of the calories of all its components.

 */

const pizzaMenu = {
  SIZE_S: { param: "SIZE_S", price: 60, calorie: 300 },
  SIZE_M: { param: "SIZE_M", price: 90, calorie: 450 },
  SIZE_L: { param: "SIZE_L", price: 110, calorie: 600 },
  KIND_MEAT: { param: "KIND_MEAT", price: 55, calorie: 230 },
  KIND_FISH: { param: "KIND_FISH", price: 70, calorie: 150 },
  KIND_CHEESE: { param: "KIND_CHEESE", price: 50, calorie: 200 },
  KIND_VEGETARIAN: { param: "KIND_VEGETARIAN", price: 35, calorie: 50 },
  INGREDIENT_TOMATOES: { param: "INGREDIENT_TOMATOES", price: 15, calorie: 5 },
  INGREDIENT_PEPPER: { param: "INGREDIENT_PEPPER", price: 18, calorie: 5 },
  INGREDIENT_BACON: { param: "INGREDIENT_BACON", price: 25, calorie: 40 },
  INGREDIENT_OLIVES: { param: "INGREDIENT_OLIVES", price: 20, calorie: 0 },
};

class PizzaMaker {
  constructor(size, kind) {
    this.size = size.param;
    this.kind = kind.param;
    this.ingredients = []; // краще інгредієнти зберігати об'єктом - {} та зробити поле приватним - #ingredients
  }
  getSize() {
    return this.size;
  }

  getKind() {
    return this.kind;
  }

  calculatePrice() {
    const totalTypes = pizzaMenu[this.size].price + pizzaMenu[this.kind].price;
    const totalIngredients = this.ingredients.reduce(
      (total, ingredient) => total + ingredient.price,
      0
    );
    return totalTypes + totalIngredients;
  }

  calculateCalorie() {
    const totalTypesCalorie =
      pizzaMenu[this.size].calorie + pizzaMenu[this.kind].calorie;

    const totalIngredientsCalorie = this.ingredients.reduce(
      (total, ingredient) => total + ingredient.calorie,
      0
    );
    return totalTypesCalorie + totalIngredientsCalorie;
  }
  //===================================================================
  // calculatePrice() та calculateCalorie() ці дві функції ідентичні. можна зробити окрему загальну функцію куди можна передавати чи ціну чи калорії

  // reduceByField(fieldName){
  //   return this.getIngredients().reduce((total, ingredient)=>{
  //     return total+ingredient[fieldName];
  //   }, this.size[fieldName]+this.kind[fieldName]);
  // }

  // calculatePrice()  {
  //  return this.reduceByField('price'); // передаємо "" - рядок поля. Потрібно передавати name поля;
  // }

  // calculateCalorie() {
  //   return this.reduceByField('calorie');
  // }
  //====================================================================

  getIngredients() {
    // тут краще зробити геттер - get Ingredients()
    const totalIngredients = this.ingredients.map((ingredient) => ({
      param: ingredient.param,
      price: ingredient.price,
      calorie: ingredient.calorie,
    }));
    return totalIngredients;
  }

  // get ingredients() { // інший варіант
  //
  //   return Object.values(this.#ingredients); // this.#ingredients - зберігається об'єкт а на зовні ingredients це масив'
  // }

  addIngredient(ingredient) {
    if (!this.ingredients.includes(ingredient)) {
      // незручний метод - потребує багато ресурсів для перебору масиву. При умові що this.#ingredients = {}, то використовувалися б інші методи які перебирають об'єкт
      this.ingredients.push(ingredient);
      console.log(`${ingredient.param} has been added`);
    } else {
      console.log("Such an ingredient already exists!");
    }
  }

  deleteIngredient(ingredient) {
    // незручний метод - потребує багато ресурсів для перебору масиву
    const index = this.ingredients.indexOf(ingredient);

    if (index != -1) {
      this.ingredients.splice(index, 1);
      console.log(`${ingredient.param} has been deleted`);
    }
  }
}

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT);
console.log(pizza);
console.log("Size:", pizza.getSize()); // Size: SIZE_M
console.log("Kind:", pizza.getKind()); // Kind: KIND_MEAT
console.log("calculatePrice:", pizza.calculatePrice()); // calculatePrice: 145
console.log("calculateCalories:", pizza.calculateCalories()); // calculateCalories: 680
console.log("getIngredients:", pizza.getIngredients()); // getIngredients: []

pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON); // INGREDIENT_BACON has been added
// Such an ingredient already exists!

pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);
pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);
pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES); //

// INGREDIENT_TOMATOES has been added
// INGREDIENT_BACON has been added
// INGREDIENT_TOMATOES has been deleted

// приклад доступу до змінної с;
class Adder {
  c = 30;
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }
  getSum() {
    return this.a + this.b + this.c;
  }
}
const sum = new Adder(10, 20);
console.log(sum.getSum());
