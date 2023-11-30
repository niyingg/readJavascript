// 定义存在于实例上的成员，原型上的成员，存在于类本身的成员

// 1。实例成员
class Person {
  constructor() {
    // 添加到 this 的所有内容都会存在于不同的实例上
    this.locate = () => console.log("instance");
  }
  // 在类块中定义的所有内容都会定义在类的原型上
  locate() {
    console.log("prototype");
  }
}
let p = new Person();
p.locate(); // instance
Person.prototype.locate(); // prototype

console.log(Person.prototype);
