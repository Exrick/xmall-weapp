// component/comment/comment.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    previewImage: function (e) {
      let index = e.target.dataset.index;
      wx.previewImage({
        current: this.data.data.pics[index], // 当前显示图片的http链接
        urls: this.data.data.pics // 需要预览的图片http链接列表
      })
    },
    previewAddImage: function (e) {
      let index = e.target.dataset.index;
      wx.previewImage({
        current: this.data.data.addComment.pics[index], // 当前显示图片的http链接
        urls: this.data.data.addComment.pics // 需要预览的图片http链接列表
      })
    }
  }
})
