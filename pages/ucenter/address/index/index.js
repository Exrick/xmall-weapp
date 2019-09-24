// pages/address/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseMode: false,
    addressList: [
      {
        id: '1',
        name: 'Exrick',
        mobile: '17621230888',
        address: '四川省成都市武侯区',
        street: '益州大道888号香月湖7栋',
        isDefault: true,
        checked: false
      },
      {
        id: '2',
        name: 'XMall',
        mobile: '17621230888',
        address: '四川省成都市武侯区',
        street: '益州大道888号香月湖66栋',
        isDefault: false,
        checked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '地址管理',
    })
    if (options.chooseMode == "true") {
      this.setData({
        chooseMode: true
      })
      let that = this;
      this.data.addressList.forEach(function (v, index) {
        if (options.addressId == v.id) {
          that.setData({
            [`addressList[${index}].checked`]: true
          });
        }
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
  onShow: function (e) {

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
  deleteAddress: function (e) {
    let id = e.currentTarget.dataset.value.id;
    let data = [];
    this.data.addressList.forEach(function (v) {
      if (id != v.id) {
        data.push(v);
      }
    })
    this.setData({
      addressList: data
    })
  },
  editAddress: function (e) {
    let data = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '/pages/ucenter/address/edit/edit?edit=true&id=' + data.id + '&name=' + data.name + '&mobile=' + data.mobile + '&address=' + data.address + '&street=' + data.street + '&isDefault=' + data.isDefault
    })
  },
  addAddress: function () {
    wx.navigateTo({
      url: '/pages/ucenter/address/edit/edit'
    })
  },
  importAddress: function () {
    wx.chooseAddress({
      success(res) {
        let address = res.provinceName + " " + res.cityName + " " + res.countyName;
        wx.navigateTo({
          url: '/pages/ucenter/address/edit/edit?import=true&name=' + res.userName + '&mobile=' + res.telNumber + '&address=' + address + '&street=' + res.detailInfo
        })
      }
    })
  },
  chooseAddress: function (e) {
    if (this.data.chooseMode) {
      let address = e.currentTarget.dataset.value;

      let pages = getCurrentPages();
      let prevPage = pages[pages.length - 2];  //上一个页面
      //直接调用上一个页面的setData()方法，把数据存到上一个页面中去
      prevPage.setData({
        address: address
      })
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})