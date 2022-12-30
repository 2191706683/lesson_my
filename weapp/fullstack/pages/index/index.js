// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    banners: []
  },
  // 事件处理函数
  onLoad() {
    this.loadBanners()
  },
  loadBanners() {
    wx.request({
      url: 'http://localhost:3000/banners',
      // url: 'https://www.fastmock.site/mock/995214af813bc47208cf2fcb558907e6/mall/banners',
      success:(res) => {
        // console.log(res)
        const data = res.data.data
        this.setData({
          banners: data
        })
      },
      fail:(err) => {
        console.log(err)
      }
    })
  },
  gotoDetail(e) {
    // console.log(e)
    const id = e.currentTarget.dataset.id
    if (id) {
      wx.navigateTo({
        url: `/pages/detail/detail?${id}`,
      })
    }
  },
})
