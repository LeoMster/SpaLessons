var timerButton = (function(){
        //var html = '<input type="button" disabled>'; 字符串
        function show(conf){
            var btn = $('<input class="time-button" type="button" disabled>');
            var cfg = {
                container:'body',
                num:6,
                title:'同意',
                onClick:null,
            }
            var timer;
            //1.Dom绘制
           // $(container).html(html);
              $(cfg.container).append(btn);
              $.extend(cfg,conf);
              num = cfg.num;
              btn.val(cfg.title+'('+num+'s)');
              timer = setInterval(function(){
                num -- ;
                if(num === 0){
                    clearInterval(timer);
                    btn.val(cfg.title);
                    btn.removeAttr('disabled');
                }else{
                    btn.val(cfg.title+'('+num+'s)');
                }
            },1000);
            //2.事件绑定
            btn.click(cfg.onClick);
        }
        return{
            show:show
        }
}());
//不用page load $(())=>{})

//封装对象，有几种方案
//1.简单对象字面量 ,不完全是面向对象 
// var time{
//     show:function()
// }
//2.工厂函数，一个函数返回值是一个简单对象
// var time = (function(){
//     return{
//         show:function()
//     }
// }())  立即执行表达式
//3.构造函数 funtion time(){}  var tb = new time()