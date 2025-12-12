const target = {
  id: "target",
};

const handler = {
  apply(a, b, c) {
    console.log(a, b, c, "----");
    return Reflect.get(...arguments);
  },
};

const proxy = new Proxy(target, handler);

// target.id = "foo";

// console.log(target.id);
console.log(proxy.id);

proxy.id = "3444";
// console.log(target.id);
console.log(proxy.id);

console.log(target.hasOwnProperty("id")); // true
console.log(proxy.hasOwnProperty("id")); // true
