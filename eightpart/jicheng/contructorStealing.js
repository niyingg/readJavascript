// 盗用构造函数

// 原型包含的引用值导致的继承问题
// 子类型实例化时不能给父类型的构造函数传参

function SuperType(name) {
  this.colors = [1, 2, 3];
  this.name = name;
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(age, name) {
  this.age = age;
  SuperType.call(this, name);
}

SubType.prototype = new SuperType();
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

let instance1 = new SubType(11, "ni");
instance1.colors.push("4");
console.log(instance1.colors);
instance1.sayAge();
instance1.sayName();

let instance2 = new SubType(12, "fu");
instance2.sayAge();
instance2.sayName();
console.log(instance2.colors);
