const app = getApp();
Page({
  data: {
    sch_listData: [],
    dateArray: [],
    listData: [
      { "code": "01", "text": "Yuzuru HANYU", "type": "JPN" },
      { "code": "02", "text": "Alexander SAMARIN", "type": "RUS" },
      { "code": "03", "text": "Dmitri Aliev", "type": "RUS" },
      { "code": "04", "text": "Nathan CHEN", "type": "USA" },
      { "code": "05", "text": "Matteo RIZZO", "type": "ITA" },
      { "code": "06", "text": "Jason BROWN", "type": "USA" },
      { "code": "07", "text": "Daniel GRASSL", "type": "ITA" },
      { "code": "08", "text": "Morisi KVITELASHVILI", "type": "GEO" },
      { "code": "09", "text": "Shoma UNO", "type": "JPN" },
      { "code": "10", "text": "Junhwan CHA", "type": "KOR" },
      { "code": "11", "text": "Boyang JIN", "type": "CHN" },
      { "code": "12", "text": "Keegan MESSING", "type": "CAN" },
      { "code": "13", "text": "Kevin AYMOZ", "type": "FRA" },
    ],
    ArticleTitle:'花样滑冰',  //文章标题
    subTitle:"Figure Skating",      //文章子标题
    h11th:"项目分类",         //H1字号，1级标题的第一个
    h21th:"单人滑",         //H2字号，2级标题的第一个
    h22th: "双人滑",           //H3字号，3级标题的第二个
    h31th:"单人滑",           //H3字号，3级标题的第一个

    p1: '&emsp;&emsp;单人滑包括男子单人滑与女子单人滑两项，技术动作要素包括跳跃、旋转、接续步、燕式步等等。三大类项目中，单人滑对跳跃的要求最高，因此单人滑通常代表了选手能达到的最高跳跃难度。',            //段落1
    p2:"&emsp;&emsp;单人滑包括男子单人滑与女子单人滑两项，技术动作要素包括跳跃、旋转、接续步、燕式步等等。三大类项目中，单人滑对跳跃的要求最高，因此单人滑通常代表了选手能达到的最高跳跃难度。比赛规则：\n&emsp;&emsp;1、分为男子组与女子组；\n&emsp;&emsp;2、比赛分短节目和自由滑；\n&emsp;&emsp;3、在短节目中，技术动作要素必须包括跳跃、旋转、接续步；\n时间：\n&emsp;&emsp;1、短节目为2分40秒±10秒；\n&emsp;&emsp;2、男子自由滑为4分30秒±10秒；\n&emsp;&emsp;3、女子自由滑为4分±10秒",             //段落2
    p3:'&emsp;&emsp;双人滑要求一位男选手和一位女选手配合，在冰上表演同步的单人滑动作，及双人滑特有的动作：抛跳（男选手“抛掷”女选手跳跃）、托举（男选手将摆成某种造型的女选手高举过头）、双人旋转（两位选手同时绕一个共同轴心旋转）、螺旋线（Death spiral）、捻转（Twist）等。\n规则：\n&emsp;&emsp;1、由一男一女组成一组\n&emsp;&emsp;2、比赛分短节目和自由滑\n&emsp;&emsp;3、该项目中，男女可表演同样的单人滑动作，或双人滑特有的动作，如抛跳（男选手抛掷女选手助其跳跃的动作）、托举（男选手将女选手托起后在空中做一系列技术的动作）、双人旋转（两位选手同时绕一个共同轴心旋转的动作）、螺旋线（男选手成为轴心，女选手围绕男选手旋转的动作）等'

  
  },

});
