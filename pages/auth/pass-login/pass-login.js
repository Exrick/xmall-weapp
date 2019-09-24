// pages/auth/pass-login/pass-login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mobile: "",
    password: "",
    errorMsg: "",
    loading: false
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
  onChangePass: function (e) {
    this.setData({
      password: e.detail
    })
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
    if (!this.data.password) {
      this.setData({
        errorMsg: "请输入密码"
      })
      return;
    }
    this.setData({
      errorMsg: ""
    })
    // 模拟登录成功
    this.setData({
      loading: true
    })
    let that = this;
    setTimeout(function () {
      that.setData({
        loading: false
      })
      // 记录登录标识
      wx.setStorageSync('isLogin', true);
      // 返回上一级
      wx.navigateBack({
        delta: 2
      })
    }, 1000)
  },
  mobileLogin: function () {
    wx.redirectTo({
      url: '/pages/auth/mobile-login/mobile-login',
    })
  }
})