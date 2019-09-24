// pages/ucenter/setting/setting.js
import Toast from '../../../lib/vant-weapp/toast/toast';
import Dialog from '../../../lib/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '设置',
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
  onChange: function (e) {
    this.setData({
      checked: e.detail
    })
  },
  clearStorage: function () {
    wx.clearStorage();
    Toast("清理成功");
  },
  about: function(){
    Dialog.alert({
      title: '关于',
      message: '版本号：1.0.0 By: Exrick'
    }).then(() => {
      // on close
    });
  }
})