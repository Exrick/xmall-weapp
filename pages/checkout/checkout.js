// pages/checkout/checkout.js
import Toast from '../../lib/vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: {
      id: 1,
      isDefault: true,
      name: 'Exrick',
      mobile: '17621230884',
      address: '四川省成都市武侯区',
      street: '益州大道香月湖7栋188号'
    },
    totalPrice: 0,
    expressPrice: 0,
    actualPrice: 0,
    couponCount: 2,
    coupon: {
      id: "",
      title: "",
      discount: 0
    },
    productList: [

    ],
    agree: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '结算',
    })
    if (options.from == "product") {
      // 直接购买
      let product = wx.getStorageSync("checkoutProduct");
      let sku = wx.getStorageSync("checkoutProductSku");
      this.setData({
        productList: [{
          id: product.id,
          checked: true,
          picUrl: product.picUrl,
          title: product.title,
          spec: sku.specTextNoCount,
          count: sku.count,
          maxNum: sku.quota,
          price: product.price
        }],
        totalPrice: product.price * sku.count
      })
      // 判断运费
      if (product.price >= 88) {
        this.setData({
          expressPrice: 0
        })
      } else {
        this.setData({
          expressPrice: 10
        })
      }
      // 实际价格总计
      let actualPrice = this.data.totalPrice + this.data.expressPrice - this.data.coupon.discount
      this.setData({
        actualPrice: actualPrice
      })
    } else {
      // 购物车结算
      let cartList = wx.getStorageSync("cartList");
      let data = [];
      cartList.forEach(function (v) {
        if (v.checked) {
          data.push(v)
        }
      })
      this.setData({
        productList: data,
        totalPrice: wx.getStorageSync("totalPrice")
      })
      // 判断运费
      if (wx.getStorageSync("isExpressFree") == "true") {
        this.setData({
          expressPrice: 0
        })
      } else {
        this.setData({
          expressPrice: 10
        })
      }
      // 实际价格总计
      let actualPrice = this.data.totalPrice + this.data.expressPrice - this.data.coupon.discount
      this.setData({
        actualPrice: actualPrice
      })
    }
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
  changeAgree: function (e) {
    this.setData({
      agree: e.detail
    })
  },
  chooseAddress: function () {
    wx.navigateTo({
      url: '/pages/ucenter/address/index/index?chooseMode=true&addressId=' + this.data.address.id,
    })
  },
  chooseCoupon: function () {
    if(this.data.couponCount==0){
      Toast("您暂无可用优惠券");
      return;
    }
    wx.navigateTo({
      url: '/pages/ucenter/coupon/coupon?mode=choose&couponId=' + this.data.coupon.id,
    })
  },
  submitOrder: function () {
    if (!this.data.agree) {
      return;
    }
    let actualPrice = this.data.actualPrice;
    wx.showModal({
      title: '提示',
      content: '此处需调用微信支付接口',
      showCancel: false,
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/pay-result/pay-result?status=1&actualPrice=' + actualPrice
          })
        }
      }
    })
  }
})