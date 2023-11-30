// class Vehicle {}

// class Bus extends Vehicle {}

// let b = new Bus();
// console.log(b instanceof Vehicle);
// console.log(b instanceof Bus);

// function Person() {}
// class Engineer extends Person {}

// let e = new Engineer();
// console.log(e instanceof Engineer);
// console.log(e instanceof Person);

// class Vehicle {
//   identifyPrototype(id) {
//     console.log(id, this);
//   }

//   static identifyClass(id) {
//     console.log(id, this);
//   }
// }

// class Bus extends Vehicle {}

// let v = new Vehicle();
// let b = new Bus();

// b.identifyPrototype("bus");
// v.identifyPrototype("vehicle");

// Bus.identifyClass("Bus");
// Vehicle.identifyClass("Vehicle");

// // 2.构造函数 HomeObject 和 super

// class Vehicle {}
// class Car extends Vehicle {}
// class Bus extends Vehicle {}
// class Van extends Vehicle {
//   constructor() {
//     return {};
//   }
// }

// console.log(new Car()); // Car {}
// console.log(new Bus()); // Bus {}
// console.log(new Van()); // {}

// 6.3  抽象基类, 只提供给其他类继承不能被实例化
// 通过new.target 实现

class Vehicle {
  constructor() {
    console.log(new.target, "??");
    if (new.target === Vehicle) {
      throw new Error("Vehicle cannot be directly instantiated");
    }

    if (!this.foo) {
      throw new Error("Inheriting class must define foo()");
    }
  }
}

class Bus extends Vehicle {}
new Bus();
new Vehicle();
