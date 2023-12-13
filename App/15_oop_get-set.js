// OOP - getters and setters

class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
  showName() {
    return this.name;
  }
  static studentType = "magistr";

  get studentCourse() {
    return this.course;
  }

  set studentCourse(value) {
    // можемо додати логіку
    if (value > 6) {
      console.log("Wrong course");
      return;
    }
    this.course = value;
  }
}

const student = new Student("Petro", 2);
console.log(student.showName()); // Petro

// getter - отримати значення & setter - встановити значення (value)
console.log(student.studentCourse()); // 2 - працює коректно;
student.studentCourse = 7; // 'Wrong course!'
student.studentCourse = 5; // 5 -працює коректно
console.log(student.studentCourse()); // 2 - працює коректно;
