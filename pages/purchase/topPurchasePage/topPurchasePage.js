const app = getApp();
Page({
  data: {
    productName: '镂空中国风书签',
    productPicUrl: [
      '../../../images/purchase/bookmark1-2.jpeg',
    ],
    productIntro: '窗棂文化的衍生设计，在古典的基础上融合了现代感的审美趣味和变形。复杂的镂空技术，结合实用型的产品的设计开发，让东方美融入生活中',
    productPurchaseUrl: '緮置这行话$JMFr1L92LWj$转移至👉淘宝👈或點击鏈→接https://m.tb.cn/h.VQXSavp?sm=fbae1c 至瀏lan嘂..【古典中国风红木书签套装礼盒 木质创意文艺女生生日礼物 定制刻字】',
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ColorList: app.globalData.ColorList,

  },
  onLoad: function () { },
  pageBack() {
    wx.navigateBack({
      delta: 1
    });
  },
  //一键复制购买链接
  copyPPUrl: function (e) {
    var self = this;
    wx.setClipboardData({
      data: self.data.productPurchaseUrl,
      success: function (res) {
        console.log('复制成功')
      }
    });
  }

});
