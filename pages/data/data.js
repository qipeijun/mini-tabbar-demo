// pages/data/data.js

const App = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gotouser(){
    wx.switchTab({
      url:'/pages/user/user'
    })
  },

  gotologin(){
    wx.redirectTo({
      url:'/pages/login/login'
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log(App.globalData)
    // App.globalData.selected = 1
    //添加选中效果
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1, //这个数是，tabBar从左到右的下标，从0开始
        list:App.globalData.list
      })
    }
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
