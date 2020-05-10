Page({
  data: {
    politeList: [
      {
        index: '0', title: '冬奥会观赛礼仪', content: '奥运礼仪很少被人提及。但事实是，很多比赛因为观众的不懂礼甚至失礼，不仅在赛场上造成负面影响，影响比赛的正常进行，甚至还有损国家形象。因为赛场往往是各国媒体关注的焦点，一些所谓的“小节”问题，不仅代表你个人，还代表着一个群体、一座城市，以至一个国家的形象。所以，遵守赛场礼仪、做文明观众，是必要的。1、进场与退场在体育馆或体育场观看体育比赛，要遵守公共道德，自觉维护秩序。观看体育比赛，应该准时入场，以免入座时打扰别人。入场后，应该对号入座。不要因为自己的座位不好，而占了别人的座位。如果赛后你还有个约会什么的，想快点退场，你就应该在终场前几分钟悄悄走，不要等散场时，在人群中乱穿乱挤。散场的时候，要跟着人流一步步地走向门口。挤、推的话，可能谁也出不去，甚至还会出现危险。万一被推挤的观众围困，要记住“向最近便的出口缓行”和“顺着人流前进，切勿乱钻”。2、比赛中。观看体育比赛时，要注意自己的言行举止。你的言行举止不仅是个人涵养的问题，也关系到社会风气问题。精彩的体育比赛振奋人心，欢呼和呐喊是很自然的事情。可以为你所喜欢的一方叫好，但不应该辱骂另一方。如果是精彩的场面，不管是主队的还是客队的，都应该鼓掌加油，表现出公道和友好。在比赛中起哄、乱叫、向场内扔东西、鼓倒掌、喝倒彩的行为，是违背体育精神的，更是没有教养的表现。在比赛的紧要关头，尽量不要因一时激动而从座位上跳起来，挡住后面的观众。要知道，越是关键的时刻，大家的心情越是一样的。', haveImg: 'false', selectedImgUrl: '../../images/avatarContentImg/3.jpg'
      },
      {
        index: '1', title: '武大靖为中国队夺得第一块金牌', content: '【武大靖创世界纪录夺冠 中国代表团平昌首金！】2月22日，平昌冬奥会短道速滑最后一个比赛日，晚上19:15分，男子500米决赛，诞生了中国队本届冬奥会的首枚金牌！这也是中国短道速滑队第一块男子奥运金牌！整个过程非常艰难，激动人心的冠军时刻，央视解说员都哭了；', haveImg: '1', selectedImgUrl: '../../images/backgroundImg/1.jpg'
      },
      {
        index: '2', title: '知名歌手为冬奥献声', content: '知名歌手xxx为冬奥献声', haveImg: '1', selectedImgUrl: '../../images/backgroundImg/3.jpg'
      },
      {
        indx: '3', title: '奥运冷知识', content: '奥运冷知识，看看你知道几个', haveImg: '1', selectedImgUrl: '../../images/backgroundImg/2.jpg', navUrl: '../polite/knowledge/knowledge'
      },
    ],
    nowPolite: ''
  },
  onLoad: function () {
    console.log('onLoad')

  },
  navChange: function (e) {
    var that = this
    var indx = e.currentTarget.dataset.index
    console.log(indx)
    wx.navigateTo({
      url: that.data.politeList[3].navUrl
    })
  }
})