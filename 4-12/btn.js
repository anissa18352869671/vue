Vue.component('mybutton', {
    props: {
        fontcolor: {
            type: String,
            default: "#000"
        },
        banned: {
            type: Boolean,
            default: true
        }
    },
    template: `
    <div>
        <button class="mybutton" @click="handleClick" :disabled="banned"><slot></slot></button>
    </div>`,
    methods: {
        getStyle: function () {
            return {
                color: this.fontcolor,
                ":active color": "#fff"
            }
        },
        handleClick: function () {
            this.$emit('click');
        }
    }
});