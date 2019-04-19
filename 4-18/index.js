var app = new Vue({
    el: "#app",
    data: {
        columns: [{
            title: "姓名",
            key: "name"
        }, {
            title: "年龄",
            key: "age",
            sortable: true
        }],
        data: [{
            name: "王小明",
            age: 18,
            birthday: '1999-02-21',
            address: '北京市朝阳区芍药居'
        }, {
            name: "anissa",
            age: 15,
            birthday: '1999-02-21',
            address: '北京市朝阳区芍药居'
        }, {
            name: "bbbb",
            age: 48,
            birthday: '1989-02-21',
            address: '北京市朝阳区芍药居'
        }, {
            name: "xxxx",
            age: 10,
            birthday: '1999-02-21',
            address: '北京市朝阳区芍药居'
        }],
        columns1: [{
            title: "name",
            key: "name"
        }, {
            title: "age",
            key: "age",
            sortable: true
        }],
        data1: [{
            name: "王小明",
            age: 18,
            birthday: '1999-02-21',
            address: '北京市朝阳区芍药居'
        }, {
            name: "anissa",
            age: 15,
            birthday: '1999-02-21',
            address: '北京市朝阳区芍药居'
        }, {
            name: "bbbb",
            age: 48,
            birthday: '1989-02-21',
            address: '北京市朝阳区芍药居'
        }, {
            name: "xxxx",
            age: 10,
            birthday: '1999-02-21',
            address: '北京市朝阳区芍药居'
        }]
    },
    methods: {
        handleAddData: function () {
            this.data.push({
                name: "刘小天",
                age: 19,
                birthday: '1998-09-11',
                address: "北京市"
            })
        }
    },
})