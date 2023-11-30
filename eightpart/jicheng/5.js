// 寄生式组合继承
function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

let instance1 = new SubType("Nicholas", 29);
instance1.colors.push("6");
let instance2 = new SubType("ni", 20);

console.log(instance1.colors, instance2.colors);
console.log(instance1, instance2);

instance1.sayName();
instance1.sayAge();
instance2.sayName();
instance2.sayAge();

console.log(instance1.sayAge === instance2.sayAge);
console.log(instance1.sayName === instance2.sayName);
console.log(instance1 instanceof SubType);
console.log(instance1 instanceof SuperType);
console.log(SubType.prototype instanceof SuperType);

function inheritPrototype(subType, superType) {
  let prototype = Object.create(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}
