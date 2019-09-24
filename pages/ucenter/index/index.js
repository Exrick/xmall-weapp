// pages/ucenter/index/index.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isLogin: false,
    order: {
      pay: 1,
      toSend: 0,
      send: 0,
      comment: 0,
      afterSale: 0
    },
    wallet: {
      coupon: 2,
      point: 0,
      red: 3,
      allowance: 0,
      gift: 0
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心'
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
    let userInfo = wx.getStorageSync('userInfo');
    let isLogin = wx.getStorageSync('isLogin');
    // 页面显示
    if (userInfo && isLogin) {
      this.setData({
        userInfo: userInfo,
        isLogin: isLogin
      });
    } else {
      // 未登录信息
      this.setData({
        userInfo: app.globalData.userInfo,
        isLogin: isLogin
      });
    }
    // 动画
    let animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease'
    });
    let next = true;
    let count = 0;
    // 连续动画
    setInterval(function () {
      if(count>3){
        return ;
      }
      if (next) {
        animation.translateX(6).step()
        next = !next;
      } else {
        animation.translateX(0).step()
        next = !next;
      }
      this.setData({
        ani: animation.export()
      })
      count++;
    }.bind(this), 800)
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
  toLogin: function () {
    if (!this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/auth/tologin/tologin',
      })
    }
  },
  checkLogin: function () {
    if (!this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/auth/tologin/tologin',
      })
    }
  },
  toOrder: function (e) {
    this.checkLogin();
    let type = e.currentTarget.id;
    wx.navigateTo({
      url: '/pages/ucenter/order/order?type=' + type,
    })
  },
  toAddress: function () {
    this.checkLogin();
    wx.navigateTo({
      url: '/pages/ucenter/address/index/index'
    })
  },
  toCoupon: function () {
    this.checkLogin();
    wx.navigateTo({
      url: '/pages/ucenter/coupon/coupon'
    })
  },
  toRed: function () {
    this.checkLogin();
    wx.navigateTo({
      url: '/pages/ucenter/red/red',
    })
  },
  toSetting: function () {
    wx.navigateTo({
      url: '/pages/ucenter/setting/setting',
    })
  },
  toVip: function () {
    wx.navigateTo({
      url: '/pages/ucenter/vip/vip',
    })
  }
})