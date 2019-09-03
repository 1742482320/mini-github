//app.js
App({
  onLaunch: function () {
    this.saveSystemInfo()
  },

  /** 保存设备信息到缓存 */
  saveSystemInfo (){
    wx.getStorage({
      key: 'SYSTEMINFO',
      success: res => {
        return
      },
      fail: err => {
        wx.getSystemInfo({
          success: res => {
            wx.setStorage({
              key: 'SYSTEMINFO',
              data: res
            })
          }
        })
      }
    })
  },

  globalData: {
    
  }
})