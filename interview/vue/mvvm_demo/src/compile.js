import Watcher from './watcher';

function Compile(el, vm) {
    this.vm = vm; // title -> vm.data.title
    this.el = document.querySelector(el)
    this.fragment = null; // 文档碎片 性能优化
    this.init();
}

Compile.prototype = {
    init: function() {
        if (this.el) {
            this.fragment = this.nodeToFragment(this.el);
            this.compileElement(this.fragment);
            this.el.appendChild(this.fragment);
        } else {
            console.log('DOM元素不存在')
        }
    },
    nodeToFragment: function(el) {
        // console.log(el);
        var fragment = document.createDocumentFragment();
        var child = el.firstChild;
        // console.log(child);
        while(child) {
            fragment.appendChild(child);
            child = el.firstChild;
        }
        return fragment;
    },
    compileElement: function(el) {
        var childNodes = el.childNodes;
        var self = this;
        [].slice.call(childNodes).forEach(function(node) {
            // console.log(node,'sdfds');
            var reg = /\{\{(.*)\}\}/;
            var text = node.textContent; // 文本节点
            if (self.isElementNode(node)) { // 元素节点
                self.compile(node); // 指令事件
            } else if (self.isTextNode(node) && reg.test(text)) {
                self.compileText(node, reg.exec(text)[1]);
            }
            
            // 递归
            if (node.childNodes && node.childNodes.length) {
                self.compileElement(node);
            }
        });
    },
    compile: function (node){
        var nodeAttrs = node.attributes;
        var self = this;
        Array.prototype.forEach.call(nodeAttrs, function(attr) {
            var attrName = attr.name;
            if (self.isDirective(attrName)) {
                var exp = attr.value; // 属性名
                var dir = attrName.substring(2); // on:click | model
                if (self.isEventDirective(dir)) {
                    self.compileEvent(node, self.vm, exp, dir)
                } else {
                    self.compileModel(node, self.vm, exp, dir);
                }
                node.removeAttribute(attrName);
            }
        })
    },
    isDirective: function(attr) {
        return attr.indexOf('v-') === 0;
    },
    isEventDirective: function(dir) {
        return dir.indexOf('on:') === 0;
    },
    compileEvent: function(node, vm, exp, dir) {
        var eventType = dir.split(':')[1]; // ['on', 'click'] click
        var cb = vm.methods && vm.methods[exp];
        if (eventType && cb) {
            node.addEventListener(eventType, cb.bind(vm), false);
        }
    },
    compileModel: function(node, vm, exp, dir) {
        // var self = this;
        // node.addEventListener('input', self.compileInput(node, exp), false);
    },
    compileText: function (node, exp) {
        var self = this;
        var initText = this.vm[exp]; // 数据 this.vm.data[exp]
        // console.log(initText);
        this.updateText(node, initText);
        // 将这个节点添加到订阅者中
        // 实例化订阅者
        new Watcher(this.vm, exp, function(value) {
            self.updateText(node, value);
        })
    },
    isElementNode: function(node) {
        return node.nodeType == 1;
    },
    isTextNode: function(node) {
        return node.nodeType == 3;
    },
    updateText: function(node, value) {
        node.textContent = typeof value == 'undefined' ? '' : value;
    }
}

export default Compile;