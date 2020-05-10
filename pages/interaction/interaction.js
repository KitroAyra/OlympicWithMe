Page({
  data: {
    forumList: [
      {
        avatarName: '克罗兹剑圣', avatarImgUrl: '../../images/avatarImg/2.jpg', avatarTime: '2022年2月4号', avatarContent: '理性预测男子短道速滑谁是冠军？', haveImg: '1', avatarContentImg: '../../images/avatarContentImg/1.jpg', numberOfViews: '12', numberOflikes: '1', numberOfComments: '40'
      },
      {
        avatarName: '德克萨斯做得到吗', avatarImgUrl: '../../images/avatarImg/3.jpg', avatarTime: '2022年2月3号', avatarContent: '那种双板双雪仗带有障碍的比赛项目叫什么', haveImg: '0', numberOfViews: '10', numberOflikes: '20', numberOfComments: '30'
      },
      {
        avatarName: '安纳塔今天打牌了吗', avatarImgUrl: '../../images/avatarImg/4.jpg', avatarTime: '2022年2月3号', avatarContent: '请欣赏花滑选手们的姿态', haveImg: '1', avatarContentImg: '../../images/avatarContentImg/2.jpg', numberOfViews: '120', numberOflikes: '20', numberOfComments: '98'
      },
      {
        avatarName: '工藤洗衣机', avatarImgUrl: '../../images/avatarImg/5.jpg', avatarTime: '2022年2月3号', avatarContent: '2030年哈萨克斯坦还申办冬奥会吗', haveImg: '0', numberOfViews: '32', numberOflikes: '2', numberOfComments: '13'
      },
    ],
    nowForum: ''
  },
  NavChangeDetail: function () {
    wx.navigateTo({
      url: 'interactionDetail/interactionDetail'
    })
  }
})