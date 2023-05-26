// 订阅发布者
// vdom js html
import { Dep } from './observer';

function Watcher(vm, exp, cb) {
    this.vm = vm;
    this.exp = exp;
    this.cb = cb;
    this.value = this.get();
};

Watcher.prototype = {
    get: function() {
        Dep.target = this; // 缓存这个watcher
        var value = this.vm.data[this.exp]; // hello world
        Dep.target = null;
        return value;
    },
    update: function() {
        this.run();
    },
    run: function() {
        var value = this.vm.data[this.exp];
        var oldVal = this.value;
        if (value !== oldVal) { // 更新
            this.value = value;
            this.cb.call(this.vm, value, oldVal);
        }
    }
};

export default Watcher;