// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    noChecked: false,
    checkedAll: false,
    isExpressFree: false,
    restExpressFree: 0,
    isPromotion: false,
    restPromotion: 0,
    totalPrice: 0,
    totalCount: 0,
    cartList: [
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
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
    let isLogin = wx.getStorageSync('isLogin');
    // 页面显示
    if (isLogin) {
      this.setData({
        isLogin: isLogin
      });
    }
    // 读取购物车缓存数据
    let cartList = wx.getStorageSync("cartList");
    // 模拟数据
    if (!cartList) {
      let data = [{
        id: 1,
        checked: false,
        picUrl: 'https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png',
        title: '畅呼吸智能空气净化器',
        spec: '标准版 白色',
        count: 1,
        maxNum: 99,
        price: 1299.00
      },
      {
        id: 2,
        checked: true,
        picUrl: 'https://yanxuan.nosdn.127.net/e9cecc7cb24a8d7745da1c99b87dde08.png',
        title: '丛林系列·缝线笔记本 4本装',
        spec: '丛林系列',
        count: 1,
        maxNum: 99,
        price: 29.00
      }];
      this.setData({
        cartList: data
      });
      wx.setStorageSync("cartList", cartList);
    } else {
      this.setData({
        cartList: cartList
      })
    }
    this.setCheckedTotalPrice();
    this.setCheckedTotalCount();
    this.judgeCheckedAll();
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
  changeCheck: function (e) {
    let index = e.currentTarget.dataset.index;
    this.setData({
      [`cartList[${index}].checked`]: e.detail
    })
    this.setCheckedTotalPrice();
    this.setCheckedTotalCount();
    this.judgeCheckedAll();
  },
  changeCount: function (e) {
    let v = e.detail.value;
    let index = e.currentTarget.dataset.index;
    this.setData({
      [`cartList[${index}].count`]: v
    })
    this.setCheckedTotalPrice();
    this.setCheckedTotalCount();
  },
  setCheckedTotalPrice: function () {
    let totalPrice = 0;
    this.data.cartList.forEach(function (v) {
      if (v.checked) {
        totalPrice += v.price * v.count
      }
    })
    this.setData({
      totalPrice: totalPrice
    })
    this.judgeExpressFree();
    this.judgePromotion();
  },
  judgeCheckedAll: function () {
    let noChecked = true;
    this.data.cartList.forEach(function (v) {
      if (v.checked) {
        noChecked = false;
        return;
      }
    })
    let checkedAll = true;
    this.data.cartList.forEach(function (v) {
      if (!v.checked) {
        checkedAll = false;
        return;
      }
    })
    this.setData({
      noChecked: noChecked,
      checkedAll: checkedAll
    })
  },
  judgeExpressFree: function () {
    if (this.data.totalPrice >= 88) {
      this.setData({
        isExpressFree: true
      })
    } else {
      let rest = 88 - this.data.totalPrice;
      this.setData({
        isExpressFree: false,
        restExpressFree: rest
      })
    }
  },
  judgePromotion: function () {
    if (this.data.totalPrice >= 130) {
      this.setData({
        isPromotion: true
      })
    } else {
      let rest = 130 - this.data.totalPrice;
      this.setData({
        isPromotion: false,
        restPromotion: rest
      })
    }
  },
  changeCheckedAll: function (e) {
    this.setData({
      checkedAll: e.detail
    });
    for (let i = 0; i < this.data.cartList.length; i++) {
      this.setData({
        [`cartList[${i}].checked`]: e.detail
      })
    }
    this.setCheckedTotalPrice();
    this.setCheckedTotalCount();
    this.judgeCheckedAll();
  },
  setCheckedTotalCount: function () {
    let totalCount = 0
    this.data.cartList.forEach(function (v) {
      if (v.checked) {
        totalCount += v.count
      }
    })
    this.setData({
      totalCount: totalCount
    })
  },
  deleteProduct: function (e) {
    let id = e.currentTarget.dataset.value.id;
    let data = [];
    this.data.cartList.forEach(function (v) {
      if (id != v.id) {
        data.push(v);
      }
    })
    this.setData({
      cartList: data
    })
    this.setCheckedTotalPrice();
    this.setCheckedTotalCount();
    this.judgeCheckedAll();
    this.updateHistory();
  },
  updateHistory: function(e){
    wx.setStorageSync("cartList", this.data.cartList);
  },
  checkout: function () {
    if (this.data.noChecked) {
      return;
    }
    // 购物车数据存入缓存
    wx.setStorageSync("cartList", this.data.cartList);
    wx.setStorageSync("isExpressFree", this.data.isExpressFree);
    wx.setStorageSync("totalPrice", this.data.totalPrice);
    wx.navigateTo({
      url: '/pages/checkout/checkout'
    });
  },
  toChangeOther: function(){
    wx.navigateTo({
      url: '/pages/category/category'
    })
  },
  toBuyOther: function(){
    wx.navigateTo({
      url: '/pages/promotion/promotion?title=加价购凑单区'
    })
  },
  toProduct: function(e){
    wx.navigateTo({
      url: '/pages/product/product?id='+e.currentTarget.dataset.value.id
    })
  }
})