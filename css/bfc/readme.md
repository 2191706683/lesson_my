# css 必考题BFC
    Block Formating Context
        Block 占据一行
    Flex Formating Context
        row  不会换行
    我们看到的页面由 哪些规则决定的呢？
    - 文档流
        正常文档流
        脱离文档流
            display:none
            position 不为static
            float 离开文档流
            父元素拿不到子元素的高度？
            <!-- 父元素 定死高度 -->
            弹性布局 子元素在一行上显示， float 在一行上
- 在正常文档流中
    float 会让元素， 离开文档流
    父元素， 不能知晓子元素的大小了
    更严重的问题是？ 文档流会出问题， 下面的盒子会盖到 float 元素
    一定要让父元素拿到 高度，
    在正常文档流中，可以开启新的 BFC  css 魔法就上演了
    html 是最大的BFC 由浏览器自动创建给予
    - 在BFC 环境中， 父元素会将浮动元素参与计算得到高度
    - 创建BFC 的方法
        - overflow: hidden;(推荐)
        - display: inline-block;(缺陷：使父元素变成行内块级)
        - display: flex(缺陷：会变成弹性布局)
        - display: table         
        - position: absolute fixed(缺陷：整体离开文档流)
        - float(浮动)
- 在同一个BFC 里， 垂直方向的距离， 由margin决定
    同一个BFC里相邻margin 会重叠
        
