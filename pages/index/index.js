//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    navbar: ['奖牌榜', '时间表', '项目介绍'],
    currentTab: 0
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }  
})
