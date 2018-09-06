// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:"我是首页",
    src:'../../images/goods.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  goodsApplyFor: function(){
    wx.navigateTo({
      //跳转到订货申请页面
      url: '../goods-apply-for/goods-apply-for',
    })
  },
  go2mycontract: function(){
    wx.navigateTo({
      url: '../mycontract/mycontract',
    })
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