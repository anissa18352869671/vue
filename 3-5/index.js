var app = new Vue({
    el: "#app",
    data: {
        list: [
            [{
                id: 1,
                name: 'iPhone7',
                price: 6188,
                count: 1,
                check: false,
            }, {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1,
                check: false,
            }, {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1,
                check: false,
            }, {
                id: 4,
                name: 'iTouch',
                price: 4288,
                count: 1,
                check: false,
            }],
            [{
                id: 1,
                name: 'pie',
                price: 20,
                count: 1,
                check: false,
            }, {
                id: 2,
                name: 'apple',
                price: 5,
                count: 1,
                check: false,
            }, {
                id: 3,
                name: 'pear',
                price: 3,
                count: 1,
                check: false,
            }, {
                id: 4,
                name: 'orange',
                price: 2,
                count: 1,
                check: false,
            }]
        ],
        checkTotal: true
    },
    computed: {
        totalPrice: function () {
            if (this.checkTotal) {
                var total = 0;
                for (var i = 0; i < this.list.length; i++) {
                    for (let j = 0; j < this.list[i].length; j++) {
                        var item = this.list[i][j];
                        item.check = true;
                        total += item.price * item.count;
                    }

                }
                return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
            } else {
                var total = 0;
                for (var i = 0; i < this.list.length; i++) {
                    for (let j = 0; j < this.list[i].length; j++) {
                        if (this.list[i][j].check) {
                            var item = this.list[i][j];
                            total += item.price * item.count;
                        }
                    }
                }
                return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
            }
        }
    },
    methods: {
        handleReduce: function (index, indexs) {
            if (this.list[indexs][index].count === 1) return;
            this.list[index][index].count--;
        },
        handleAdd: function (index, indexs) {
            this.list[indexs][index].count++;
        },
        handleRemove: function (index, indexs) {
            this.list[indexs].splice(index, 1);
        },
        CheckItem: function (index, indexs) {
            this.list[index][indexs].check = !this.list[index][indexs].check;
        },
        checkAll: function () {
            this.checkTotal = !this.checkTotal
            if (this.checkTotal) {
                for (var i = 0; i < this.list.length; i++) {
                    for (let j = 0; j < this.list[i].length; j++) {
                        this.list[i][j].check = true;
                    }
                }
            } else {
                for (var i = 0; i < this.list.length; i++) {
                    for (let j = 0; j < this.list[i].length; j++) {
                        this.list[i][j].check = false;
                    }
                }
            }

        }
    }
})