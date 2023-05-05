// es6 企业级 大型项目 面向对象的能力
// private extends
// 唯一值，没必要，也不会去记忆
// 私有方法？ 类的方法，共内部使用，隐藏实现的细节
const _privateMethod = Symbol('privateMethod');
class MyClass {
  constructor() {
    this[_privateMethod] = () => {
      console.log('This is a private method.');
    };
  }
  publicMethod() {
    // symbol 私有方法的调用方法
    this[_privateMethod]();
  }
}
const obj = new MyClass();
obj.publicMethod(); // 输出 "This is a private method."
obj[_privateMethod](); // 报错，私有方法无法访问