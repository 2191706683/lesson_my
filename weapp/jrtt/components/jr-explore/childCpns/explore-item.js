// components/jr-explore/childCpns/explore-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show() {
      let isShow = !this.data.isShow
      this.setData({
        isShow: isShow
      })
    }
  },
})
