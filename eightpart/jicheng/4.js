// 寄生式继承

// 寄生构造函数和工厂模式;
function createAnother(original) {
  var clone = Object.create(original);
  clone.sayHi = function () {
    console.log("hi");
  };
  return clone;
}

let person = {
  name: "Nicholas",
  friends: ["Shelby", "Court", "Van"],
};

let anotherPerson = createAnother(person);
anotherPerson.sayHi();
