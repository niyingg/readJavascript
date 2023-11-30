// 类声明 和 类表达式

class Person {} // 类声明
const Animal = class {}; // 类表达式

console.log(FunctionExpression);
var FunctionExpression = function () {}; // 函数表达式
console.log(FunctionExpression);

console.log(FunctionDeclaration); // FunctionDeclaration() {}
function FunctionDeclaration() {}
console.log(FunctionDeclaration); // FunctionDeclaration() {}

// 函数声明可以提升，函数表达式不可以提升

// console.log(Foot); // 类声明不可以提升，会报错
class Foot {}
console.log(Foot);

console.log(Example);
var Example = class {};
console.log(Example);

{
  function A() {}

  class B {}
}

console.log(A);
// 函数受函数作用域限制，类声明受块级作用域限制

//类的构成

let People = class PersonName {
  id() {
    console.log(People.name, PersonName.name);
  }
};
let p = new People();
p.id(); // PersonName PersonName
console.log(People.name); // PersonName
// console.log(PersonName); // ReferenceError: PersonName is not defined
