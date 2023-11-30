// * 捕获器参数和反射api

// get()捕获器会接收到目标对象、要查询的属性和代理对象三个参数

const target = {
  foo: "bar",
  msg: "2323",
};

const handler = {
  get(trapTarget, property, receiver) {
    console.log(trapTarget === target);
    console.log(property);
    console.log(receiver);
    return trapTarget[property];
  },
};

const target1 = {
  foo: "bar",
};

// * 可以通过全局Reflect对象上的同名方法来轻松重建原始行为
const handler1 = {
  get: Reflect.get,
};

const a = new Proxy(target1, handler1);

console.log(a.foo);
console.log(target1.foo);

const target3 = {
  foo: "bar",
  baz: "qux",
};
const handler3 = {
  get(trapTarget, property, receiver) {
    let decoration = "";
    if (property === "foo") {
      decoration = "!!!";
    }
    return Reflect.get(...arguments) + decoration;
  },
};
const proxy3 = new Proxy(target3, handler3);
console.log(proxy3.foo); // bar!!!
console.log(target3.foo); // bar
console.log(proxy3.baz); // qux
console.log(target3.baz); // qux
