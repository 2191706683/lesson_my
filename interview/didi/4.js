// es6 企业级 大型项目 面向对象的能力
// private extends
// 唯一值，没必要，也不会去记忆
// 私有方法？ 类的方法，共内部使用，隐藏实现的细节
const Person = (function() {
  const nameSymbol = Symbol('name'); // 定义Symbol作为私有属性的键
  class Person {
    constructor(name) {
      this[nameSymbol] = name; // 使用Symbol作为私有属性的键
    }
    getName() {
      return this[nameSymbol]; // 在类的方法中使用私有属性
    }
  }
  return Person;
})();

const john = new Person('John');
console.log(john.getName()); // 'John'
console.log(john.name); // undefined，无法直接访问私有属性