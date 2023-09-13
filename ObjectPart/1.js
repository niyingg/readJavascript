// 理解对象

let person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "software Engineer";
person.sayName = function () {
  console.log(this.name);
};

person = {
  name: "Nicholas",
  age: 29,
  job: "software Engineer",
  sayName() {
    console.log(this.name);
  },
};

// 属性分为两种 数据属性和访问器属性
// 数据属性分为 可配置 configurable enumerable writable value 可以用Object.defineProperty
// 访问器属性 configurable enumerable get set

// let book = {
//   year_: 2017,
//   edition: 1,
// };

// Object.defineProperty(book, "year", {
//   get() {
//     return this.year_;
//   },
//   set(v) {
//     if (v > 2017) {
//       this.year_ = v;
//       this.edition += v - 2017;
//     }
//   },
// });
// book.year = 2018;
// console.log(book.edition, book.year_);

// 定义多个属性 Object.defineProperties

let book = {};

Object.defineProperties(book, {
  year_: {
    value: 2017,
  },
  edition: { value: 1 },
  year: {
    get() {
      return this.year_ + 1;
    },
    set(newValue) {
      console.log(newValue, "vvvv");
      if (newValue > 2017) {
        console.log(888, newValue);
        this.year_ = newValue;
        this.edition += newValue - 2017;
      }
    },
  },
});

console.log(book);
book.year = 2020;
console.log(book.year, book.edition);

let descriptor = Object.getOwnPropertyDescriptor(book, "year");
console.log(descriptor.value);
console.log(descriptor.configurable);
console.log(descriptor.get);
console.log(descriptor.set);

// 合并对象
