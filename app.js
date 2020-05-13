//app.js
const BASE_URL = 'http://132.232.62.176:8080'
App({
  onLaunch: function () {
    if (wx.cloud) {
      wx.cloud.init({
        traceUser: true
      })
    }
    // 登陆获取openid
    wx.login({
      success: (res) => {
        if (res.code) {
          //发起网络请求
          wx.request({
            url: BASE_URL + '/api/wx_info/get_openId',
            data: {
              js_code: res.code
            },
            success: res => {
              this.globalData.openid = res.data.data.open_id;
            },
            fail: e => {
              wx.showToast({
                title: '网络请求错误，请检查您的网络状态',
                icon: 'none',
              });
                
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (capsule) {
          this.globalData.Custom = capsule;
          this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
        } else {
          this.globalData.CustomBar = e.statusBarHeight + 50;
        }
      }
    })
  },
  request: (url, data, method = 'GET', showLoading = true) => {
    var promise = new Promise((resolve, reject) => {
       var that = this;

       if (showLoading) {
         wx.showLoading({
           title: '加载中...',
         });
       }
       //网络请求
       wx.request({
          url: BASE_URL + url,
          data,
          method,
          success: res => {
             if (res.data.status == 200) {
                resolve( res.data.data );
             } else {
                reject( res.data.data );
             }
          },
          fail: e => {
             reject(e);
             wx.showToast({
               title: '网络请求错误，请检查您的网络状态',
               icon: 'none',
             });
          },
          complete: () => {
            wx.hideLoading();
          }
       })
    });
    return promise;
 },
  globalData: {
    currentPurchaseNum:0, //用来记录跳转页面
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ]
  }
})