Vue.component('pane', {
    name: 'pane',
    template: `<transition name="list" ><div class="pane list-pane" v-show="show"><slot></slot></div></transition>`,
    data: function () {
        return {
            show: true
        }
    },
    props: {
        name: {
            type: String
        },
        label: {
            type: String,
            default: ''
        },
        closable: {
            type: Boolean
        }
    },
    methods: {
        updateNav() {
            this.$parent.updateNav();
            // this.dele()
        },
        dele() {
            if (this.closable) {
                this.$parent.delete();
            }
        }
    },
    watch: {
        label() {
            this.updateNav();
        }
    },
    mounted() {
        this.updateNav();
    },
})