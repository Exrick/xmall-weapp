// pages/promotion/promotion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    filters: [
      {
        type: 'text',
        label: '综合',
        value: 'default',
        checked: true,
        groups: ['001'],
      },
      {
        type: 'sort',
        label: '价格',
        value: 'price',
        groups: ['002'],
      }
    ],
    product: [{
      id: 1,
      relateId: 0,
      title: "Smartisan T恤 薛定谔",
      description: "风格简洁、舒适服帖",
      price: 149.00,
      type: 0,
      picUrl: "https://resource.smartisan.com/resource/22f9e824c1cf7e8fad3d432ee494b932.png"
    },
    {
      id: 2,
      relateId: 0,
      title: "记事本",
      description: "优质米色纸、不洇不透",
      price: 49.00,
      type: 0,
      picUrl: "https://resource.smartisan.com/resource/4a38a3678f151ec9c022f5f676c2b7da.jpg"
    }, {
      id: 3,
      relateId: 0,
      title: "坚果砖式蓝牙小音箱",
      description: "一款设计出色、音质出众的随身音箱",
      price: 149.00,
      type: 0,
      picUrl: "https://resource.smartisan.com/resource/c44f0ab4da5591fc3d0f82b7ac0f4f65.jpg"
    },
    {
      id: 4,
      relateId: 0,
      title: "坚果彩虹数据线",
      description: "七彩配色随机发货，为生活增添一份小小惊喜",
      price: 19.00,
      type: 0,
      picUrl: "https://resource.smartisan.com/resource/82aab62886740f165a3631ce6cffe895.jpg"
    },
    {
      id: 5,
      relateId: 0,
      title: "明信片",
      description: "优质卡纸、包装精致、色彩饱满",
      price: 9.90,
      type: 0,
      picUrl: "https://resource.smartisan.com/resource/5ff83a138b1186b0cdf2c76fee2b6e44.jpg"
    },
    {
      id: 6,
      relateId: 0,
      title: "任天堂发售红白机",
      description: "100% 美国 SUPIMA 棉、舒适拉绒质地",
      price: 149.00,
      type: 0,
      picUrl: "https://resource.smartisan.com/resource/804edf579887b3e1fae4e20a379be5b5.png"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.title){
      wx.setNavigationBarTitle({
        title: options.title,
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
  handleClick: function (e) {
    let id = e.currentTarget.dataset.value.id;
    wx.navigateTo({
      url: '/pages/product/product?id=' + id
    });
  },
  onFilterChange: function (e) {
    let price = e.detail.checkedValues[1];
    if (price == 1) {
      let data = this.data.product;
      data.sort(function (a, b) {
        return a.price - b.price
      });
      this.setData({
        product: data
      })
    } else if (price == -1) {
      let data = this.data.product;
      data.sort(function (a, b) {
        return b.price - a.price
      });
      this.setData({
        product: data
      })
    } else {
      let data = this.data.product;
      data.sort(function (a, b) {
        return a.id - b.id
      });
      this.setData({
        product: data
      })
    }
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  }
})