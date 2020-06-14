const app = getApp();
Page({
  data: {
    productName:'2020东京奥运会吉祥物玩具公仔',
    productPicUrl: [
      'http://api.xixfeng.cn/purchase/toy1-1.jpeg',
      'http://api.xixfeng.cn/purchase/toy1-2.jpeg',
      'http://api.xixfeng.cn/purchase/toy1-3.jpeg',
      'http://api.xixfeng.cn/purchase/toy1-4.jpeg',
      'http://api.xixfeng.cn/purchase/toy1-5.jpeg',
    ],
    productIntro:'东京2020奥运吉祥物毛绒玩具。东京2020奥运会蓝色吉祥物名为MIRAITOWA，意为充满永恒希望的未来，MIRAITOWA身上的蓝色方格纹饰为日本传统纹样“组市松纹”，与东京2020会徽图案呼应',
    productPurchaseUrl:'付製这行话¢3Vo11MEzxAG¢转移至👉氵匋宝👈或掂击链街https://m.tb.cn/h.VjParsT?sm=d5686c 至瀏..覽..噐【2020东京奥运会吉祥物毛绒公仔玩具日本纪念品礼品奥运赛事系列】',
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
