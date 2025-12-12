// 生成器 拥有在一个函数块内暂停和恢复代码执行的能力
//生成器函数声明

// let generatorFn = function* () {};

let foo = {
  *generatorFn() {},
};

class Foo {
  *generatorFn() {}
}

class Bar {
  static *generatorFn() {}
}

// function* generatorFn() {}
// const g = generatorFn();

// console.log(g);
// console.log(g.next());

function* generatorFn() {
  yield "foo";
  yield "bar";
  return "baz";
}
let generatorObject = generatorFn();
console.log(generatorObject.next()); // { done: false, value: undefined }
console.log(generatorObject.next()); // { done: true, value: undefined }
console.log(generatorObject.next()); // { done: true, value: undefined }
