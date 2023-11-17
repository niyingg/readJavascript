// 原型的动态属性

// 就是访问属性和对prototype赋值的先后顺序;

/**
 * 原型的动态性
 */

function Person() {}

Person.prototype = {};

Object.defineProperty(Person.prototype, "constructor", {
  enumerable: false,
  value: Person,
});

// 先创建实例，后修改原型，可以得到反映
var per1 = new Person();
Person.prototype.sayHi = function () {
  console.log("Hi");
};
console.log(per1.sayHi()); //Hi

// ------------------------------------------ 分割线------------------------------------------

function Person() {}
Person.prototype = {};
let friend = new Person();
Person.prototype = {
  sayName: function () {
    console.log("HYY");
  },
};

Person.prototype = {
  constructor: Person,
  name: "Nicholas",
  age: 29,
  job: "Software Engineer",
  sayName() {
    console.log(this.name);
  },
};
friend.sayName(); // 错误
