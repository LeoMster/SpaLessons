// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据
var xData = [];
var yData = [];
for(var i = 0 ; i <= 1 ;i += 0.1){
    xData.push(i);
    if( i == 0 || i == 1){
        yData.push(0)
    }else{
        yData.push(-1*i*Math.log2(i) - (1-i)*Math.log2(1-i));
    }
}
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: xData,
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'line', //修改样式
        data: yData,
        smooth:true,
    }]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

