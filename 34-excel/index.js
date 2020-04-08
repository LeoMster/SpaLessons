$(function() {
    // var e = $("#main");
    // return new Handsontable(e.get(0),{
    //     data: [["login_name", "登录名", "C(9)", "N", "Y", ""], ["password", "密码", "C(9)", "N", "N", ""], ["chinese_name", "中文名", "C(10)", "N", "N", ""], ["english_name", "英文名", "C(10)", "Y", "N", ""], ["gender", "性别", "C(1)", "Y", "N", ""], ["address", "家庭住址", "C(100)", "Y", "N", ""], ["mobile", "联系电话", "C(15)", "Y", "N", ""], ["comment", "备注", "C(100)", "Y", "N", ""]],
    //     contextMenu: !0, //是否开启菜单
    //     manualRowResize: !0, //是否开启手动调整行大小
    //     manualColumnResize: !0,  //是否开启手动移动列
    //     rowHeaders: !0,
    //     colHeaders: ["字段", "说明", "数据类型", "允许为空", "主键", "备注"]
    // })
    var dataObject = [
        {
            '字段':'login_name',
            '说明':'登录名',
            '数据类型':'C(9)',
            '允许为空':'N',
            '主键':'Y',
            '备注':""
        }
    ]
    var e = document.getElementById('main');
    var hotElementContainer = e.parentNode;  //挂在元素
    var settings = {
        data:dataObject,
        colums:[
            {
                data:'字段',
                type: 'text',
            },
            {
                data:'说明',
                type:'text',
            },
            {
                data:'数据类型',
                type:'text'
            },
            {
                data:'允许为空',
                type:'text'
            },
            {
                data:'主键',
                type:'text'
            },
            {
                data:'备注',
                type:'text'
            }
        ],
        width:805,
        height:407,
        manualRowResize: true,
        manualColumnResize: true,
        rowHeaders: true,
        colHeaders:[
            '字段','说明','数据类型','允许为空','主键','备注'
        ],
        manualRowMove: true,
        manualColumnMove: true,
        contextMenu: true,
        filters: true,
        dropdownMenu: true
    }
    var main = new Handsontable(e,settings) //new的过程构造函数里面可以做一堆操作，定义一堆方法
});
// manualRowMove: 是否开启手动移动行
// bindRowsWithHeaders: 移动时行头也随之移动