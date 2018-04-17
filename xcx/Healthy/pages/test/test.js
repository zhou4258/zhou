//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  weight: function (e) {
    this.setData({
      weight: e.detail.value
    })
  },
  hight: function (e) {
    this.setData({
      hight: e.detail.value
    })
  },
  add:function(){
    var that = this 
    wx.request({
      url: 'http://www.show.com/small/hight.php',
      data:{
         weight:that.data.weight,
         hight: that.data.hight
      },
      method: "POST",
      dataType: "json",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
       success:function(res){
         console.log(res.data);
         var f_name = res.data[0].f_name;
         var food = res.data[0].food;
         var exec = res.data[0].exec;
         
         that.setData({
            newlist:f_name,
            newlist1:food,
            newlist2:exec
         })
       }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
