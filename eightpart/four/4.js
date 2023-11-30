// 静态类方法非常适合作为实例工厂：
class Person {
  constructor(age) {
    this._age = age;
  }

  sayAge() {
    console.log(this._age);
  }

  static create() {
    return new Person(Math.floor(Math.random() * 100));
  }
}

console.log(Person.create());

// 添加成员数据

class Person1 {
  sayName() {
    console.log(Person1.greeting, this.name);
  }
}

Person1.greeting = "hello";
Person1.prototype.name = "Jake";

let p1 = new Person1();
p1.sayName();

// 可以在类外显式添加成员数据
