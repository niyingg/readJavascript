// *定义捕获器
// *使用代理的主要目的是可以定义捕获器;在基本操作比如读写时，代理可以在这些操作传播到对象之前先调用捕获器函数，从而拦截并修改相应的行为

// 定义 get()捕获器

// *此时get()会被调用： proxy[property]、proxy.property 或 Object.create(proxy)[property]
const target = {
  foo: "bar",
};

const handler = {
  get() {
    return "override";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
console.log(target.get);

console.log(proxy["foo"]);
console.log(Object.create(proxy)["foo"]);
