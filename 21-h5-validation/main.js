$(function() {
    var l = $("#rectangle-width")
    var u = $("#rectangle-height");
    function c(e, t) {
        return Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
    }
    $(".rectangle form").submit(function(e) {
        e.preventDefault();
        var t = Number(l.val())
        var a = Number(u.val())
        var r = c(2 * t + 2 * a, 2)
        var n = c(t * a, 2);
        $("#rectangle-perimeter").val(r),
        $("#rectangle-area").val(n)
    })
});