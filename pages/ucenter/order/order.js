// pages/ucenter/order/order.js
import Dialog from '../../../lib/vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    loading: false,
    orderList: [],
    order: [
      {
      id: '1',
      orderSn: '20180320',
      createTime: '2019-08-18 18:35',
      payType: '微信',
      productList: [{
        id: '1',
        picUrl: 'https://yanxuan.nosdn.127.net/1979054e3a1c8409f10191242165e674.png',
        title: '常温纯牛奶 250毫升*12盒*2提',
        specDesc: '纯牛奶 12盒*2提',
        status: 1,
        count: 1,
        price: 88.00
      }],
      totalPrice: 88.00,
      expressPrice: 0.00,
      actualPrice: 88.00,
      orderStatus: 1
    },
    {
      id: '2',
      orderSn: '20180321',
      createTime: '2019-08-18 18:35',
      payType: '微信',
      productList: [{
        id: '2',
        picUrl: 'https://yanxuan.nosdn.127.net/22d0a46bac31ad7f882830e698ed5132.png',
        title: '无损风味 超即溶精品咖啡（24颗入）',
        specDesc: '24颗精品混合装（1-6号）',
        count: 1,
        price: 165.00,
        status: 3
      }],
      totalPrice: 165.00,
      expressPrice: 0.00,
      actualPrice: 165.00,
      orderStatus: 3
    },
    {
      id: '3',
      orderSn: '20180321',
      createTime: '2019-08-18 18:35',
      payType: '微信',
      productList: [{
        id: '3',
        picUrl: 'https://yanxuan.nosdn.127.net/87eb525e1a7998b7a88f45a86b912e01.jpg',
        title: '有道口袋打印机',
        specDesc: '口袋打印机',
        status: 5,
        count: 1,
        price: 239.00
      }, {
        id: '4',
        picUrl: 'https://yanxuan.nosdn.127.net/604941c1a657e49f4114dabb201ab2aa.png',
        title: '智能降温保冷杯',
        specDesc: '帝王黑',
        count: 1,
        price: 159.00,
        status: 5
      }],
      totalPrice: 398.00,
      expressPrice: 0.00,
      actualPrice: 398.00,
      orderStatus: 5
    },
    {
      id: '4',
      orderSn: '20181328',
      createTime: '2019-08-18 18:35',
      payType: '微信',
      productList: [{
        id: '5',
        picUrl: 'https://yanxuan.nosdn.127.net/69a890ff1cfe400c4e2fdaee7d9e598a.png',
        title: '自动喷香机',
        specDesc: '主机+4罐芳香喷雾罐',
        status: 4,
        count: 1,
        price: 99.00
      }],
      totalPrice: 99.00,
      expressPrice: 0.00,
      actualPrice: 99.90,
      orderStatus: 4
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '订单中心',
    })
    // 获取参数
    let type = options.type;
    if (type) {
      this.setData({
        active: type
      })
    }
    // 模拟加载数据
    this.loadData(type)
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
  loadData: function (type) {
    this.setData({
      loading: true
    })
    if (type && type != 0) {
      let data = this.data.order.filter(item => item.orderStatus == type);
      this.setData({
        orderList: data,
        loading: false
      })
    } else {
      let that = this;
      setTimeout(function () {
        that.setData({
          loading: false,
          orderList: that.data.order
        })
      }, 1000)
    }
  },
  changeTab: function (e) {
    let type = e.detail.index;
    // 模拟加载数据
    this.loadData(type)
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  },
  cancelOrder: function (e) {
    Dialog.confirm({
      message: '要取消此订单？'
    }).then(() => {
      // on confirm
      let index = e.currentTarget.dataset.index;
      this.setData({
        [`orderList[${index}].orderStatus`]: 0
      })
      for (let i = 0; i < this.data.orderList[index].productList.length; i++) {
        this.setData({
          [`orderList[${index}].productList[${i}].status`]: 0
        })
      }
    }).catch(() => {
      // on cancel
    });
  },
  deleteOrder: function (e) {
    Dialog.confirm({
      message: '要删除此订单？'
    }).then(() => {
      // on confirm
      let id = e.currentTarget.dataset.value.id;
      let data = [];
      this.data.orderList.forEach(function (v) {
        if (id != v.id) {
          data.push(v);
        }
      })
      this.setData({
        orderList: data
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
        [`orderList[${index}].orderStatus`]: 4
      })
      for (let i = 0; i < this.data.orderList[index].productList.length; i++) {
        this.setData({
          [`orderList[${index}].productList[${i}].status`]: 4
        })
      }
    }).catch(() => {
      // on cancel
    });
  },
  toPay: function (e) {
    let actualPrice = e.currentTarget.dataset.value.actualPrice;
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
  toOrderDetail: function (v) {
    let data = v.currentTarget.dataset.value;
    wx.setStorageSync("currOrder", data);
    wx.navigateTo({
      url: '/pages/ucenter/order-detail/order-detail'
    })
  },
  toComment: function (v) {
    let data = v.currentTarget.dataset.value;
    wx.setStorageSync("currOrder", data);
    wx.navigateTo({
      url: '/pages/ucenter/to-comment/to-comment'
    })
  },
  toExpress: function (v) {
    wx.navigateTo({
      url: '/pages/ucenter/express/express'
    })
  },
  buyAgain: function (e){
    let index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/product/product?id='+this.data.order[index].productList[0].id
    })
  }
})