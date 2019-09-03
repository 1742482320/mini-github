Component({
    options: {
        multipleSlots: true
    },
    properties: {
        itype: {
            type: String,
            value: 'text'
        },
        iplaceholder: {
            type: String,
            value: ''
        }
    },
    methods: {
      isfocus() {
        this.setData({
          isfocus: true
        })
      },
      isblur() {
        this.setData({
          isfocus: false
        })
      },
      iptFuc(e) {
        this.triggerEvent('iptFuc', {e: e})
      },
      iptconfirm() {
        this.triggerEvent('iptconfirm')
      }
    },
    data: {
      isfocus: false,
    }
}) 