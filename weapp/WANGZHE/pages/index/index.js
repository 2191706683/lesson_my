// index.js
// 获取应用实例
const app = getApp()

Page({
  // 数据， {{}}  驱动模板显示
  data: {
   nav: [],
   heroList: [],
  },
  // 声明周期事件
  onLoad() {
    // 从客户端 去到 服务器端取数据
    // https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero    // js 主动得向api 发送请求，把数据请求到本地来
    // 微信 request
    wx.showLoading({
      title:'加载中...'
    })
    wx.request({
      url: 'https://www.fastmock.site/mock/3ddf189404196ed14cb6531bf3596081/vue/hero',
      // 成功请求后
      success: (res)=> {
        // console.log(res)
        wx.hideLoading()
        // http statusCode 200 服务器端没有任何错误发生
        // if (res.statusCode === 2000) {
          if (res.errMsg === "request:ok") {
         /*  // 解析res 数据
          let nav = res.data.nav
          // console.log(nav)
          let heroList = res.data.heroList
          console.log(heroList) */
          // es6 语法 解构
          let data = res.data;
          let { nav,heroList } = data  // JSON
          // console.log(nav, heroList)
          // console.log(this,'````````````')
          // API 设置数据
          // this  指向Page对象
          // setData 方法
          // this.data.nav = nav
          /* 
            设置 data 数据，必须调用小程序 this.setData({})
            设置的同时 自动重新渲染模板
          */
          this.setData({
            nav: nav,
            heroList: heroList
          })
        }
      },
      // 失败后得回调
      fail: ()=> {
        console.log('error')
      }
    })
  }
})
