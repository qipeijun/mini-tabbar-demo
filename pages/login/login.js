// pages/login/login.js

const App = getApp();

let taba = [
  {
    pagePath: "/pages/index/index",
    iconPath: "/image/icon_component.png",
    selectedIconPath: "/image/icon_component_HL.png",
    text: "司机"
  }, {
    pagePath: "/pages/data/data",
    iconPath: "/image/icon_component.png",
    selectedIconPath: "/image/icon_component_HL.png",
    text: "数据"
  },
  {
    pagePath: "/pages/user/user",
    iconPath: "/image/icon_API.png",
    selectedIconPath: "/image/icon_API_HL.png",
    text: "用户"
  }
]

let tabb = [
  {
    pagePath: "/pages/index2/index",
    iconPath: "/image/icon_component.png",
    selectedIconPath: "/image/icon_component_HL.png",
    text: "车队"
  }, {
    pagePath: "/pages/data/data",
    iconPath: "/image/icon_component.png",
    selectedIconPath: "/image/icon_component_HL.png",
    text: "数据"
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  gotoIndex(){
    App.globalData.isShowUser = true
    App.globalData.list = taba
    wx.switchTab({
      url:'/pages/index/index'
    })
  },

  gotodata(){
    App.globalData.isShowUser = false
    App.globalData.list = tabb
    wx.switchTab({
      url:'/pages/data/data'
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
