//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    hidden: true,


    navbar: ['奖牌榜', '时间表', '项目介绍'],   //1级别bar
    currentTab: 0,                          //控制1级别bar跳转
    currentSubTab:0,                        //控制2级别bart跳转
    indexSubTab:0,
    jumpPoint2:'',
    //国家列表
    Countrylist:['挪威','德国','加拿大','美国','荷兰','瑞典','韩国','瑞士','法国','奥地利','俄罗斯','捷克','白俄罗斯','中国'],
    //项目列表
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
    timeArray: ['2月6日', '2月7日', '2月8日'],
    //
    //跳转定位
    index: 0,
    jumpPoint: '',
    //每日的比赛数据
    listFeb6th: [
      { date: '2月6日', title: '冰壶', beginTime: '15:00', endTime: '17:00', mode: '混合双打 比赛循环赛' },
      { date: '2月6日', title: '花样滑冰', beginTime: '9:00', endTime: '10:00', mode: '团体：男子' },
      { date: '2月6日', title: '短道速滑', beginTime: '13:00', endTime: '15:00', mode: '个人：男子' }
    ],
    listFeb7th: [
      { date: '2月7日', title: '速度滑冰', beginTime: '12:00', endTime: '13:05', mode: "团体：男子" },
      { date: '2月7日', title: '冰球项目', beginTime: '13:00', endTime: '14:35', mode: "团体：男子" },
    ],
    listFeb8th: [
      { date: '2月8日', title: '越野滑雪', beginTime: '14:00', endTime: '16:50', mode: "团体：男子" },
      { date: '2月8日', title: '自由式滑雪', beginTime: '15:00', endTime: '17:30', mode: "团体：男子" },
      { date: '2月8日', title: '跳台滑雪', beginTime: '16:00', endTime: '17:10', mode: "团体：男子" },
    ],

    medalList: [
      { countryName: '挪威', flagImg: '../../images/flag/Norway.jpg', ranking: '1', goldMedal: '14', silverMedal: '14', bronzeMedal: '11', totalMedal: '39' },
      { countryName: '德国', flagImg: '../../images/flag/Germany.jpg', ranking: '2', goldMedal: '14', silverMedal: '10', bronzeMedal: '7', totalMedal: '31' },
      { countryName: '加拿大', flagImg: '../../images/flag/Canada.jpg', ranking: '3', goldMedal: '11', silverMedal: '8', bronzeMedal: '10', totalMedal: '29' },
      { countryName: '美国', flagImg: '../../images/flag/America.jpg', ranking: '4', goldMedal: '9', silverMedal: '8', bronzeMedal: '6', totalMedal: '23' },
      { countryName: '荷兰', flagImg: '../../images/flag/Netherlands.jpg', ranking: '5', goldMedal: '8', silverMedal: '6', bronzeMedal: '6', totalMedal: '20' },
      { countryName: '瑞典', flagImg: '../../images/flag/Sweden.jpg', ranking: '6', goldMedal: '7', silverMedal: '6', bronzeMedal: '1', totalMedal: '14' },
      { countryName: '韩国', flagImg: '../../images/flag/SouthKorea.jpg', ranking: '7', goldMedal: '5', silverMedal: '8', bronzeMedal: '4', totalMedal: '17' },
      { countryName: '瑞士', flagImg: '../../images/flag/Switzerland.jpg', ranking: '8', goldMedal: '5', silverMedal: '6', bronzeMedal: '4', totalMedal: '15' },
      { countryName: '法国', flagImg: '../../images/flag/France.jpg', ranking: '9', goldMedal: '5', silverMedal: '4', bronzeMedal: '6', totalMedal: '15' },
      { countryName: '奥地利', flagImg: '../../images/flag/Austria.jpg', ranking: '10', goldMedal: '5', silverMedal: '3', bronzeMedal: '6', totalMedal: '14' },
      { countryName: '日本', flagImg: '../../images/flag/Japan.jpg', ranking: '11', goldMedal: '4', silverMedal: '5', bronzeMedal: '4', totalMedal: '13' },
      { countryName: '意大利', flagImg: '../../images/flag/Italy.jpg', ranking: '12', goldMedal: '3', silverMedal: '2', bronzeMedal: '5', totalMedal: '10' },
      { countryName: '俄罗斯', flagImg: '../../images/flag/Russia.jpg', ranking: '13', goldMedal: '2', silverMedal: '6', bronzeMedal: '9', totalMedal: '17' },
      { countryName: '捷克', flagImg: '../../images/flag/Czekh.jpg', ranking: '14', goldMedal: '2', silverMedal: '2', bronzeMedal: '3', totalMedal: '7' },
      { countryName: '白俄罗斯', flagImg: '../../images/flag/Belarus.jpg', ranking: '15', goldMedal: '2', silverMedal: '1', bronzeMedal: '0', totalMedal: '3' },
      { countryName: '中国', flagImg: '../../images/flag/China.jpg', ranking: '16', goldMedal: '1', silverMedal: '6', bronzeMedal: '2', totalMedal: '9' },

    ],

  },
  //时间表的事件定位
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
      jumpPoint: 'D' + e.detail.value
    })
  },
  //奖牌榜的事件定位
  bindPickerChange2: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexSubTab: e.detail.value,
      jumpPoint2: 'C' + e.detail.value
    })
  },

  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
    if (this.data.currentTab == 3) {
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
    app.request('/api/medal/getAll', {}).then(res => {
      // res 请求成功时返回数据
      console.log(res);
    })
    .catch(e => {
      // 请求失败时回调函数
      console.error(e)
    });
    wx.getStorage({//储存到本地
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
  navigateToSpecific:function(e){
    wx.navigateTo({
      url: '../gameIntroduction/gameIntroduction',
    })
  }


})
