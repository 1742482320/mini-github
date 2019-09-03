Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    properties: {
        openUserInfo: {
            type: Boolean,
            value: false
        }
    }, 
    ready(){
        this.setData({
            avatar: wx.getStorageSync('userInfo').data.avatar_url,
            name: wx.getStorageSync('userInfo').data.login,
            join: wx.getStorageSync('userInfo').data.created_at.split('T')[0].replace(/-/g, '/')
        })
    },
    methods: {
        back(){
            this.setData({
                openUserInfo: false,
                animationend: false
            })
        },
        animationend() {
            this.setData({
                animationend: true
            })
        }
    }
})