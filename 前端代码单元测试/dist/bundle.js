$(
    function () {
        //获取节点
        var width = $("#width");
        var height = $("#height");
        var add = $("#add");
        var zhouchang = $('#zhouchang');
        var area = $("#area");
        //处理浮点
        function roundFractional(x, n) {
            return Math.round(x * Math.pow(10, n)) / Math.pow(10, n)
        }
        //点击事件
        add.click(function(){
            var w = Number(width.val());
            var h = Number(height.val());
            var zc = 2 * (w + h);
            var ae = w * h
            zhouchang.val(roundFractional(zc, 2));
            area.val(roundFractional(ae, 2));
        })
    }
);;