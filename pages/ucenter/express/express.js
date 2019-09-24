// pages/ucenter/express/express.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    express: {
      company: "顺丰速运",
      expno: "456388615153",
      detail: [
        {
          text: '已签收(丰巢签收),感谢使用顺丰,期待再次为您服务',
          desc: '2018-06-01 15:40:38'
        },
        {
          text: '快件交给贺金，正在派送途中（联系电话：15683035597）',
          desc: '2018-05-31 19:20:44'
        },
        {
          text: '快件已发车',
          desc: '2018-06-01 06:00:03'
        },
        {
          text: '快件到达 【重庆渝北集散中心】',
          desc: '2018-06-01 03:38:22'
        },
        {
          text: '快件已发车',
          desc: '2018-06-01 06:00:03'
        },
        {
          text: '快件到达 【成都双流集散中心】',
          desc: '2018-05-31 19:20:44'
        },
        {
          text: '包裹已交付顺丰快递',
          desc: '2018-05-31 20:50:53'
        },
        {
          text: '您的订单打包完成，已出库',
          desc: '2018-05-31 15:39:42'
        },
        {
          text: '您的订单已经开始拣货',
          desc: '2018-05-31 14:45:39'
        },
        {
          text: '订单提交成功',
          desc: '2018-05-31 14:25:57'
        }
      ]
    },
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '物流信息',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})