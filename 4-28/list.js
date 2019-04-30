Vue.component('list', {
    props: {
        list: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    template: `<div class="list">
    <div class="list-item" v-for><span></span></div>
    </div>`,
    render: function (h) {
        var _this = this;
        var list = [];
        this.list.forEach(function (msg, index) {
            var node = h('div', {
                attrs: {
                    class: 'list-item'
                }
            }, [
                h('span', msg.name + '：'),
                h('div', {
                    attrs: {
                        class: 'list-msg'
                    }
                }, [
                    h('p', msg.message),
                    h('a', {
                        attrs: {
                            class: 'list-reply'
                        },
                        on: {
                            click: function () {
                                _this.handleReply(index);
                            }
                        }
                    }, '回复'),
                    h('a', {
                        attrs: {
                            class: 'list-delete'
                        },
                        on: {
                            click: function () {
                                _this.handleDelete(index);
                            }
                        }
                    }, '删除')
                ])
            ])
            list.push(node);
        });
        if (this.list.length) {
            return h('div', {
                attrs: {
                    class: 'list'
                }
            }, list);
        } else {
            return h('div', {
                attrs: {
                    class: 'list-nothing'
                }
            }, '留言列表为空');
        }
    },
    methods: {
        //向父组件派发事件reply
        handleReply: function (index) {
            this.$emit('reply', index);
        },
        handleDelete: function (index) {
            this.list.splice(index, 1);
            this.$emit('delete', index);
        }
    }
});