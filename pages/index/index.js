
const App = getApp();

Page({
  data: {},
  onLoad: function (options) {

  },
  onShow(){
    // App.globalData.selected = 0
    //添加选中效果
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0, //这个数是，tabBar从左到右的下标，从0开始
        list:App.globalData.list
      })
    }
  },
});
