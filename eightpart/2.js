// 构造函数模式
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(`我是${this.name}我${this.age}岁了`);
  };
}

const person1 = new Person("ny", 29);
const person2 = new Person("fz", 30);

console.log(person1, typeof person1, person1 instanceof Person);
console.log(person2, "___", Person, person2.constructor);

// 和工厂模式的区别
// 1. 没有显式的创建对象
// 2. 属性和方法直接赋值给了this
// 3. 没有return

// 以new 操作符 创建Person 实例
// 1. 在内存中创建一个对象
// 2. 新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性;  //即 Person.prototype
// 3. 构造函数内部的this 被赋值为这个新对象
// 4. 执行构造函数内部的代码（给新对象添加属性）
// 5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象

// person1.constructor === Person
// person1 instanceof Person
// person1 instanceof Object

// 构造函数不一定要写成函数声明的形式。赋值给变量的函数表达式也可以表示构造函数

// const Person2 = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.say = function () {
//     console.log(`我是${this.name}我${this.age}岁了`);
//   };
// };

// 使用new 调用的函数就是构造函数

// !构造函数的问题
// 构造函数等价于  this.sayName = new Function("console.log(this.name)"); // 逻辑
// 即 person1.sayName !== person2.sayName,所以把函数提到全局

function Person3(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = sayName;
}
function sayName() {
  console.log(this.name);
}

let person3 = new Person3("Nicholas", 29, "Software Engineer");
let person4 = new Person3("Greg", 27, "Doctor");
person3.sayName(); // Nicholas
person4.sayName(); // Greg

console.log(person3.sayName === person4.sayName, "???");

// 如果这个对象需要多个方法，就需要在全局作用域中定义多个函数 可以通过原型模式来解决
