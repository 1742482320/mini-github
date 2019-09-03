var api = require('../../../api/api.js')
api.Repository = api.getRepositories
api.Starred = api.getStarred
// api.Issues = api.getRepositoriesIssues

Component({
    properties: {
        navindex: {
            type: String,
            value: ''
        }
    },
    options: {
        styleIsolation: 'apply-shared'
    },
    ready(){
        let contentData = {}
        contentData.userName = wx.getStorageSync('userInfo').data.login
        this.setData({
            contentData: contentData,
            wheight: wx.getStorageSync('SYSTEMINFO').windowHeight - 60
        })
    },
    observers: {
        "navindex": function (navindex) {
            // 组件第一次创建 observers 比 ready 先执行，所以加个判断
            if(this.data.contentData){
                // 现在接口没搞明白，有些接口没写，之后做完就不需要加判断了
                if(typeof api[navindex] == "function"){
                    api[navindex](this.data.contentData)
                }
            }
        }
    },
    methods: {
        dlstart(e){
            const sp = e.changedTouches[0]
            this.setData({
                sp,
                isload: false,
                istransition: false
            })
        },
        dlmove(e){
            // 上拉不做任和事
            let spY = this.data.sp.pageY
            if (spY > e.changedTouches[0].clientY){
                return
            }
            // 最大下拉高度 160
            this.setData({
                moveY: (e.changedTouches[0].clientY - spY > 160) ? 160 : e.changedTouches[0].clientY - spY
            })
        },
        dlend(){
            if(this.data.moveY >150){
                this.setData({
                    isload: true,
                    istransition: true
                })
                setTimeout(function(){
                    this.setData({
                        moveY: 0
                    })
                }.bind(this), 2000)
            } else {
                this.setData({
                    moveY: 0
                })
            }
        },
        clearStorage(){
            wx.clearStorage()
            wx.showToast({
                title: '清除成功',
            })
            setTimeout(function(){
                wx.reLaunch({
                    url: '/pages/login/login',
                })
            }.bind(this), 1000)
        }
    },
    data: {
        isload: false, // 加载框内容控制
        istransition: false, // 过渡控制，手指控制的时候没有过渡效果
        moveY: 0
    }
})