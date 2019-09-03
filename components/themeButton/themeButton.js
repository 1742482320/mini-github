Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    properties: {
        btype: {
            type: String,
            value: 'default'
        },
        bwidth: {
            type: String,
            value: '80rpx',
        },
        bheight: {
            type: String,
            value: '60rpx'
        },
        bdisabled: {
            type: Boolean,
            value: false
        }
    },
    methods: {
      btap(e){
        /*
        // 元素的左边距和上边距
        console.log('offsetLeft', e.currentTarget.offsetLeft)
        console.log('offsetTop', e.currentTarget.offsetTop)
        // 事件触发的原点，x轴和y轴
        console.log('x', e.detail.x)
        console.log('y', e.detail.y)
        // 元素中事件触发的原点
        console.log('tap x', e.detail.x - e.currentTarget.offsetLeft)
        console.log('tap y', e.detail.y - e.currentTarget.offsetTop)
        */
        this.setData({
          istap: true,
          tapx: e.detail.x - e.currentTarget.offsetLeft,
          tapy: e.detail.y - e.currentTarget.offsetTop
        })
      },
      bend(e){
        this.setData({
          istap: false
        })
      }
    }
})