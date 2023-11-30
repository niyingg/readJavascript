function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(age, name) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
};

let instance1 = new SubType(29, "Nicholas");
instance1.colors.push("6");
let instance2 = new SubType(20, "ni");
instance2.colors.push("7");

console.log(instance1.colors, instance2.colors);
console.log(instance1, instance2);

console.log(instance1.sayAge === instance2.sayAge);
console.log(instance1.sayName === instance2.sayName);
console.log(instance1 instanceof SubType);
console.log(instance1 instanceof SuperType);
console.log(SubType.prototype instanceof SuperType, SubType.prototype);
instance1.sayName();
instance1.sayAge();
instance2.sayName();
instance2.sayAge();
