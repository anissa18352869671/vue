var app = new Vue({
    /**
     * 发布一条留言,需要的数据有昵称和留言内容，发布操作应该在
     * 根实例app内完成，留言列表的数据也是从app获取。
     */
    el: '#app',
    data: {
        username: '', //用户名
        message: '', //留言内容
        list: [] //存储所有的留言内容
    },
    methods: {
        //给list添加一项留言数据，添加成功后，把textarea文本框置空
        handleSend: function () {
            if (this.username === '') {
                window.alert('请输入昵称');
                return;
            }
            if (this.message === '') {
                window.alert('请输入留言内容');
                return;
            }
            this.list.push({
                name: this.username,
                message: this.message
            });
            this.message = '';
        },
        //回复留言
        handleReply: function (index) {
            //提取昵称并设置到v-textarea
            var name = this.list[index].name;
            this.message = '回复@' + name + ':';
            this.$refs.message.focus();
        },
        handleDelete: function (index) {
            console.log(index);
        }
    }
});