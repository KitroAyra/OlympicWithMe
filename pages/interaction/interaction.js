const app = getApp();
const util = require('../../utils/util');

Page({
  data: {
    page: 0,
    feedList: []
  },
  onLoad() {
    this.getFeed();
  },
  onShow() {
    this.getFeed();
  },
  getFeed() {
    const { page = 0, feedList = [] } = this.data;
    let newFeed = [];
    app.request('/api/article/getAll' ,{
      page
    }).then(res => {
      res.forEach(element => {
        element.article.time = util.formatTime(element.article.time);
      });
      newFeed = [...feedList, ...res];
      this.setData({
        feedList: newFeed,
        page: page + 1
      })
    })
  },
  NavChangeDetail: function (e) {
    util.checkUserInfo().then(() => {
      wx.navigateTo({
        url: `interactionDetail/interactionDetail?id=${e.currentTarget.dataset.id}`
      })
    })
  },

  toPost: () => {
    util.checkUserInfo().then(() => {
      wx.navigateTo({
        url: 'post/post'
      });
    })
  }
})