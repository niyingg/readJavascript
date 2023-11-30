//* 可撤销代理
// 中断目标对象和代理对象的联系， revoke
const target = {
  foo: "bar",
};
const handler = {
  get() {
    return "intercepted";
  },
};
const { proxy, revoke } = Proxy.revocable(target, handler);
console.log(proxy.foo); // intercepted
console.log(target.foo); // bar
revoke();
console.log(proxy.foo); // TypeError
