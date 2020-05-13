const app = getApp();
const util = require('../../../utils/util');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: {},
    comment: '',
    id: 0,
    btnLoading: false,
    onfocus: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const { id } = options;
    this.getArticle(id);
    this.setData({
      id
    })
  },
  imgPreview() {
    const { article: { article: { pic }}} = this.data;
    wx.previewImage({
      urls: [pic],
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
  },

  getArticle(id) {
    app.request('/api/article/getDetail', {
      article_id: id
    }).then(res => {
      res.article.time = util.formatTime(res.article.time);
      res.commentDetails.forEach(item => {
        item.comment.time = util.formatTime(item.comment.time);
      })
      this.setData({
        article: res
      })
    })
  },
  handleFocus() {
    this.setData({
      onfocus: true
    })
  },
  handleBlur() {
    this.setData({
      onfocus: false
    })
  },
  handleInput(e) {
    this.setData({
      comment: e.detail.value
    })
  },
  handleCommentSubmit() {
    const { comment, id, btnLoading } = this.data;
    if (!comment || btnLoading) {
      return;
    }
    this.setData({
      btnLoading: true
    })
    app.request('/api/article/upload_comment', {
      open_id: app.globalData.openid,
      content: comment,
      article_id: id,
      picture: ''
    }, 'GET', false).then(res => {
      // 刷新文章信息
      this.getArticle(id);
      this.setData({
        btnLoading: false,
        comment: ''
      })
    })
  }
})