// app.js
App({
  onLaunch() {
    wx.request({
      url: 'https://www.fastmock.site/mock/86972139cfd668eaea8d8f030f197ea0/jrtt/home',
      success: (response) => {
        const { 
          exploreTop, 
          recommendTop, 
          exploreList, 
          recommendList,
          hot,
          gridList,
          viedoList 
        } = response.data
        this.globalData.exploreTop = exploreTop
        this.globalData.recommendTop = recommendTop
        this.globalData.exploreList = exploreList
        this.globalData.recommendList = recommendList
        this.globalData.hot = hot
        this.globalData.gridList = gridList
        this.globalData.viedoList = viedoList
      }
    })
  },
  globalData: {
    exploreTop: null, 
    recommendTop: null, 
    exploreList: null, 
    recommendList: null,
    hot: null,
    gridList: null,
    viedoList: null 
  }
})
