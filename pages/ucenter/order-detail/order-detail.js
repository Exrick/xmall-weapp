// pages/ucenter/order-detail/order-detail.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';

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
    order: {
      // id: '1',
      // orderSn: '20180320',
      // createTime: '2019-08-18 18:35',
      // payType: '微信',
      // productList: [{
      //   id: '1',
      //   picUrl: 'https://yanxuan.nosdn.127.net/1979054e3a1c8409f10191242165e674.png',
      //   title: '常温纯牛奶 250毫升*12盒*2提',
      //   specDesc: '纯牛奶 12盒*2提',
      //   price: 88.00,
      //   count: 1,
      //   status: 1
      // }, {
      //   id: '3',
      //   picUrl: 'https://yanxuan.nosdn.127.net/87eb525e1a7998b7a88f45a86b912e01.jpg',
      //   title: '有道口袋打印机',
      //   specDesc: '口袋打印机',
      //   price: 398.00,
      //   count: 1,
      //   status: 5
      // }],
      // totalPrice: 586.00,
      // expressPrice: 0.00,
      // actualPrice: 586.00,
      // orderStatus: 1
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.setNavigationBarTitle({
      title: '订单详情',
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

    let data = wx.getStorageSync("currOrder");
    this.setData({
      order: data
    })
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
  chooseAddress: function () {
    if (this.data.order.orderStatus != 1) {
      return;
    }
    wx.navigateTo({
      url: '/pages/ucenter/address/index/index?chooseMode=true&addressId=' + this.data.address.id,
    })
  },
  toCall: function () {
    wx.makePhoneCall({
      phoneNumber: '028-8888888'
    })
  },
  toPay: function (e) {
    let actualPrice = this.data.order.actualPrice;
    wx.showModal({
      title: '提示',
      content: '此处需调用微信支付接口',
      showCancel: false,
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          wx.redirectTo({
            url: '/pages/pay-result/pay-result?status=1&actualPrice=' + actualPrice,
          })
        }
      }
    })
  },
  toProduct: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id,
    })
  },
  cancelOrder: function(){
    Dialog.confirm({
      message: '要取消此订单？'
    }).then(() => {
      // on confirm
      this.setData({
        'order.orderStatus': 0
      })
    }).catch(() => {
      // on cancel
    });
  },
  confirmReceive: function (e) {
    Dialog.confirm({
      message: '确收到货物？'
    }).then(() => {
      // on confirm
      let index = e.currentTarget.dataset.index;
      this.setData({
        'order.orderStatus': 4
      })
    }).catch(() => {
      // on cancel
    });
  },
  toComment: function (v) {
    wx.navigateTo({
      url: '/pages/ucenter/to-comment/to-comment'
    })
  },
  toExpress: function (v) {
    wx.navigateTo({
      url: '/pages/ucenter/express/express'
    })
  },
  deleteOrder: function () {
    Dialog.confirm({
      message: '要删除此订单？'
    }).then(() => {
      // on confirm
      wx.navigateBack({
        delta: 1
      })
    }).catch(() => {
      // on cancel
    });
  },
  buyAgain: function (e) {
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/product/product?id=' + this.data.order.productList[index].id
    })
  }
})