let str = "abc";
let arr = ["a", "b", "c"];
let map = new Map().set("a", 1).set("b", 2).set("c", 3);
let set = new Set().add("a").add("b").add("c");
// let els = document.querySelectorAll("div");

console.log(str[Symbol.iterator]); // f values() { [native code] }
console.log(arr[Symbol.iterator]); // f values() { [native code] }
console.log(map[Symbol.iterator]); // f values() { [native code] }
console.log(set[Symbol.iterator]); // f values() { [native code] }
// console.log(els[Symbol.iterator]); // f values() { [native code] }

let num = 1;
let obj = {};
console.log(num[Symbol.iterator]); // undefined
console.log(obj[Symbol.iterator]); // undefined

const iter = arr[Symbol.iterator]();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

class Foo {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: false,
          value: "foo",
        };
      },
    };
  }
}

let f = new Foo();
console.log(f[Symbol.iterator]());
let a = new Array();
console.log(a[Symbol.iterator]());
