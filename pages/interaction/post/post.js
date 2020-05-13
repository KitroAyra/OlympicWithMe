const app = getApp();
const util = require('../../../utils/util')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgList: [],
    maxImgLength: 1,
    content: '',
    postLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    util.checkUserInfo();
  },

  ChooseImage() {
    const { maxImgLength } = this.data;
    wx.chooseImage({
      count: maxImgLength, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album'], //从相册选择
      success: (res) => {
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
      }
    });
  },
  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },
  DelImg(e) {
    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      imgList: this.data.imgList
    })
  },
  handleInput(e) {
    this.setData({
      content: e.detail.value.trim()
    })
  },
  handleSubmit() {
    const { imgList, content, postLoading } = this.data;
    const picture = imgList.length ? imgList[0] : '';
    if (!(imgList.length || content) && postLoading) {
      return;
    }
    this.setData({
      postLoading: true
    })
    app.request('/api/article/upload_article' ,{
      picture,
      open_id: app.globalData.openid,
      content
    }, 'GET', false).then(res => {
      this.setData({
        postLoading: false
      })

      setTimeout(() => {
        wx.navigateBack({
          delta: 1
        });
      }, 100);
    })
  }
})