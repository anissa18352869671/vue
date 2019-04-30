var app = new Vue({
    el: "#app",
    data: {
        columns: [{
            title: "姓名",
            key: "name",
            sortable: false
        }, {
            title: "年龄",
            key: "age",
            sortable: true
        }],
        width: [200, 400],
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
        name: "",
        age: ""
    },
    methods: {
        handleAddData: function () {
            this.data.push({
                name: this.name,
                age: this.age,
                birthday: '1998-09-11',
                address: "北京市"
            })
        }
    },
})