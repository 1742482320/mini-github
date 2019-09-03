Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    properties: {
        navindex: {
            type: String,
            value: ''
        }
    },
    methods: {
        openside(){
            this.triggerEvent('openside', {open: true})
        }
    }
})