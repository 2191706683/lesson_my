// index.js
// 获取应用实例
const app = getApp()
const WXAPI = require('apifm-wxapi')
Page({
  data: {
    search:'',
    categories: [], // 左边的分类列表
    currentGoods: [], // 当前商品列表
    activeCategory: 0
  },
  bindconfirm(e) {
    console.log(e, e.detail)
    // this.setData()
    let search = e.detail
    this.setData({
      search: search
    })
    wx.navigateTo({
      url: `/pages/goods/list?name=${search}`
    })
  },
  searchscan() {
    wx.scanCode({
      scanType:['barCode', 'qrCode'],
      success: res => {
        this.setData({
          search:res.result
        })
        wx.navigateTo({
          url: `/pages/goods/list?name=${res.result}`
        })
      }
    })
  },
  onCategoryClick(event) {
    console.log(event)
    const idx = event.target.dataset.idx
    this.setData({
      activeCategory: idx
    })
  },
  // 事件处理函数
  onLoad() {
   /*  let ticket
    // 分享
    wx.showShareMenu({
      withShareTicket:ticket
    }) */
    // 面向对象 分离
    this.categories()
  },
  // 请求分类数据
  categories() {
    wx.showLoading({
      title: '加载中...',
    })
    WXAPI
        .goodsCategory()
        .then(res => {
          console.log(res)
          wx.hideLoading()
          // 没有发送错误
          if (res.code == 0) {
            const categories = res.data
            this.setData({
              categories
            }
            )
          }
        })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
