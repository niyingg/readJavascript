// * 实用反射API
// 1. 反射API与对象API  即 Reflect 和 {}
// 反射API 并不限于捕获处理程序

// 在使用反射 API 时，要记住：
// (1) 反射 API 并不限于捕获处理程序；
// (2) 大多数反射 API 方法在 Object 类型上有对应的方法。
// 通常，Object 上的方法适用于通用程序，而反射方法适用于细粒度的对象控制与操作。

// 状态标记， 就是反射api 会直接返回操作成功或者失败的布尔值
// 可以给代理设置代理
const o = {};
try {
  Object.defineProperty(o, "foo", "bar");
  console.log("success");
} catch (e) {
  console.log("failure");
}
