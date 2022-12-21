- position  有哪几个值，用法
    relative 告诉它的内部， 相对它进行定位  相对定位
    top:
    left: 针对自己的正常文档流， 定位 偏移

    absolute  绝对定位， 提高文档流 
        相对于离他最近的position:relative|absolute  body
        相对于离他最近的 position属性不为static 的元素定位

    static 可以取消一个元素的定位， 回归正常文档流  取消定位

    fixed 相对于窗口  定位 van-sticky  固定定位

    1. 常用功能  框架
    2. 开始是在正常文档流中
        scroll js  .style.position="fixed" 开启粘连 固定定位