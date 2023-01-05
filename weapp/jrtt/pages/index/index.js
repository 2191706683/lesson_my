// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 1,
    exploreTop:[]
  
  },
  // 事件处理函数
  onLoad(options) {
    // const exploreTop = app.globalData.exploreTop
    // const recommendTop = app.globalData.recommendTop
    // const exploreList = app.globalData.exploreList
    // const recommendList = app.globalData.recommendList
    // const hot = app.globalData.hot
    this.setData({
      // exploreTop: app.globalData.exploreTop,
    //   recommendTop: app.globalData.recommendTop,
    //   exploreList: app.globalData.exploreList,
    //   recommendList: app.globalData.recommendList,
    //   hot: app.globalData.hot
    })
  },
})
