[什么是冒泡排序？](https://juejin.cn/post/6844903688415215624)

- markdown
- 冒泡排序  Bubble sort
    1. 排序
        很多种
    2. 交换
    3. 相邻   i < i+1  不换， 否则换？
    4. 有序区域 j < length - i - 1 第一波优化  length - i - 1
        length - 1 -i   有序区的长度和排序的轮数
    5. 稳定排序  算法的可靠性
    6. 边界？ 最后交换的位置？
        
    交换排序 (位置， 从小到大， 从大到小)
- 最小值和最大值，不能传整个数组，使用es6 的展开运算符， 就很nice
    Math.min()
    Math.max()
    sort?  js 内置的排序方法
    
- 如何写出一个高质量的冒泡排序
    1. 当在一次冒泡的内层循环中， 一次交换都没有发生
        通过检测本轮是否由交换？ 如果没有， 待排序区域已有序， 可以
        退出， isSorted 布尔值
    2. 基于isSorted 布尔值优化
        如果后半段 有序， 还可以再优化
    