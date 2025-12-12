class Counter {
  // Counter的实例应该迭代limit次
  constructor(limit) {
    this.limit = limit;
  }

  [Symbol.iterator]() {
    let count = 1;
    let limit = this.limit;
    return {
      next() {
        if (count <= limit) {
          return { done: false, value: count++ };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        console.log("exit");
        return { done: true };
      },
    };
  }
}
let count = new Counter(3);
for (let i of count) {
  console.log(i);
}

for (let i of count) {
  console.log(i, "--");
}

let counter1 = new Counter(5);
for (let i of counter1) {
  if (i > 2) {
    break;
  }
  console.log(i);
}

let a = [1, 2, 3, 4, 5];
let iter = a[Symbol.iterator]();
for (let i of iter) {
  console.log(i);
  if (i > 2) {
    break;
  }
}
// 1
// 2
// 3
for (let i of iter) {
  console.log(i);
}
// 4
// 5
