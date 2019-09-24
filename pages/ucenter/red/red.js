// pages/ucenter/red/red.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    disabled: true,
    value: "",
    redList: [],
    red: [
      {
        id: 1,
        title: '签到红包',
        startTime: '2019.08.01',
        endTime: '2019.08.30',
        description: '礼品卡、猪肉卡、黑胶唱片、定金购、部分新品、秒杀商品和加价购等商品不可使用',
        money: 2, //红包金额
        disabled: false,
        showAll: false,
        selected: false,
        status: 0 // 0未使用 1已使用 2已失效
      },
      {
        id: 2,
        title: '惊喜红包',
        startTime: '2019.08.01',
        endTime: '2019.08.30',
        description: '礼品卡、猪肉卡、黑胶唱片、定金购、部分新品、秒杀商品和加价购等商品不可使用',
        money: 3, //红包金额
        disabled: false,
        showAll: false,
        selected: false,
        selected: false,
        status: 0
      },
      {
        id: 3,
        title: '现金红包',
        startTime: '2019.08.01',
        endTime: '2019.08.30',
        description: '礼品卡、猪肉卡、黑胶唱片、定金购、部分新品、秒杀商品和加价购等商品不可使用',
        money: 10, //红包金额
        disabled: false,
        showAll: false,
        selected: false,
        status: 0
      },
      {
        id: 4,
        title: '红包派对',
        startTime: '2019.08.01',
        endTime: '2019.08.30',
        description: '礼品卡、猪肉卡、黑胶唱片、定金购、部分新品、秒杀商品和加价购等商品不可使用',
        money: 5, //红包金额
        disabled: true,
        showAll: false,
        selected: false,
        status: 2
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '红包',
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
    this.loadData(0);
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
    let data = this.data.red.filter(item => item.status == type);
    this.setData({
      redList: data
    })
  },
  changeTab: function (e) {
    let index = e.detail.index;
    this.loadData(index);
  },
  scrollListen: function (e) {
    console.log("滑到底部啦 该加载下一页数据啦")
  }
})