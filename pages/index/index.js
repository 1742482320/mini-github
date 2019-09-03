// pages/index/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        openside: false,
        navindex: 'Explore'
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /** 切换sidebar */
    toggeside(e) {
        if (e.detail.open) {
            this.setData({
                openside: true
            })
        } else if (e.detail.colse) {
            this.setData({
                openside: false
            })
        } else {
            let openside = !this.data.openside
            this.setData({
                openside
            })
        }
    },
    switchnav(e){
        let navindex = e.detail.name
        this.setData({
            navindex
        })
    },
    openUserInfo() {
        this.setData({
            openUserInfo: true
        })
    }
})