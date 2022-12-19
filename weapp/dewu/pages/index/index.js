// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    goods: {
      title: '美国伽力果（约680g/3个）',
      price: 2680,
      formatPrice: '',
      express: '免运费',
      remain: 19,
      thumb:
        'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
    }
  },
  onLoad() {
    // data.goods
    const { goods } = this.data // es6
    const { p } = this.data
    
    const formatPrice = `￥${(goods.price / 100).toFixed(2)}`
    this.setData({
      goods: {
        // 展开运算符
        ...goods,
        formatPrice
      }
    })
  }
  // 事件处理函数
})
