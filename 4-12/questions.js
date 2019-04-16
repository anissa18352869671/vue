Vue.component('radioselect', {
    name: 'radioselect',
    props: {
        name: {
            type: String,
            default: "question0"
        },
        title: {
            type: String,
            default: "Question"
        },
        choices: {
            type: Array,
            default: function () {
                return ["C1", "C2", "C3"]
            }
        }
    },
    data: function () {
        var _this = this;
        var values = [];
        this.choices.forEach(function (item, index) {
            values.push(_this.name + (index + ''));
        });
        return {
            values: values,
            curValue: ""
        }
    },
    template: '\
        <div>\
            <span>{{ title }}</span>\
            <div v-for="(choice, index) in choices">\
                <input type="radio" v-model="curValue" :value="choices[index]" :id="values[index]">\
                <label :for="values[index]">{{ choice }}</label>\
            </div>\
        </div>\
        ',
    watch: {
        curValue: function (val) {
            this.$emit('pick', val);
        }
    }
});

Vue.component('multiselect', {
    name: 'multiselect',
    props: {
        name: {
            type: String,
            default: "question0"
        },
        title: {
            type: String,
            default: "Question"
        },
        choices: {
            type: Array,
            default: function () {
                return ["C1", "C2", "C3"]
            }
        }
    },
    data: function () {
        var _this = this;
        var values = [];
        this.choices.forEach(function (item, index) {
            values.push(_this.name + (index + ''));
        });
        return {
            values: values,
            curValue: []
        }
    },
    template: '\
        <div>\
            <span>{{ title }}</span>\
            <div v-for="(choice, index) in choices">\
                <input type="checkbox" v-model="curValue" :value="choices[index]" :id="values[index]">\
                <label :for="values[index]">{{ choice }}</label>\
            </div>\
        </div>\
        ',
    watch: {
        curValue: {
            handler: function (val) {
                this.$emit('pick', val);
            },
            deep: true
        }
    }
});

Vue.component('typetext', {
    name: 'typetext',
    props: {
        name: {
            type: String,
            default: "question0"
        },
        title: {
            type: String,
            default: "Question"
        },
        text: {
            type: String,
            default: ""
        }
    },
    data: function () {
        return {
            value: this.text
        }
    },
    template: '\
            <div>\
                <span>{{ title }}</span>\
                <div>\
                    <textarea v-model="value">\
                    </textarea>\
                </div>\
            </div>\
            ',
    methods: {},
    watch: {
        value: function (val) {
            this.$emit('pick', val);
        }
    }
});