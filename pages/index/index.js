//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,
    

    navbar: ['奖牌榜', '时间表', '项目介绍'],
    currentTab: 0,
    gameList: [
      { title: '花样滑冰项目介绍', imgUrl: '../../images/competition/10.jpg' },
      { title: '短道速滑项目介绍', imgUrl: '../../images/competition/2.jpg' },
      { title: '速度滑冰项目介绍', imgUrl: '../../images/competition/7.jpg' },
      { title: '冰球项目介绍', imgUrl: '../../images/competition/3.jpg' },
      { title: '越野滑雪项目介绍', imgUrl: '../../images/competition/8.jpg' },
      { title: '自由式滑雪项目介绍', imgUrl: '../../images/competition/4.jpg' },
      { title: '跳台滑雪项目介绍', imgUrl: '../../images/competition/5.jpg' },
      { title: '高山滑雪项目介绍', imgUrl: '../../images/competition/6.jpg' },
      { title: '俯式冰橇项目介绍', imgUrl: '../../images/competition/8.jpg' },
      { title: '有舵雪橇项目介绍', imgUrl: '../../images/competition/9.jpg' },
      { title: '无舵雪橇项目介绍', imgUrl: '../../images/competition/1.jpg' },
      { title: '北欧两项项目介绍', imgUrl: '../../images/competition/2.jpg' }
    ],
    nowGame: '',
    //全部比赛时间
    timeArray: ['2月6日', '2月7日','2月8日'],
    //
    //跳转定位
    index: 0,
    jumpPoint:'',
    //每日的比赛数据
    listFeb6th:[
      {date: '2月6日', title: '冰壶', beginTime: '15:00', endTime: '17:00', mode: '混合双打 比赛循环赛' },
      {date: '2月6日',title: '花样滑冰', beginTime: '9:00', endTime: '10:00', mode: '团体：男子'},
      {date: '2月6日',title: '短道速滑', beginTime: '13:00', endTime: '15:00', mode: '个人：男子'}
    ],
    listFeb7th:[
      { date: '2月7日', title: '速度滑冰', beginTime: '12:00', endTime: '13:05', mode: "团体：男子" },
      { date: '2月7日', title: '冰球项目', beginTime: '13:00', endTime: '14:35', mode: "团体：男子" },
    ],
    listFeb8th:[
      { date: '2月8日', title: '越野滑雪', beginTime: '14:00', endTime: '16:50', mode: "团体：男子" },
      { date: '2月8日', title: '自由式滑雪', beginTime: '15:00', endTime: '17:30', mode: "团体：男子" },
      { date: '2月8日', title: '跳台滑雪', beginTime: '16:00', endTime: '17:10', mode: "团体：男子" },
    ]
  },
  //事件表的事件定位
  bindPickerChange:function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      jumpPoint: 'D'+ e.detail.value
    })
  },
  
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if(this.data.currentTab == 3){
      wx.navigateTo({
        url: 'pages/introduction/introduction',
      })
    } 
  },
  onLoad: function (options) {
    var that = this
    //获取用户信息
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        that.data.userInfo = res.userInfo;
        that.setData({
          userInfo: that.data.userInfo
        })
      }
    })
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
  },
 
})
