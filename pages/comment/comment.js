// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: "all",
    count: {
      pic: 2,
      add: 1,
      good: 3,
      mid: 0,
      bad: 0
    },
    goodCommentRate: 100,
    rate: 5,
    comment: [],
    commentList: [
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "很好，手机很有质感，值得购买。",
        rate: 5,
        time: '2019.08.18',
        spec: "银色 64G",
        pics: [
          "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/65005/20/4818/92581/5d2ffdb6Ebcbf3018/35411a583e29d52d.jpg",
          "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/74460/28/4830/96562/5d2ffdb7Ed5e9ce7a/e764b3daa92a9c67.jpg"
        ]
      },
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "使用了一段时间了，没有问题，美观大方实用，屏幕分辨率高，屏幕也很大，上网速度快，一点儿也不卡，非常喜欢，应该是正品，高大上的手机。",
        rate: 5,
        time: '2019.07.18',
        spec: "银色 128G",
        pics: [
          "https://img30.360buyimg.com/shaidan/s616x405_jfs/t30139/201/1464242510/283903/eb956f0c/5ce123a6Na2d27731.jpg"
        ]
      },
      {
        nickname: "Exrick",
        avatar: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/132",
        content: "Nice！",
        rate: 5,
        time: '2019.09.18',
        spec: "银色 64G",
        pics: [
        ],
        addComment: {
          time: "2019.06.19",
          content: "好用！",
          pics: [
            "https://img30.360buyimg.com/shaidan/s616x405_jfs/t1/49424/25/6227/165448/5d3c96c7Eb2cc58e0/cc0b911eb740d389.jpg"
          ]
        }
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      comment: this.data.commentList
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
  changeTag: function (e) {
    let tag = e.currentTarget.dataset.value;
    this.setData({
      active: tag
    });
    let data = this.data.commentList;
    if (tag == "new") {
      data.sort(function (a, b) {
        if (b.time > a.time) {
          return 1;
        }
        if (b.time < a.time) {
          return -1;
        }
        return 0;
      });
    } else if (tag == "pic") {
      data = data.filter(v => {
        return v.pics.length > 0;
      });
    } else if (tag == "add") {
      data = data.filter(v => {
        return v.addComment;
      })
    } else if (tag == "good") {
      data = data.filter(v => {
        return v.rate >= 4;
      })
    } else if (tag == "mid") {
      data = data.filter(v => {
        return v.rate == 4 || v.rate == 3;
      })
    } else if (tag == "bad") {
      data = data.filter(v => {
        return v.rate <= 2;
      })
    }
    this.setData({
      comment: data
    })
  }
})