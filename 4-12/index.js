var app = new Vue({
    el: "#app",
    data: {
        status: 1,
        questions: [{
            type: "radio",
            title: '请问您的性别是',
            choices: ['男', '女'],
            picked: ""
        },{
            type: "checkbox",
            title: '请问您的兴趣爱好是',
            choices: ['看书', '游泳','跑步','看电影','听音乐'],
            picked: []
        },{
            type: "textarea",
            title: '请介绍一下自己',
            text: ""
        }]
    },
    methods: {
        handleSubmit: function (e) {
            var text = "";
            text += "你是" + e[0].picked + "的\n";
            text += "你喜欢" + e[1].picked.join("和") + "\n";
            text += "你说'" + e[2].text + "'\n";
            alert(text);
        }
    },
})