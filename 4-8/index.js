var app = new Vue({
    el: "#app",
    data: {
        show: false,
        close: true
    },
    methods: {
        handleClose: function () {
            this.show = false;
        }
    },
})