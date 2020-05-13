const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  handleGetUserInfo: () => {
    wx.getUserInfo({
      success: (result) => {
        const { userInfo } = result;
        const { nickName: user_name, avatarUrl: avatar, gender } = userInfo;
        app.request('/api/wx_info/set_user_info', {
          user_name,
          avatar,
          gender,
          open_id: app.globalData.openid
        }, 'GET').then(res => {
          wx.navigateBack({
            delta: 1
          });
        })
      },
      fail: () => {
        
      },
      complete: () => {}
    });
      
  }
})