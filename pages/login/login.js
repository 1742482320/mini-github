// pages/login/login.js
const api = require('../../api/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    isloading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          isloading: true
        })
        setTimeout(()=>{
          wx.reLaunch({
            url: '../index/index',
          })
        }, 1000)
      }
    })
  },

  inpFuc(e) {
    this.setData({
      username: e.detail.e.detail.value
    })
  },

  login() {
    this.setData({
      isloading: true
    })
    api.login(this.data.username).then((res) => {
      console.log('登录数据 ==> ', res)
      wx.setStorageSync('userInfo', res)
      wx.reLaunch({
        url: '../index/index',
      })
    })
  }
})