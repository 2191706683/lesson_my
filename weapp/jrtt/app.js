// app.js
App({
  onLaunch() {
    wx.request({
      url: 'https://www.fastmock.site/mock/86972139cfd668eaea8d8f030f197ea0/jrtt/home',
      success: (response) => {
        const { gridList, viedoList } = response.data
        this.globalData.gridList = gridList
        this.globalData.viedoList = viedoList
      }
    })
  },
  globalData: {
    gridList: null,
    viedoList: null 
  }
})
