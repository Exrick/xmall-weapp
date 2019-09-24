// component/coupon/coupon.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toUse: function (e) {
      wx.switchTab({
        url: '/pages/index/index'
      })
    },
    changeShowDesc: function (e) {
      this.setData({
        'data.showAll': !this.data.data.showAll
      })
    },
    toGet: function(e){
      this.setData({
        'data.get': true
      })
      this.triggerEvent('get');
    },
    onSelect: function(){
      this.triggerEvent('select');
    }
  }
})
