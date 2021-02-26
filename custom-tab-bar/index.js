
const App = getApp()


Component({
  data: {
    selected:App.globalData.selected,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list:App.globalData.list
    // list: [
    //   {
    //     pagePath: "/pages/index/index",
    //     iconPath: "/image/icon_component.png",
    //     selectedIconPath: "/image/icon_component_HL.png",
    //     text: "首页"
    //   }, {
    //     pagePath: "/pages/data/data",
    //     iconPath: "/image/icon_component.png",
    //     selectedIconPath: "/image/icon_component_HL.png",
    //     text: "数据"
    //   },
    //   {
    //     pagePath: "/pages/user/user",
    //     iconPath: "/image/icon_API.png",
    //     selectedIconPath: "/image/icon_API_HL.png",
    //     text: "用户"
    //   }
    //   ]
  },
  attached() {

  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      console.log(data.index)
      const url = data.path
      wx.switchTab({url})
      // this.setData({
      //   selected: data.index
      // })
    }
  }
})
