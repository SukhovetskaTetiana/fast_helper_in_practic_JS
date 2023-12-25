// OOP - static
// static - можемо працювати з статичними методами на рівні Классу а НЕ на рівні екземпляру классу. Статичні методи і поля використовуються для зберігання інформації специфічної для данного класу в цілому;
/**
 * статические методы - которые прописаны в калссе, как и обычные методы, но их можно вызвать не создавая класс - без создания экземпляра класса. Создают вспомагательнае инструменты нужные для работы. Работает когда не надо создавать объект. Дает возможность более точно работать ;

как определить что метод статический? если для получения доступа к инструменту пытаемся создать сласс и не совсем понимаем что туда нужно заносить то значит нужно написать static и не создавать класс а обращаться через класс к данному свойству
 */
// позволяет хранить данные в классе
class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
  showName() {
    return this.name;
  }
  static studentType = "magistr";
}

const student = new Student("Petro", 2);
console.log(student.showName()); // Petro

console.log(student.studentType); // undefined
console.log(Student.studentType); // magistr - код працює коректно

// example 2 - GitInfo

// => проверка на число - принимает параметр и возвращает true если это число, false если нет
class Validate {
  constructor(a) {
    this.a = a;
  }
  static isNumber(a) {
    return !isNaN(Number(a)); // Number(a) - перевоим стороку в число; !isNaN - true получаем если isNaN не выполняется
  }
}

// => проверка целое ли число - возвращает true если это число целое, false если число, но не целое
class Validate {
  // //……..
  static isInt(a) {
    if (this.isNumber) {
      return Number.isInteger(a);
    }
    return false;
  }
  // ……
}

// вызов статического метода:
console.log(Validate.isInt(4)); // прямое обращение к классу!!!!
console.log(Validate.isInt(44.5));

// => проверка дробь ли число - возвращает true если это число дробь, false если число, но целое
class Validate {
  // ……..
  static isFloat(a) {
    if (this.isNumber(a)) {
      return !this.isInt(Number(a));
    }
    return false;
  }
  // …..
}

// => возвращает true если это строка с одним символом, false в противном случае.
class Validate {
  // ……..
  static isChar(a) {
    if (!this.isNumber(a) && a.length === 1) {
      return true;
    }
    return false;
  }
  // …..
}

// => проверка стока ли -  возвращает true если это строка, false в противном случае
class Validate {
  // ……..
  static isString(a) {
    return typeof a === "string";
  }
  // …..
}

// => проверка на Boolean -  возвращает true если это true или false, false во всех остальных случаях
class Validate {
  // ……..
  static isBoolean(a) {
    return typeof a === "boolean";
  }
  // …..
}

// => проверка на массив - возвращает true если это массив, false в противном случае
class Validate {
  // ……..
  static isArray(a) {
    return Array.isArray(a);
  }
  // …..
}

// => возвращает форматированную строку где каждые три знака отделены пробелом. Т.е. принимает 1000 а возвращает 1 000.00, принимает 200000 а возвращает 200 000.00
class Validate {
  // ……..
  static toMoney(a) {
    if (this.isNumber(a)) {
      let parts = a.toFixed(2).toString().split("."); // выводим два знака после точки, переводим в строку и переводим в массим с двумя элементами которые делятся точкой;
      let workParts = parts[0]; // работаем с элементом в массиве - целая часть - до точки;
      let changeWorkParts = ""; // создаем пустую строку для вывода;

      for (let i = 0; i < workParts.length; i++) {
        changeWorkParts += workParts[i];
        if (
          (workParts.length - 1 - i) % 3 === 0 &&
          i !== workParts.length - 1
        ) {
          // смотрим где ставить пробел - если (длинна массива - индекс элемента) кратный 3 без остатка и индекс элемента не последний в массиве
          changeWorkParts += " ";
        }
      }
      let finishNum = changeWorkParts + "." + parts[1]; // собираем число из целой части и дробной;
      return finishNum;
    }

    return a;
  }
  // …..
}
