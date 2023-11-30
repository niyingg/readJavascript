// * 捕获器不变式，定义捕获器应该遵循这个规律
const target = {};
Object.defineProperty(target, "foo", {
  configurable: false,
  writable: false,
  value: "bar",
});

// * 目标对象不可配置不可写，在捕获器返回一个与该属性不同的值时会抛出TypeError
const handler = {
  get() {
    return "qux";
  },
};

const proxy = new Proxy(target, handler);

console.log(proxy.foo);
// TypeError: 'get' on proxy: property 'foo' is a read-only
// and non-configurable data property on the proxy target
// but the proxy did not return its actual value
//(expected 'bar' but got 'qux')
