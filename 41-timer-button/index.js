//构造函数
function TimerButton(){
    var btn = $('<input class="time-button" type="button" disabled>');
    var cfg = {
        container:'body',
        num:6,
        title:'同意',
        onClick:null,
    }
    var timer;
    this.show = function(conf){
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
}