// 问题：
//   1.代理有什么用途
//   2.代理有什么好处
//   3.含义

// 通过Proxy构造函数创建一个 和目标对象相同的对象，
// 目标对象和代理对象指向同一个指针。在代理对象上做的操作，也会在目标对象上体现出来
const target = {
  id: "target",
};

const handler = {};
const proxy = new Proxy(target, handler);
proxy.id = "foo";

console.log(target.id);
console.log(proxy.id);

// Proxy.prototype 是 undefined
// 因此不能使用 instanceof 操作符
// console.log(proxy instanceof Proxy);

// hasOwnProperty()看属性是否存在于实例上
console.log(target.hasOwnProperty("id")); // true
console.log(proxy.hasOwnProperty("id")); // true

class Example {}

console.log(Example.prototype, Proxy.prototype);

// !严格相等可以用来区分代理和目标

console.log(target === proxy);
