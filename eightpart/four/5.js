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
