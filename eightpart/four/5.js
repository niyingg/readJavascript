// 迭代器与生成器
class Person {
  *createIterator() {
    yield 1;
    yield 2;
    yield 3;
  }
  static *createJobIterator() {
    yield "butcher";
    yield "baker";
    yield "Candlestick maker";
  }
}

let jobIter = Person.createJobIterator();
console.log(jobIter.next());
console.log(jobIter.next());
console.log(jobIter.next());
console.log(jobIter.next());

let p = new Person();

let iter = p.createIterator();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

console.log(Person.prototype, p.__proto__);

// 支持生成器方法， 通过添加一个默认的迭代器，把实例变成可迭代对象
class Person1 {
  constructor() {
    this.nicknames = ["jack", "nu", "88"];
  }

  [Symbol.iterator]() {
    return this.nicknames.entries();
  }
}

let p1 = new Person1();
for (let [idx, nickname] of p1) {
  console.log(idx, nickname);
}

const [d, v, n] = p1;
console.log(d, v, n, "7777");

class Example {
  *createIterator() {
    yield 1;
    yield 2;
  }
  static *create() {
    yield 3;
  }
}

let a = new Example();

const b = Example.create();
const c = a.createIterator();
const [aa] = c;

console.log(aa, "====");
