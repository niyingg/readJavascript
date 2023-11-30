// 继承内置类型;

class SuperArray extends Array {
  shuffle() {
    for (let i = this.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    }
  }
}

// 多继承,类混入
