const app = getApp();

const formatTime = time => {
  const timeList = time.split('T');
  timeList[1] = timeList[1].slice(0, 8);
  return timeList.join(' ');
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const checkUserInfo = () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success: res => {
        // 没有授权用户信息 跳转到登录页
        if (!res.authSetting['scope.userInfo']) {
          wx.navigateTo({
            url: '/pages/login/login',
          });
          reject(false);
        } else {
          resolve(true);
        }
      }
    })
  })
}

module.exports = {
  formatTime: formatTime,
  checkUserInfo
}
