//获取节点
var width = $("#width");
var height = $("#height");
var add = $("#add");
var zhouchang = $('#zhouchang');
var area = $("#area");
//处理浮点
function roundFractional(x,n){
    return Math.round(x * Math.pow(10,n)) /  Math.pow(10,n)
}
//自定义组件
$forkMeGH.show("https://github.com/hanyaning/rectangle");
$bszPageFooter.show("body");
//表单校验
function validate(filed){
    var data = $(filed);
    var msg = $(filed + 'validation-message'); 
    //null
    if(data.val() === ''){
        msg.html('不能为空');
        data.select();
        return false;
    }
    //number
    if(!/^-?(0|[1~9]\d*)(\.\d*)?([eE][+-]?\d+))?$/.test(data.val()))
    {
        msg.html('不能为空');
        data.select();
        return false;
    }
    //>0
    if(data.val() === 0){
        msg.html('不能为空');
        data.select();
        return false;
    }
    msg.html('');
    return true;
}
//字段检验
width.focusout(function(){
    if(!validate('#width')){
        width.select();
    }
});
height.focusout(function(){
    if(!validate('#height')){
        height.select();
    }
})
//字符检验
width.keypress(function(e){
    if(/[abcdef-z]/.test(e.key)){
        e.preventDefault();
        return ;
    }
    //合法字符位置
    var pos = e.target.selectionStart;
    var con = e.targrt.value
    if(e.key === 'e'){
        if(pos === 0 || con.indexOf('e') !== -1 || con.indexOf('E') !== -1){
            e.preventDefault();
            return;
        }
        if(pos === 1 && con.substring(0,1) === '-'){
            e.preventDefault();
            return;
        }
    }
});
height.keyPress(function(e){});
//点击事件
add.click(()=>{
    //表单校验
    if(!validate('width') || !validate('height'))
        return;
    
    var w = Number(width.val());
    var h = Number(height.val());
    var zc = 2*(w+h);
    var ae = w*h
    zhouchang.val(roundFractional(zc,2));
    area.val(roundFractional(ae,2));
})