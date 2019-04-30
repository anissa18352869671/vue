/**
 * 使用v-model：动态绑定value，并监听input事件，
 * 把输入的内容通过$emit('input')派发给父组件。
 */
Vue.component('vInput', {
    template: `<div>
    <span>昵称</span>
    <input type="text" v-model="CurrentValue"/>
    <div>{{CurrentValue}}</div>
    </div>`,
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    data: function () {
        return {
            CurrentValue: ""
        }
    },
});

Vue.component('vTextarea', {
    template: `<div>
<textarea placeholder="请输入留言内容"  v-model="CurrentValue" ref="message"></textarea>
<div>{{CurrentValue}}</div>
</div>`,
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    data: function () {
        return {
            CurrentValue: ""
        }
    },
    // render: function (h) {
    //     var _this = this;
    //     return h('div', [
    //         h('span', '留言内容：'),
    //         h('textarea', {
    //             attrs: {
    //                 placeholder: '请输入留言内容'
    //             },
    //             domProps: {
    //                 value: this.value
    //             },
    //             ref: 'message',
    //             on: {
    //                 input: function (event) {
    //                     _this.value = event.target.value;
    //                     _this.$emit('input', event.target.value);
    //                 }
    //             }
    //         })
    //     ]);
    // },
    methods: {
        focus: function () {
            this.$refs.message.focus();
        }
    }
});