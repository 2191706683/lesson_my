// app.js
// require 关键字
const WXAPI = require('apifm-wxapi') // 第三方
// console.log(WXAPI)
const { subDomain, merchantId } = require('config.js') // 自建模块
App({
  onLaunch() {
    //  刚启动的时候
    // 初始化一下 WXAPI
    WXAPI.init(subDomain)
    WXAPI.setMerchantId(merchantId)
    // 测试一下请求
    // 商品分类接口 异步
    /* WXAPI.goodsCategory()
      // then 等http 请求完成后
      .then(data => {
        // 拿到数据并打印
        console.log(data)
      }) */
      
  },
  globalData: {
    
  }
})
