// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
   latitude: 28.71796,
   longitude: 115.826328,
   markers:[],
   map:null
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  toReset() {
    this.data.map.moveToLocation()
  },
  onShow() {
    // 资源都加载完了， 显示在我们面前
    // map  可见
    // console.log('show')
    this.data.map = wx.createMapContext('myMap')

  },
  onLoad() {
    wx.showLoading({
      title: '加载中...',
    })
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        wx.hideLoading()
        // console.log(res,'////')
        let { latitude, longitude } = res
        // console.log(latitude,longitude)
        this.setData({
          latitude: latitude,
          longitude: longitude
        })
        // 模块化
        this.tocreate(res)
      }
    })
  },
  tocreate(res) {
      let ran = Math.ceil(Math.random() * 20 + 5)
      console.log(ran)
      let markers = []
      for(let i = 0; i < ran; i++) {
        let obj = {
          id: i,
          iconPath: '/images/map-bicycle.png',
          callout: {},
          latitude: this.data.latitude + Math.random() / 200,
          longitude: this.data.longitude + Math.random()  /200,
          width: 52,
          height: 30
        } 
        markers.push(obj)
      }
      this.setData({
        markers:markers
      })
  },
  
  
})
