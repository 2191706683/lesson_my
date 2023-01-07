// index.js
// 获取应用实例
const app = getApp()
Page({
  data: {
    active: 1,
  },
  // 事件处理函数
  onLoad(options) {
    wx.request({
      url: 'https://www.fastmock.site/mock/86972139cfd668eaea8d8f030f197ea0/jrtt/index',
      success: (res) => {
        const { 
          exploreTop, 
          recommendTop, 
          exploreList, 
          recommendList, 
          hot
        } = res.data
        this.setData({
          exploreTop,
          recommendTop,
          exploreList,
          recommendList,
          hot
        })
      }
    })
    
  },
})
