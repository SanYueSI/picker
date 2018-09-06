// pages/goods-apply-for/goods-apply-for.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datas: [{
      warehouse: "仓库",
      varieties: "品种",
      specifications: "规格",
      weight: "量"
    }],
    scrollHeight: '',
  },
  addGoodsInfo: function() {
    var that = this;
    var obj = {};
    obj.warehouse = "仓库";
    obj.varieties = "品种";
    obj.specifications = "规格";
    obj.weight = "量";
    let datas = that.data.datas;
    datas.push(obj);
    that.setData({
      datas
    });
    wx.createSelectorQuery().selectAll('.search-bar').boundingClientRect(function(rects) {
      rects.forEach(function(rect) {
        wx.getSystemInfo({
          success: function(res) {
            if (rect.height + 50 > res.windowHeight) {
              that.setData({
                scrollHeight: res.windowHeight + 100 + (rect.height - res.windowHeight)
              });
            }
            console.log(rect.height);
            console.log(res.windowHeight);
          }
        });
      })
    }).exec();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})