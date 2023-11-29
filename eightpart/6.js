// 原型的动态属性

// 就是访问属性和对prototype赋值的先后顺序;

/**
 * 原型的动态性
 */

// -----------------------1------------------------------
// function Person() {}

// Person.prototype = {};

// Object.defineProperty(Person.prototype, "constructor", {
//   enumerable: false,
//   value: Person,
// });

// // 先创建实例，后修改原型，可以得到反映
// var per1 = new Person();
// Person.prototype.sayHi = function () {
//   console.log("Hi");
// };
// console.log(per1.sayHi()); //Hi

// ------------------------------------------ 分割线------------------------------------------

// ------------------2--------------------
// function Person() {}
// Person.prototype = {};
// let friend = new Person();
// // Person.prototype = {
// //   sayName: function () {
// //     console.log("HYY");
// //   },
// // };

// // Person.prototype.sayName = function () {
// //   console.log("HYY");
// // };

// friend.sayName(); // 错误

// 原型的动态性，可以Person.prototype.XX 进行添加属性，不会报错
// 若在 Person.prototype ={} 之前 实例化的对象访问 重写后的属性就会报错

// 3.原生对象原型

console.log(typeof Array.prototype.sort);
console.log(typeof String.prototype.startsWith);
console.log("12345".startsWith("1"));

// 原型的问题, 不同的实例会有相同的属性
function Person() {}

Person.prototype = {
  constructor: Person,
  name: "Nicho",
  age: 29,
  job: "soft",
  friends: ["shelby", "Court"],
  sayName() {
    console.log(this.name);
  },
};

let person1 = new Person();
let person2 = new Person();

person1.friends.push("Van");
console.log(person1.friends);
console.log(person2.friends);
