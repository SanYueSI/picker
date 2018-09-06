//index.js
//获取应用实例
Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    loading:false,
    password:true,
    userFocus:true,
    pwdFocus:false,
    userNmae:'',
    userPwd:'',
    showPadImage:'../../images/btn_show_n.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  //登录
  login: function () {
    this.setData({ loading: true })
    wx.switchTab({
      url:'/pages/home/home',
    });
  },
  //显示密码
  showPad:function(){
    this.setData({
      password: this.data.password?false:true,
      })
    this.setData({
      showPadImage: this.data.password ? 
      '../../images/btn_show_n.png' : 
        '../../images/btn_show_s.png',
  
    })
   
  },
  bindconfirm:function(e){
    console.log(e.detail.value)
    this.setData({
      userFocus: false, 
      pwdFocus: true,
      userName: e.detail.value,
    })
  },
  bindblur:function(e){
    console.log(e.detail.value)
    this.setData({
      userName: e.detail.value,
    })
  },
  bindblurPwd: function (e) {
    console.log(e.detail.value)
    this.setData({
      userPwd: e.detail.value,
    })
  }, 
  bindconfirmPwd: function (e) {
    console.log(e.detail.value)
    this.setData({
      userPwd: e.detail.value,
    });
    this.login();
  }
})