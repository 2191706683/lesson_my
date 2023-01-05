// pages/video/video.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* viedoList: [
      {
        id: 1,
        pic: "https://p3-passport.byteimg.com/img/user-avatar/f6aa5172433d44799ebe53f5938e6e2a~100x100.awebp",
        author: "厚大罗翔说刑法",
        article: "我天天晚上做梦都想着把张三干掉！罗翔说刑法",
        "video": "https://resources.ninghao.net/landrover/finding-adventure-at-home-480.mp4",
        "image": "https://resources.ninghao.net/landrover/finding-adventure-at-home-480.jpg",
        "duration_raw": 269,
        "duration": "04:30"
      },
      {
        id: 2,
        pic: "https://i2.hdslb.com/bfs/face/f79272ca6852d0e1f33c1e755c88f360f19cca61.jpg@96w_96h.webp",
        author: "5分钟快读",
        article: "8分钟读完《山海经》：一部挑战人想象力极限的奇书",
        "video": "https://resources.ninghao.net/landrover/fall-field-guide-480.mp4",
        "image": "https://resources.ninghao.net/landrover/fall-field-guide-480.jpg",
        "duration_raw": 60,
        "duration": "01:00"
      },
      {
        id: 3,
        pic: "https://i2.hdslb.com/bfs/face/a7e304166b451e25fde12e44b41e87378c7cabb3.jpg@96w_96h_1c_1s.webp",
        author: "橙天搞笑",
        article: "盘点那些尴尬名场面，看一遍笑一遍，专治不开心",
        "video": "https://resources.ninghao.net/landrover/range-rover-sport-downhill-challenge-480-v3.mp4",
        "image": "https://resources.ninghao.net/landrover/range-rover-sport-downhill-challenge-480.jpg",
        "duration_raw": 339,
        "duration": "05:39"
      },
      {
        id: 4,
        pic: "https://i0.hdslb.com/bfs/face/440299bc8e526a7f7decd986838ac72061a476a2.jpg@96w_96h_1c_1s.webp",
        author: "七小米呀",
        article: "今天的氛围组不错呀，网友：玩的放心，但不开心！",
        "video": "https://resources.ninghao.net/landrover/alive-in-alaska-480-v3.mp4",
        "image": "https://resources.ninghao.net/landrover/alive-in-alaska-480.jpg",
        "duration_raw": 193,
        "duration": "03:13"
      },
    ], */
    currentVid: null,
    currentVideo: null
  },
  play(event){
    // console.log(event)
    if (this.data.currentVid !== null) {
      this.data.currentVideo.pause()
    }
    let vid = event.target.dataset.vid
    const currentVideo = wx.createVideoContext(`video-${vid}`)
    currentVideo.play()
    this.setData({
      currentVideo,
      currentVid: vid
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const viedoList = app.globalData.viedoList
    this.setData({
      viedoList
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})