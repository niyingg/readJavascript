// 工厂模式
function createPerson(name, age) {
  let person = new Object();
  person.name = name;
  person.age = age;
  person.say = function () {
    console.log(`我是${this.name}我${this.age}岁了`);
  };

  return person;
}

const person1 = createPerson("ny", 29);
const person2 = createPerson("fz", 30);

console.log(person1.name, person1.age, person1.say());
console.log(person2.name, person2.age, person2.say());
