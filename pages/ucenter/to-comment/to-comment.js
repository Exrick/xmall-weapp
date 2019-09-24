// pages/ucenter/to-comment/to-comment.js
import Toast from '../../../lib/vant-weapp/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
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
      //   status: 1,
      //   rate: 5,
      //   rateTxt: "非常满意",
      //   comment: "",
      //   commentStatus: 0
      // }, {
      //   id: '3',
      //   picUrl: 'https://yanxuan.nosdn.127.net/87eb525e1a7998b7a88f45a86b912e01.jpg',
      //   title: '有道口袋打印机',
      //   specDesc: '口袋打印机',
      //   price: 398.00,
      //   count: 1,
      //   status: 5,
      //   rate: 5,
      //   rateTxt: "非常满意",
      //   comment: "",
      //   commentStatus: 0
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
      title: '评价',
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
    // 初始化
    data.productList.forEach(v => {
      v.rate = 5;
      v.rateTxt = "非常满意";
      v.comment = "";
      v.commentStatus = 0;
    })
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
  changeInput: function (e) {
    let index = e.currentTarget.dataset.index;
    let v = e.detail;
    this.setData({
      [`order.productList[${index}].comment`]: v
    });
  },
  changeRate: function (e) {
    let index = e.currentTarget.dataset.index;
    let v = e.detail.index;
    let rateTxt = "非常满意";
    if (v == 1) {
      rateTxt = "非常差"
    } else if (v == 2) {
      rateTxt = "差"
    } else if (v == 3) {
      rateTxt = "一般吧"
    } else if (v == 4) {
      rateTxt = "满意"
    }
    this.setData({
      [`order.productList[${index}].rate`]: v,
      [`order.productList[${index}].rateTxt`]: rateTxt
    });

  },
  post: function (e) {
    let index = e.currentTarget.dataset.index;
    let data = this.data.order.productList[index].comment;
    if (!data) {
      Toast("请填写评价")
      return;
    }
    this.setData({
      [`order.productList[${index}].commentStatus`]: 1,
      [`order.productList[${index}].commentTime`]: '2019.08.25 23:27'
    });
    Toast("评论成功");
  }
})