//index.js
var app = getApp();
//获取应用实例

Page({
  data: {
    userInfo: {},
    startX: 0, //开始移动时距离左
    endX: 0, //结束移动时距离左
    nowPage: 0, //当前是第几个个页面
    xinList: [
      {
        id: 5,
        from: '1912年罗马奥运会',
        to: '最长的比赛',
        msg: '在一场半决赛摔跤比赛上，俄罗斯和芬兰的比赛时间超过了 11 个小时，成为奥运会历史上最长的摔跤比赛。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '2017年超级联赛',
        to: '速度最快的球类',
        msg: '根据吉尼斯世界纪录的记载，丹麦男双选手科丁在比赛中打出一记426公里/时的杀球。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '历届奥运会',
        to: '最无所事事的救生员',
        msg: '历届奥运游泳场馆的救生员一次也没有下过水，但这些救生员不仅拥有游泳馆最好的观赏位置，而且还有工资。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '1998年汉城奥运会',
        to: '开幕式不放鸽子',
        msg: '开幕式上，很多鸽子撞到了火炬上，因此出于绿色奥运和保护动物的考虑，开幕式都不放真的鸽子了。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '1912年斯德哥尔摩奥运会',
        to: '奥运会还比过写作文',
        msg: '奥运曾会有一场文学竞赛，由现代奥运会的创始人之一的彼埃尔·德·顾拜旦·德创办，他还赢得了此比赛的金牌。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '历届奥运会',
        to: '金牌居然不是金的',
        msg: '按照“奥林匹克宪章”的规定，金牌必须含有92.5%的纯银和至少6克的黄金，因为纯金实在太软。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
      {
        id: 5,
        from: '历届奥运会',
        to: '不分性别的比赛项目',
        msg: '奥运会唯一不区分男女的比赛项目是马术，不仅是运动员，参赛的马也不分公母。华天是中国唯一的马术选手。',
        display: 0,
        scale: '',
        slateX: '',
        zIndex: 0,
        style: ''
      },
    ]
  },
  //事件处理函数

  onLoad: function (e) {

    this.checkPage(this.data.nowPage);
  },
  onReady: function () {

  },
  onShareAppMessage: function () {
    return {
      title: '奥运冷知识，你都知道嘛？'
    }
  },
  //手指触发开始移动
  moveStart: function (e) {
    var startX = e.changedTouches[0].pageX;
    this.setData({
      startX: startX
    });
  },
  //手指触摸后移动完成触发事件
  moveItem: function (e) {
    var that = this;
    var endX = e.changedTouches[0].pageX;
    this.setData({
      endX: endX
    });

    //计算手指触摸偏移剧距离
    var moveX = this.data.startX - this.data.endX;

    //向左移动
    if (moveX > 20) {

      if (that.data.nowPage >= (that.data.xinList.length - 1)) {
        wx.showToast({
          title: '最后一个冷知识啦,明天再来吧',
          icon: 'none'
        })
        return false;
      }
      that.setData({
        nowPage: that.data.nowPage + 1
      });
      this.checkPage(this.data.nowPage);
    }
    if (moveX < -20) {
      if (that.data.nowPage <= 0) {
        wx.showToast({
          title: '这是第一个冷知识了喔',
          icon: 'none'
        })
        return false;
      }
      that.setData({
        nowPage: that.data.nowPage - 1
      });
      this.checkPage(this.data.nowPage);

      // wx.showToast({
      //  title: '不可以回退噢',
      //  icon:'none'
      // })
    }


  },
  // 页面判断逻辑,传入参数为当前是第几页 
  checkPage: function (index) {
    //信列表数据
    var data = this.data.xinList;
    var that = this;
    var m = 1;
    for (var i = 0; i < data.length; i++) {
      //先将所有的页面隐藏
      var disp = 'xinList[' + i + '].display';
      var sca = 'xinList[' + i + '].scale';
      var slateX = 'xinList[' + i + '].slateX';
      var zIndex = 'xinList[' + i + '].zIndex';
      var style = 'xinList[' + i + '].style';
      that.setData({
        [disp]: 0,
        [style]: "display:block",
      });
      //向左移动上一个页面
      if (i == (index - 1)) {
        that.setData({
          [slateX]: '-120%',
          [disp]: 1,
          [zIndex]: 2,

        });
      }
      //向右移动的最右边要display:none的页面
      if (i == (index + 3)) {
        that.setData({
          [style]: 'display:none',
          [slateX]: '0',
          [zIndex]: -10,
        });
      }
      if (i == index || (i > index && (i < index + 3))) {
        //显示最近的3个
        that.setData({
          [disp]: 1
        });
        //第一个
        if (m == 1) {
          this.setData({
            [sca]: 1,
            [slateX]: 0,
            [zIndex]: 1,
          });
        }
        //第二个
        else if (m == 2) {
          this.setData({
            [sca]: 0.8,
            [slateX]: '20px',
            [zIndex]: -1,
          });
        }
        //第三个
        else if (m == 3) {
          this.setData({
            [sca]: 0.6,
            [slateX]: '40px',
            [zIndex]: -2,
          });
        }
        m++;
      }

    }
  }
})