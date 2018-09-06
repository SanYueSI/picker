//mycontract.js
// var util = require('../../utils/util.js')
Page({
  bindtapAlert: function() {
        wx.showToast({
          title: '弹弹汤',
        })
  },
  inputSearch: function (e) {  //输入框根据查询条件搜索点击事件
    // 获取用户输入框中的值
    let inputVaue = e.detail.value['search-input'] ? e.detail.value['search-input'] : e.detail.value;
    if (!inputVaue) {
      throw new Error('search input contents con not empty!');
      return;
    }
    let searchUrl = "/product/index?keyword=" + inputVaue + "&fromindex=true";
    this.converterUrlAndRedirect(searchUrl);
  }
  ,
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: '这里是之后动态加载的'
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
