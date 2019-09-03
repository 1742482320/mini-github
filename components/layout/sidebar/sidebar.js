Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    properties: {
        openside: {
            type: Boolean,
            value: false
        },
        navindex: {
            type: String,
            value: 'Explore'
        }
    },
    ready() {
        let sideHeight = wx.getStorageSync('SYSTEMINFO').windowHeight

        this.setData({
            sideHeight,
            avatar: wx.getStorageSync('userInfo').data.avatar_url,
            name: wx.getStorageSync('userInfo').data.login,
            join: wx.getStorageSync('userInfo').data.created_at.split('T')[0].replace(/-/g, '/')
        })
    },
    data: {
        nav: [{
                icon: 'iconsearch',
                name: 'Explore'
            },
            {
                icon: 'iconpinglun',
                name: 'Events'
            },
            {
                icon: 'iconicon-storage2',
                name: 'Repository'
            },
            {
                icon: 'iconuser',
                name: 'Follow'
            },
            {
                icon: 'iconguanzhu',
                name: 'Starred'
            },
            {
                icon: 'iconwenti',
                name: 'Issues'
            },
            {
                icon: 'iconlabelb',
                name: 'Gists'
            },
            {
                icon: 'iconshezhi-xue',
                name: 'Setting'
            },
            {
                icon: 'iconzhuyi',
                name: 'About'
            }
        ]
    },
    methods: {
        colseside() {
            this.setData({
                fadein: false
            })
            setTimeout(() => {
                this.setData({
                    openside: false
                })
            }, 400)
        },
        switchnav(e) {
            console.log(e)
            console.log('y', e.detail.y, 'offsetTop', e.currentTarget.offsetTop)
            let name = e.currentTarget.dataset.name
            if(name != this.data.navindex){
                this.triggerEvent('switchnav', {
                    name: name
                })
            }
            this.setData({
                ripplename: name,
                istap: true,
                tapx: e.detail.x - e.currentTarget.offsetLeft,
                tapy: e.detail.y - e.currentTarget.offsetTop,
            })
            setTimeout(function(){
                this.colseside()
            }.bind(this),500)
        },
        bend(e) {
            this.setData({
                istap: false
            })
        },
        openUserInfo() {
            this.triggerEvent('openUserInfo')
        },
        scroll(e){
            console.log(e)
        }
    },
    observers: {
        'openside': function (openside) {
            if (openside) {
                this.setData({
                    fadein: true
                })
            } else {
                this.setData({
                    fadein: false
                })
            }
        }
    }
})