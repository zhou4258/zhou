// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    currentTab: 0,
  },

  swichNav: function (e) {
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      var showMode = e.target.dataset.current == 0;
      this.setData({
        currentTab: e.target.dataset.current,
        isShow: showMode
      })
    }
  },
  get3rdSession: function () {
    let that = this
    wx.request({
      url: 'http://www.show.com/small/login.php',
      method: 'GET', 
      data: {
        code: this.data.code
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
       success: function (res) {
      
       var sessionId = res.data;
        that.setData({ sessionId: sessionId })
        wx.setStorageSync('sessionId', sessionId)
        that.decodeUserInfo()
      }
    })
  },
  decodeUserInfo: function () {
    let that = this
    wx.request({
      url: 'http://www.show.com/small/decrypt.php',
      data: {
        encryptedData: that.data.encryptedData,
        iv: that.data.iv,
        session: wx.getStorageSync('sessionId')
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
       console.log(res.data);
        let todayStep = res.data.stepInfoList.pop()
      console.log(todayStep);
        that.setData({
          step: todayStep.step
        });
      }
    })
  },
  onLoad: function () {
    let that = this
    wx.login({
      success: function (res) {
        let code = res.code
        that.setData({ code: code })
        wx.getWeRunData({//解密微信运动
          success(res) {
            const wRunEncryptedData = res.encryptedData
            that.setData({ encryptedData: wRunEncryptedData })
            that.setData({ iv: res.iv })
            that.get3rdSession()//解密请求函数
          }
        })
      }
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
 /* onLoad: function () {
    
      
  },*/

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },



  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})