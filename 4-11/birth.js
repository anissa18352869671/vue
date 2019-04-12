var Time = {
    getUnix: function () {
        var date = new Date();
        return date.getTime();
    },
    getTodayUnix: function () {
        var date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    getYearUnix: function () {
        var date = new Date();
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        return date.getTime();
    },
    getLastDate: function (time) {
        var date = new Date(time);
        var month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
        var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        return date.getFullYear() + '-' + month + '-' + day;
    },
    // getFormatTime: function (timestamp) {
    //     var now = this.getUnix();
    //     var today = this.getTodayUnix();
    //     var year = this.getYearUnix();
    //     var timer = (now - timestamp) / 1000;

    //     var tip = '';
    //     if (timer <= 86400) {
    //         tip = "已经出生了一天";
    //     } else {
    //         tip = "已经出生了" + Math.ceil(timer / 86400) + '天';
    //     }
    //     return tip;
    // },
    getFormatTime: function (timestamp) {
        var now = this.getUnix();
        //总剩余时间
        var timer = (now - timestamp) / 1000;
        //86400是一天的时间
        //总剩余时间一共有764.45625天,省略小数,为764天
        var today = Math.floor(timer / 86400);
        //764/365为2年
        var year = Math.floor(today / 365);
        //34天,为1个月
        var month = Math.floor(today % 365 / 31);
        //天数
        var hour = Math.floor(today % 365 % 31);

        console.log(timer);
        console.log(today);
        console.log(year);
        console.log(month);
        console.log(hour);

        var tip = '';
        tip = year + "岁" + month + "个月" + hour + '天';
        return tip;
    }
}




Vue.directive('birthday', {
    bind: function (el, binding) {
        el.innerHTML = Time.getFormatTime(binding.value);
    },
    unbind: function (el) {
        clearInterval(el._timeout_);
        delete el._timeout_;
    }
})