Vue.component('questionnaire', {
    template: `
    <div>
        <div>{{ page + 1 }} / {{ count }}</div>
        <div v-for="(item, index) in questions">
            <radioselect v-show="page === index" v-if="item.type=='radio'" :name="'q' + (index + '')" :title="item.title" :choices="item.choices" @pick="handlePick(arguments)"></radioselect>
            <multiselect v-show="page === index" v-else-if="item.type=='multi'" :name="'q' + (index + '')" :title="item.title" :choices="item.choices" @pick="handlePick(arguments)"></multiselect>
            <typetext v-show="page === index" v-else :name="'q' + (index +'')" :title="item.title" @pick="handlePick(arguments)"></typetext>
        </div>
        <mybutton v-show="page === count -1" :banned="disabledSubmit" @click="handleSubmit">提交</mybutton>
        <mybutton v-show="page < count -1" :banned="disabledNext" @click="handleNext">下一题</mybutton>
        <mybutton v-show="page > 0" :banned="false" @click="handlePrev">上一题</mybutton>
        <mybutton @click="handleReset" :banned="false">重置</mybutton>
    </div>`,
    props: {
        questions: {
            type: Array,
            default: function () {
                return [];
            }
        }
    },
    computed: {
        count: function () {
            return this.questions.length;
        }
    },
    data: function () {
        return {
            page: 0,
            disabledSubmit: true,
            disabledNext: true
        }
    },
    mounted: function () {},
    methods: {
        handleSubmit: function () {
            this.$emit('submit', this.questions);
        },
        handleNext: function () {
            if (this.page < this.count - 1) {
                this.page++;
                this.updateDisabledNext();
            }
        },
        handlePrev: function () {
            if (this.page > 0) {
                this.page--;
                this.updateDisabledNext();
            }
        },
        handleReset: function () {
            question = this.questions[this.page];
            switch (question.type) {
                case 'radio':
                    this.$children[this.page].curValue = "";
                    break;
                case 'multi':
                    this.$children[this.page].curValue = [];
                    break;
                case 'typetext':
                    this.$children[this.page].value = "";
                    break;
                default:
            }
        },
        handlePick: function (arguments) {
            question = this.questions[this.page];
            switch (question.type) {
                case 'radio':
                case 'multi':
                    this.questions[this.page].picked = arguments[0];
                    break;
                case 'typetext':
                    this.questions[this.page].text = arguments[0];
                    break;
                default:
            }
            this.updateDisabledNext();
            this.updateDisabledSubmit();
        },
        updateDisabledNext: function () {
            var flag = false;
            var item = this.questions[this.page];
            if (item.type === 'radio') {
                if (item.picked === "")
                    flag = true;
            } else if (item.type === 'multi') {
                if (item.picked.length < 2)
                    flag = true;
            } else {
                if (item.text.length < 10)
                    flag = true;
            }
            this.disabledNext = flag;
        },
        updateDisabledSubmit: function () {
            var flag = false;
            this.questions.forEach(function (item) {
                if (item.type === 'radio') {
                    if (item.picked === "")
                        flag = true;
                } else if (item.type === 'multi') {
                    if (item.picked.length < 2)
                        flag = true;
                } else {
                    if (item.text.length < 10)
                        flag = true;
                }
            });
            this.disabledSubmit = flag;
        }
    }
});