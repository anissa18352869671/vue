Vue.component('vInput', {
    props: {
        myvalue: {
            type: [String, Number],
            default: ""
        }
    },
    data() {
        return {
            value: this.myvalue
        };
    },
    // data: function () {
    //     return {
    //         currentValue: []
    //     }
    // },
    // makeValue: function () {
    //     this.currentValue = this.value;
    // },
    render: function (h) {
        var _this = this;
        return h('div', [
            h('span', '昵称：'),
            h('input', {
                attrs: {
                    type: 'text'
                },
                domProps: {
                    value: this.myvalue
                },
                on: {
                    input: function (event) {
                        _this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    }
});

Vue.component('vTextarea', {
    props: {
        myvalue: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            value: this.myvalue
        };
    },
    render: function (h) {
        var _this = this;
        return h('div', [
            h('span', '留言内容：'),
            h('textarea', {
                attrs: {
                    placeholder: '请输入留言内容'
                },
                domProps: {
                    value: this.myvalue
                },
                ref: "message",
                on: {
                    input: function (event) {
                        _this.value = event.target.value;
                        _this.$emit('input', event.target.value);
                    }
                }
            })
        ])
    },
    methods: {
        focus: function () {
            this.$refs.message.focus();
        }
    },
})