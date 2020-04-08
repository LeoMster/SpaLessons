requirejs.config({
    'paths':{
        'jquery':'https://code.jquery.com/jquery-3.1.1.min'
    }
}),
require(["jquery"],function($){
    $(function () {
        var btnadd = $('#add');
        btnadd.click(function () {
            require(['index'],function(TimerButton){
                var tb = new TimerButton();
                tb.show({
                    num: 10,
                    title: '发送短信验证码',
                    onClick: function () {
                        console.log('点击了定时器按钮')
                    }
                });
            })
        });
    })
});