//类构造函数

// constructor
// 关键字会告诉解释器在使用new 操作符创建类的新实例时，应该调用这个函数
// 构造函数的定义不是必须的
// 不定义构造函数相当于将构造函数定义为空函数

// 1.实例化

// 使用new调用构造函数会执行以下操作;

// 1.在内存中创建一个新对象
// 2.这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性
// 3.构造函数内部的this被赋值为这个新对象(即this指向新对象)
// 4.执行构造函数内部的代码(给新对象添加属性)
// 5.如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

class Animal {}
class Person {
  constructor(name) {
    console.log(arguments.length);
    this.name = name || null;
    console.log("person ctor");
  }
}

class Vegetable {
  constructor() {
    this.color = "orange";
  }
}

let a = new Animal();
let p = new Person(2);
let p1 = new Person();
let p2 = new Person(3);
let v = new Vegetable();

console.log(v.color, p.name, p2.name, p1.name);
