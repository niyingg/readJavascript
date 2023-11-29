// 原型式继承
function object(o) {
  function F() {}
  F.prototype = o;
  return new F();
}

// object.create() 用法

let person = {
  name: "NI",
  friends: ["sh", "Coun", "van"],
};

let anotherPerson = object(person);
anotherPerson.name = "12";
anotherPerson.friends.push("12");

let yetAnotherPerson = object(person);
yetAnotherPerson.name = "Linda";
