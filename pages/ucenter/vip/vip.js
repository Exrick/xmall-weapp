// pages/ucenter/vip/vip.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picList: [
      {
        id: 1,
        picUrl: "https://yanxuan.nosdn.127.net/16d1aa86a8947b1ffa939c6a650dc91d.png"
      },
      {
        id: 2,
        picUrl: "https://yanxuan.nosdn.127.net/a81dd3d443be10cd7d49bdb933869d0d.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '超级会员',
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

  },
  pay: function () {
    Dialog.confirm({
      message: '开通成功'
    })
  },
  tryVip: function () {
    Dialog.confirm({
      message: '开通成功'
    })
  }
})