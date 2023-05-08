// 内存
// LRU 最近最少使用原则 Least Recently Used  垃圾回收的，内存回收
// 2 capacity 容量
// 存储结构  Map  set  get
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity; // 容器
        this.cache = new Map(); // 存储结构
    }
    get (key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value) // 跟新了进入map 时间
            return value;
        }
    }
    set (key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey)
        }
    }
}

const cache = new LRUCache(2);
cache.set('key1', 'value1'); // Mp
cache.set('key2', 'value2');
console.log(cache.get('key1')); // 时间戳
cache.set('key3', 'value3'); // 1. key3 存 key2 删除 
console.log(cache.get('key2')); 
console.log(cache.get('key1')); // key1 比 key3 最近使用频率
cache.set('key4', 'value4');
console.log(cache.get('key3')); // -1
console.log(cache.get('key1')); // value1
console.log(cache.get('key4')); // value4