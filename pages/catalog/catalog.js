// pages/catalog/catalog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      {
        id: 1,
        title: "推荐专区", // 一级分类名
        sortOrder: 1, // 排序
        picUrl: "https://yanxuan.nosdn.127.net/cae820a8e9ff3b2a79965e2d00ea44b0.jpeg", // 分类大封面
        type: 0, // 大图关联类别 0商品 1促销 2分类
        relateId: 0, // 大图关联ID
        children: [
          {
            id: 2,
            title: "",
            parentId: 1, // 以下省略parentId
            sortOrder: 1,
            children: [
              {
                id: 3, // 分类ID
                type: 1, // 关联其他类别 0商品 1促销 2分类
                relateId: 0, // 关联其他ID
                title: "优选风味小食",
                picUrl: "https://yanxuan.nosdn.127.net/8f8e33740f959f78228ea66ded5a2d34.png",
                sortOrder: 1
              },
              {
                id: 4,
                type: 1,
                relateId: 0,
                title: "户外运动好物",
                picUrl: "https://yanxuan.nosdn.127.net/cd9abb6017e8d0c31d04a6e93fa16c4d.png",
                sortOrder: 2
              },
              {
                id: 5,
                type: 1,
                relateId: 0,
                title: "洗护好物",
                picUrl: "https://yanxuan.nosdn.127.net/c34360cc88e0f086676680591b737d06.png",
                sortOrder: 3
              },
              {
                id: 6,
                type: 1,
                relateId: 0,
                title: "夏日酒水畅饮",
                picUrl: "https://yanxuan.nosdn.127.net/f79dc8718c0f42c3736138e2205ce6ad.png",
                sortOrder: 4
              },
              {
                id: 7,
                type: 1,
                relateId: 0,
                title: "9.9元超值好物",
                picUrl: "https://yanxuan.nosdn.127.net/397a902c4da26375527f01608e954afd.png",
                sortOrder: 5
              },
              {
                id: 8,
                type: 1,
                relateId: 0,
                title: "999+好评",
                picUrl: "https://yanxuan.nosdn.127.net/60fd8b80c8a057af9255d2c1a31f82ce.png",
                sortOrder: 6 
              }
            ]
          }
        ]
      },
      {
        id: 9,
        title: "新品专区",
        sortOrder: 2,
        picUrl: "https://yanxuan.nosdn.127.net/ed28f1cd2946cb6eb3cbc0dd74c15fc4.jpg",
        type: 0,
        relateId: 0,
        children: [
          {
            id: 10,
            title: "",
            sortOrder: 1,
            children: [
              {
                id: 11,
                type: 1,
                relateId: 0,
                title: "居家生活新品",
                picUrl: "https://yanxuan.nosdn.127.net/b5cb8e8abc7d7dd20711de9bf4c2f3fa.png",
                sortOrder: 1
              },
              {
                id: 12,
                type: 1,
                relateId: 0,
                title: "个护清洁新品",
                picUrl: "https://yanxuan.nosdn.127.net/4bae3538d34d7f745c2fde33b59bb419.png",
                sortOrder: 2
              },
              {
                id: 13,
                type: 1,
                relateId: 0,
                title: "母婴亲子新品",
                picUrl: "https://yanxuan.nosdn.127.net/7b39e972b2905741b50946463a8c75d0.png",
                sortOrder: 3
              }
            ]
          }
        ]
      },
      {
        id: 13,
        title: "居家生活",
        sortOrder: 3,
        picUrl: "https://yanxuan.nosdn.127.net/4e450c017aa2e20f7929d8fea60d72ac.jpg",
        type: 0,
        relateId: 0,
        children: [
          {
            id: 14,
            title: "夏凉好物",
            sortOrder: 1,
            children: [
              {
                id: 15,
                type: 1,
                relateId: 0,
                title: "6月必买",
                picUrl: "https://yanxuan.nosdn.127.net/1141d9587c638b47c48467a1a3f50083.png",
                sortOrder: 1
              },
              {
                id: 16,
                type: 1,
                relateId: 0,
                title: "夏凉热卖",
                picUrl: "https://yanxuan.nosdn.127.net/bcda4b0cb443833f058a0e98a7853aea.png",
                sortOrder: 2
              }
            ]
          },
          {
            id: 17,
            title: "收纳日用",
            sortOrder: 1,
            children: [
              {
                id: 18,
                type: 1,
                relateId: 0,
                title: "收纳",
                picUrl: "https://yanxuan.nosdn.127.net/ccf0ff26ca7bf8bbbc8683a740e28ae9.png",
                sortOrder: 1
              },
              {
                id: 19,
                type: 1,
                relateId: 0,
                title: "文具",
                picUrl: "https://yanxuan.nosdn.127.net/3741717bb8f55947a10079ea308a44ea.png",
                sortOrder: 2
              },
              {
                id: 20,
                type: 1,
                relateId: 0,
                title: "防晒涂抹",
                picUrl: "https://yanxuan.nosdn.127.net/e3211f79704b02298656ec8c99b6a70d.png",
                sortOrder: 3
              }
            ]
          }
        ]
      },
      {
        id: 21,
        title: "服饰鞋包",
        sortOrder: 4,
        picUrl: "https://yanxuan.nosdn.127.net/f9536c42db260eb00643e4f66c2030b7.jpg",
        type: 0,
        relateId: 0,
        children: [
          {
            id: 22,
            title: "当季热销",
            sortOrder: 1,
            children: [
              {
                id: 23,
                type: 1,
                relateId: 0,
                title: "人气爆款",
                picUrl: "https://yanxuan.nosdn.127.net/8b3e99e7cea51cd80f4b42d2c0bb19aa.png",
                sortOrder: 1
              },
              {
                id: 24,
                type: 1,
                relateId: 0,
                title: "夏季新品",
                picUrl: "https://yanxuan.nosdn.127.net/1fc7bbf077f022659cb4eff564d382fa.png",
                sortOrder: 2
              },
              {
                id: 25,
                type: 1,
                relateId: 0,
                title: "清凉系列",
                picUrl: "https://yanxuan.nosdn.127.net/196546c2daa9b16a11fbcf4a42d256a8.png",
                sortOrder: 3
              }
            ]
          },
          {
            id: 26,
            title: "女装",
            sortOrder: 1,
            children: [
              {
                id: 27,
                type: 1,
                relateId: 0,
                title: "女式衬衫",
                picUrl: "https://yanxuan.nosdn.127.net/277b33d2ad462e2f4bf0bc66081392ca.png",
                sortOrder: 1
              },
              {
                id: 28,
                type: 1,
                relateId: 0,
                title: "女士裙装",
                picUrl: "https://yanxuan.nosdn.127.net/5e761c2a920fc2d09a097bccaa03ba9c.png",
                sortOrder: 2
              }
            ]
          }
        ]
      }, {
        id: 29,
        title: "美食酒水",
        sortOrder: 5,
        picUrl: "https://yanxuan.nosdn.127.net/0d6e60cb12e4a32b13eff3d607a684d5.jpg",
        type: 0,
        relateId: 0,
        children: [
          {
            id: 30,
            title: "精选美食",
            sortOrder: 1,
            children: [
              {
                id: 31,
                type: 1,
                relateId: 0,
                title: "好味精选",
                picUrl: "https://yanxuan.nosdn.127.net/b51b82b8b0047d3ff54aed5da313cb1e.png",
                sortOrder: 1
              }
            ]
          }
        ]
      }
    ],
    currentCategory: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类'
    })
    if (!this.data.category || this.data.category.length < 1) {
      return;
    }
    // 默认选中第一个
    this.setData({
      currentCategory: this.data.category[0]
    });
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
  switchCategory: function (e) {
    let data = e.currentTarget.dataset.value;
    this.setData({
      currentCategory: data
    })
  },
  handleClickBigCover: function () {
    let data = this.data.currentCategory;
    if (data.type == 0) {
      // 商品
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    } else if (data.type == 1) {
      // 促销
      wx.navigateTo({
        url: '/pages/promotion/promotion?id=' + data.relateId
      });
    } else if (data.type == 1) {
      // 分类
      wx.navigateTo({
        url: '/pages/category/category?id=' + data.relateId
      });
    }
  },
  handleClick: function (e) {
    let data = e.currentTarget.dataset.value;
    if (data.type == 0) {
      // 商品
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    } else if (data.type == 1) {
      // 促销
      wx.navigateTo({
        url: '/pages/promotion/promotion?id=' + data.relateId
      });
    } else {
      // 分类
      wx.navigateTo({
        url: '/pages/category/category?id=' + data.relateId
      });
    }
  }
})