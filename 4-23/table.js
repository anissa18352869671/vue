Vue.component('vTable', {
    template: `<table>
    <colgroup>
        <col :style="styles"></col> <col :style="styles"></col>
    </colgroup>
    <thead>
            <tr>
                <th v-for="(item,index) in currentColumns">
                {{item.title}}
                <span v-if="isShown(item)">
                    <a :class="activeClass == 1 ? 'on':''" @click="handleSortByAsc(index)">↑</a>
                    <a :class="activeClass == 2 ? 'on':''"  @click="handleSortByDesc(index)">↓</a>
                </span>
                </th>
            </tr>
    </thead> 
    <tbody>
        <tr  v-for="item in currentData" >
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
        </tr>
    </tbody>
    </table>`,
    props: {
        columns: {
            type: Array,
            default: function () {
                return
            }
        },
        data: {
            type: Array,
            default: function () {
                return
            }
        },
        width: {
            type: Array,
            defalut: function () {
                return [];
            }
        }
    },
    data: function () {
        return {
            currentColumns: [],
            currentData: [],
            currentWidth: [],
            activeClass: -1,
            styles: {
                width: 200 + "px"
            }
        }
    },
    methods: {
        handleSortByAsc: function (index) {
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function (col) {
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'asc';

            this.currentData.sort(function (a, b) {
                return a[key] > b[key] ? 1 : -1;
            });
            this.activeClass = 1;
        },
        handleSortByDesc: function (index) {
            var key = this.currentColumns[index].key;
            this.currentColumns.forEach(function (col) {
                col._sortType = 'normal';
            });
            this.currentColumns[index]._sortType = 'desc';

            this.currentData.sort(function (a, b) {
                return a[key] < b[key] ? 1 : -1;
            });
            this.activeClass = 2;
        },
        makeColumns: function () {
            this.currentColumns = this.columns.map(function (col, index) {
                //添加一个字段标识当前列排序的状态,后续使用

                col._sortType = 'normal';
                col._index = index;
                return col;
            });
        },
        makeData: function () {
            this.currentData = this.data.map(function (row, index) {
                row._index = index;
                return row;
            })
        },
        makeWidth: function () {
            this.currentWidth = this.width.map(function (width, index) {
                return width;
            });
        },
        isShown: function (item) {
            let flag = item.sortable;
            return flag;
        },
        changeClass: function (item) {
            if (item._sortType === 'asc' || item._sortType === 'desc') {
                return "on"
            } else {
                return;
            }
        }
    },
    mounted() {
        //v-table初始化时调用
        this.makeColumns();
        this.makeData();
        this.makeWidth();
    },
    watch: {
        data: function () {
            this.makeData();
            var sortedColumn = this.currentColumns.filter(function (col) {
                return col._sortType !== "normal";
            });

            if (sortedColumn.length > 0) {
                if (sortedColumn[0]._sortType === "asc") {
                    this.handleSortByAsc(sortedColumn[0]._index);
                } else {
                    this.handleSortByDesc(sortedColumn[0]._index)
                }
            }
        }
    }
})