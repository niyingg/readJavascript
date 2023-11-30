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
yetAnotherPerson.friends.push("13");

console.log(yetAnotherPerson.name, anotherPerson.name);

let anotherPerson1 = Object.create(person, {
  name: {
    value: "Greg",
  },
  friends: {
    value: ["1"],
  },
});
anotherPerson1.name = "212";
anotherPerson1.friends.push("122");

let yetAnotherPerson1 = Object.create(person);
yetAnotherPerson1.name = "Lind2a";
yetAnotherPerson1.friends.push("123");

console.log(yetAnotherPerson1.name, anotherPerson1.name);
console.log(yetAnotherPerson1.friends, anotherPerson1.friends);
