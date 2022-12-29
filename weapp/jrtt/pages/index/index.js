// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    active: 2,
    tab:["关注","推荐","探索","热榜","发现","视频","小说","懂车帝"],
    exploreTop:[
      {id:"1",title:"习近平同蒙古国总统呼日勒苏赫会谈",up:"置顶",author:"新华社",comment:"1252评论"},
      {id:"2",title:"重磅微视频《航天新征程》",up:"置顶",author:"央视网",comment:"156评论"},
      {id:"3",title:"对于隔离封控人员，如何保障正常就医？",up:"置顶",author:"新华网",comment:"5775评论"},
      {id:"4",title:"北京不断优化社区防控做好服务保障",up:"推荐",author:"光明网",comment:"1776评论"},
      {id:"5",title:"青年参与社区治理助力打开百姓心门",up:"推荐",author:"中国青年报",comment:"0评论 "},
    ],
    recommendTop:[
      {id:"1",title:"从二十大看中国共产党的成功密码之十",up:"置顶",author:"新华杜",comment:"2484评论"},
      {id:"2",title:"学习语|大力推进农业农村现代化",up:"置顶",author:"党建网微平台",comment:"156评论"},
      {id:"3",title:"转需！5个新冠热点进阶科普",up:"置顶",author:"人民日报",comment:"591评论"},
      {id:"4",title:"视频回眸2022|数字记录奋进的中国",up:"推荐",author:"新华网",comment:"74评论"},
      {id:"5",title:"2022,致人海中的那个你",up:"推荐",author:"新华社",comment:"59评论 "},
    ]
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
