Vue.component('tabs', {
    template: `<div class="tabs">
    <div class="tabs-bar">
        <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)">{{item.label}}
        <span v-if="isShown(item)" @click="deleteTab(index,$event)">×</span>
        </div>
    </div>
    <div class="tabs-content">
        <slot></slot>
    </div>
</div>`,
    props: {
        value: {
            type: [String, Number]
        }
    },
    data: function () {
        return {
            currentValue: this.value,
            navList: [],
        }
    },
    methods: {
        tabCls: function (item) {
            // console.log(item)
            return ['tabs-tab', {
                'tabs-tab-active': item.name === this.currentValue
            }]
        },
        getTabs() {
            return this.$children.filter(function (item) {
                return item.$options.name === "pane"
            })
        },
        updateNav() {
            this.navList = [];
            var _this = this;
            this.getTabs().forEach(function (pane, index) {
                _this.navList.push({
                    label: pane.label,
                    name: pane.name || index,
                    closable: pane.closable
                });
                if (!pane.name) pane.name = index;
                if (index === 0) {
                    if (!_this.currentValue) {
                        _this.currentValue = pane.name || index;
                    }
                }
            });
            this.updateStatus();
        },
        delete() {
            this.show = true;
        },
        deleteApi() {
            this.$destroy('pane');
        },
        updateStatus() {
            var tabs = this.getTabs();
            // console.log(tabs);
            var _this = this;
            tabs.forEach(function (tab) {
                // console.log(tab)
                return tab.show = tab.name === _this.currentValue;
            })
        },
        handleChange: function (index) {
            var nav = this.navList[index];
            var name = nav.name;
            this.currentValue = name;
            this.$emit('input', name);
            this.$emit('on-click', name);
        },
        isShown: function (item) {
            // console.log(item.closable);

            let flag = item.closable === true;
            // console.log(flag);
            // console.log("-------------------------");

            return flag;
        },
        deleteTab: function (index, e) {
            if (this.navList[index].name === this.currentValue) {
                if (index > 0) {
                    this.currentValue = this.navList[index - 1].name;
                    this.navList.splice(index, 1);
                    e.stopPropagation();
                } else {
                    this.navList.splice(index, 1);
                    e.stopPropagation();
                    if (this.navList.length > 0) {
                        this.currentValue = this.navList[0].name;
                    } else {
                        this.currentValue = "";
                    }
                }

            } else {
                this.navList.splice(index, 1);
                e.stopPropagation();
                if (this.navList.length === 0) {
                    this.currentValue = "";
                }
            }
        }


    },
    watch: {
        value: function (val) {
            this.currentValue = val;
        },
        currentValue: function () {
            this.updateStatus()
        }
    },
})