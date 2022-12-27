// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 2,
    tab:["关注","推荐","探索","热榜","发现","视频","小说","懂车帝"]
  },
  // 事件处理函数
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
})
