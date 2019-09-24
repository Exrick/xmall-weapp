//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sections: [{
      id: 1,
      title: "轮播图",
      type: 0, // 板块类型 轮播
      sortOrder: 1, // 板块排序
      list: [{
        id: 1,
        relateId: 0, // 关联商品或其他ID
        title: "",
        type: 0, // 关联类型 0商品 1促销板块 2分类
        picUrl: "https://resource.smartisan.com/resource/fda5c3e61a71c0f883bbd6c76516cd85.png"
      }, {
        id: 2,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/w/white25wap.png"
      }, {
        id: 3,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/9402b4117bf1c1754dca08b52c98cca0.png"
      }, {
        id: 4,
        relateId: 0,
        title: "",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/B/BS2000WAP.png"
      }]

    }, {

      id: 2,
      title: "频道图标",
      type: 1, // 板块类型 频道图标
      sortOrder: 2,
      list: [{
        id: 1,
        relateId: 0,
        title: "IPhone XS",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/5224f868cca31a8b913411ff9d69dcaf.png"
      },
      {
        id: 2,
        relateId: 0,
        title: "购买空净",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/e98cfb0a63e8b8c80e5b87ca66bda64c.png"
      },
      {
        id: 3,
        relateId: 0,
        title: "新品配件",
        type: 0,
        picUrl: "https://i.loli.net/2019/06/23/5d0f7e938c57070713.png"
      },
      {
        id: 4,
        relateId: 0,
        title: "服装",
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/75892aebb63f998fa9b37e9a18984a98.png"
      },
      {
        id: 5,
        relateId: 0,
        title: "更多",
        type: 0,
        picUrl: "https://i.loli.net/2019/06/23/5d0f7e938cbee56873.png"
      }
      ]

    }, {

      id: 3,
      title: "热门商品",
      type: 2, // 板块类型 横向商品板块
      relateId: 1, // 关联促销分类
      sortOrder: 3,
      list: [{
        id: 1,
        relateId: 0,
        title: "各色DNA检测套装",
        description: "千万级基因位点数据解读",
        price: 499.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/9bffe702b1f0aea221b1f18ddf886958.jpg"
      },
      {
        id: 2,
        relateId: 0,
        title: "畅呼吸智能空气净化器",
        description: "超强净化能力，超低噪音",
        price: 1299.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/6ff92d05a3bfab4fad489ca04d3eea5a.png"
      },
      {
        id: 3,
        relateId: 0,
        title: "坚果 Pro 2",
        description: "漂亮得不像实力派",
        price: 1799.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png"
      },
      {
        id: 4,
        relateId: 0,
        title: "Smartisan 帆布鞋",
        description: "一双踏实、舒适的帆布鞋",
        price: 199.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/578116bddf1d170c89e9af7ba5073fb6.jpg"
      },
      {
        id: 5,
        relateId: 0,
        title: "卫衣 开衫 热血",
        description: "风格简洁、舒适服帖",
        price: 299.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png"
      }
      ]
    }, {
      id: 4,
      title: "",
      type: 3, // 板块类型 两张板块
      sortOrder: 4,
      list: [{
        id: 1,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/e/erfenzhiyiqingrenjieapp.png"
      },
      {
        id: 2,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/s/shangchengguanggaowei.png"
      }
      ]
    }, {
      id: 5,
      title: "官方精选",
      type: 4, // 大图商品带边框板块
      relateId: 2,
      sortOrder: 5,
      list: [{
        id: 1,
        relateId: 0,
        title: "坚果 Pro",
        description: "漂亮得不像实力派",
        price: 1299.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/3bd5267edd7257e719e7965b756e2c2e.png",
        tag: "满减"
      },
      {
        id: 2,
        relateId: 0,
        title: "半入耳式耳机 心动版",
        description: "哑光表面、专业级调音",
        price: 99.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/90be7779c2454407ee5f4b6184c929ed.jpg"
      },
      {
        id: 3,
        relateId: 0,
        title: "坚果 Pro 2 软胶保护套",
        description: "TPU 环保材质、完美贴合",
        price: 49.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/ca332140775bb0646f65e516942d3adc.jpg"
      },
      {
        id: 4,
        relateId: 0,
        title: "Smartisan 半入耳式耳机",
        description: "经典配色、专业调音、高品质麦克风",
        price: 59.00,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/8a875418797690e26b665cc0d86dffc7.jpg"
      }
      ]
    }, {

      id: 6,
      title: "",
      type: 3, // 板块类型 两张板块
      sortOrder: 6,
      list: [{
        id: 1,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/3a7c77edcd70a9d3621bc3e7d0fba1c1.png"
      },
      {
        id: 2,
        relateId: 0,
        type: 0,
        picUrl: "https://resource.smartisan.com/resource/4bf08546b25b1527cc715a9717db6327.png"
      }
      ]
    }, {

      id: 5,
      title: "品牌周边",
      type: 5, // 大图商品无边框板块
      relateId: 3,
      sortOrder: 5,
      list: [{
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
    }]
  },
  onLoad: function () { },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    });
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
    } else if (data.type == 2) {
      // 分类
      wx.navigateTo({
        url: '/pages/product/product?id=' + data.relateId
      });
    }
  },
  clickHeader: function (e) {
    let data = e.currentTarget.dataset.value;
    wx.navigateTo({
      url: '/pages/promotion/promotion?id=' + data.relateId
    });
  }
})