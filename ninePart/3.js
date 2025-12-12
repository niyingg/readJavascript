function median(...nums) {
  console.log(...nums);
  return nums.sort()[Math.floor(nums.length / 2)];
}
const proxy = new Proxy(median, {
  apply(target, thisArg, argumentsList) {
    console.log(target, thisArg, argumentsList, "??");
    for (const arg of argumentsList) {
      if (typeof arg !== "number") {
        throw "Non-number argument provided";
      }
    }
    return Reflect.apply(...arguments);
  },
});

console.log(proxy(4, 7, 1)); // 4
// console.log(proxy(4, "7", 1));
// Error: Non-number argument provided

const nums = [4, 7, 1];

// apply的用法

