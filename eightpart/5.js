// in
// hasOwnProperty

function Person() {}
Person.prototype.name = "3";
Person.prototype.age = "4";
let person1 = new Person();
let person2 = new Person();

const hasName = "name" in person1;
console.log(hasName);
console.log(person1.hasOwnProperty("name"));

person2.name = "34";
console.log("name" in person2);
console.log(person2.hasOwnProperty("name"));

// hasPrototypeProperty 判断是原型属性 就是 in 为true, hasOwnProperty 为false

// Object.keys 获取对象上的所有可枚举属性
function Person() {}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function () {
  console.log(this.name);
};
let keys = Object.keys(Person.prototype);
console.log(Object.keys(Person));
console.log(keys); // "name,age,job,sayName"
let p1 = new Person();
p1.name = "Rob";
p1.age = 31;
let p1keys = Object.keys(p1);
console.log(p1keys); // "[name,age]"

//  Object.getOwnPropertyNames 列出属性，无论是否枚举

keys = Object.getOwnPropertyNames(Person.prototype);
console.log(keys); // "[constructor,name,age,job,sayName]"

// 对象迭代

const o = {
  qux: {},
};

// Object.values();
// Object.entries();
// Symbol 属性会被忽略， 浅拷贝
console.log(Object.values(o)[0] === o.qux, Object.entries(o)[0][1]);
function Person() {}

Person.prototype = {
  name: "NI",
  age: 29,
  job: "sf",
  sayName() {
    console.log(this.name);
  },
};
person1 = new Person();
console.log(Person.prototype.constructor, Person);
