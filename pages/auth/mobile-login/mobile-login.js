// pages/auth/mobile-login/mobile-login.js
import { $wuxToptips } from '../../../lib/wux-weapp/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    loginLoading: false,
    mobile: "",
    code: "",
    errorMsg: "",
    getSms: "发送验证码",
    sended: false,
    count: 60
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  onChangeMobile: function (e) {
    this.setData({
      mobile: e.detail
    })
  },
  onChangeCode: function (e) {
    this.setData({
      code: e.detail
    })
  },
  sendCode: function () {
    if (!this.data.mobile) {
      this.setData({
        errorMsg: "请输入手机号"
      })
      return;
    }
    let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    if (!reg.test(this.data.mobile)) {
      this.setData({
        errorMsg: "手机号格式错误"
      })
      return;
    }
    // 模拟发送成功
    this.setData({
      loading: true
    })
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: false,
        sended: true
      })
      $wuxToptips().success({
        text: '发送短信验证码成功'
      })
      // 开始倒计时
      that.countDown();
    }, 1000)
  },
  countDown: function () {
    let that = this;
    let count = this.data.count;
    count--;
    if (count == 0) {
      this.setData({
        sended: false,
        count: 60,
        getSms: "发送验证码"
      })
      return;
    }
    setTimeout(function () {
      that.setData({
        count: count,
        getSms: count + " 秒后重试"
      })
      that.countDown();
    }, 1000)
  },
  login: function () {
    if (!this.data.mobile) {
      this.setData({
        errorMsg: "请输入手机号"
      })
      return;
    }
    let reg = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    if (!reg.test(this.data.mobile)) {
      this.setData({
        errorMsg: "手机号格式错误"
      })
      return;
    }
    if (!this.data.code) {
      this.setData({
        errorMsg: "请输入短信验证码"
      })
      return;
    }
    this.setData({
      errorMsg: ""
    })
    // 模拟登录成功
    this.setData({
      loginLoading: true
    })
    let that = this;
    setTimeout(function () {
      that.setData({
        loginLoading: false
      })
      // 记录登录标识
      wx.setStorageSync('isLogin', true);
      // 返回上一级
      wx.navigateBack({
        delta: 2
      })
    }, 1000)
  },
  passLogin: function () {
    wx.redirectTo({
      url: '/pages/auth/pass-login/pass-login',
    })
  }
})