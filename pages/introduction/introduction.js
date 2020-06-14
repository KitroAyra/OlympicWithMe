Page({
  data: {
    navbar: ['奖牌榜', '时间表', '项目介绍'],
    currentTab: 2,    //导航栏项目介绍变成蓝色
    gameList: [
      { title: '花样滑冰项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/1.jpg' },
      { title: '短道速滑项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/2.jpg' },
      { title: '速度滑冰项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/7.jpg' },
      { title: '冰球项目介绍',    imgUrl:  'http://api.xixfeng.cn/competition/3.jpg' },
      { title: '越野滑雪项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/8.jpg' },
      { title: '自由式滑雪项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/4.jpg' },
      { title: '跳台滑雪项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/5.jpg' },
      { title: '高山滑雪项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/6.jpg' }, 
      { title: '俯式冰橇项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/8.jpg' },
      { title: '有舵雪橇项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/9.jpg' },
      { title: '无舵雪橇项目介绍', imgUrl: 'http://api.xixfeng.cn/competition/1.jpg' },
      { title: '北欧两项项目介绍', imgUrl:  'http://api.xixfeng.cn/competition/2.jpg' }
    ],
    nowGame: ''
  },
  onLoad: function (options) {
    var that = this
    wx.getStorage({             //储存到本地
      key: 'game',
      success: function (res) {
        if (res.data == "") {
          that.setData({
            nowGame: config.skinList[0].imgUrl
          })
        } else {
          that.setData({
            nowGame: res.data
          })
        }
      }
    })
  },
  chooseSkin: function (e) {
    var url = e.currentTarget.dataset.url
    wx.setStorage({
      key: 'game',
      data: url,
      success: function (res) {
        wx.navigateBack({
          delta: 1,
          success: function (res) {
            console.log('success')
          }
        })
      }
    })
  }
})