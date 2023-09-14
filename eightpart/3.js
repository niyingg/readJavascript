// 原型模式

function Person() {}
Person.prototype.name = "dvd";
Person.prototype.age = 29;
Person.prototype.job = "mn";
Person.prototype.sayName = function () {
  console.log(this.name);
};

let person1 = new Person();
person1.sayName(); // "Nicholas"
let person2 = new Person();
person2.sayName(); // "Nicholas"
console.log(person1.sayName == person2.sayName); // true

console.log(Person);
// 理解原型

// 只要创建一个函数，就会按照特定的规定为这个函数创建一个prototype属性指向原型对象，
// 默认情况下 所有原型对象自动获得名为constructor的属性 指回与其关联的构造函数

//即 Person.prototype.constructor 指向Person

// * isPrototypeOf;   person1.__proto__ === Person.prototype
// 用法 console.log(Person.prototype.isPrototypeOf(person1)); // true

// * Object.getPrototypeOf();
// console.log(Object.getPrototypeOf(person1) == Person.prototype)

// * setPrototypeOf() 可以向实例的私有特性[[Prototype]] 写入一个新值，这样就可以重写一个对象的原型继承关系

let biped = {
  numLegs: 2,
};

let person = Object.create(biped);
person.name = "Matt";

console.log(person.name);
console.log(person.numLegs);
console.log(Object.getPrototypeOf(person) === biped);

// 原型层级
// * hasOwnProperty  能够清楚地看到访问的是实例属性还是原型属性只有属性存在于实例上才返回true
// 调用方法 person1.hasOwnProperty("name")

// 3.原型和in操作符

/* in 操作符单独使用时,在通过对象指定的属性时返回true, 无论是实例还是原型上
 hasPrototypeProperty 属性只存在于原型上时返回true
 for-in 循环中使用in操作时，可以通过对象访问 且可以被枚举的属性都会返回
 如果是获得实例属性，采用 Object.keys() */

let k1 = Symbol("k1"),
  k2 = Symbol("k2");

let o = {
  [k1]: "k1",
  [k2]: "k2",
};
console.log(Object.getOwnPropertySymbols(o));
// [Symbol(k1), Symbol(k2)]
// * 看到8.3了
