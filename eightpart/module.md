# 工厂模式

```js
function createPerson(name, age) {
  let person = new Object();
  person.name = name;
  person.age = age;
  person.say = function () {
    console.log(`我是${name}我${age}岁了`);
  };

  return person;
}

const person1 = createPerson("ny", 29);
const person2 = createPerson("fz", 30);
```
