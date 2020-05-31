<template>
  <div>
      <div ref="terminal" style="height:500px"></div>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
export default {
    name:"terminal",
    mounted(){
        var myChart = echarts.init(this.$refs.terminal);
        var option = {
    title: {
        text: 'Top10终端用户分布',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        left: 'center',
        top: 'bottom',
        data: ['华为', '苹果', 'vivo', 'oppo', '小米', '三星', '乐视', '魅族',"一加","世纪天元","百米","金立","联想","努比亚","锤子","htc","美图","中兴","诺基亚","360手机"]
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {
                show: true,
                type: ['pie', 'funnel']
            },
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    series: [
        {
            name: '半径模式',
            type: 'pie',
            radius: [20, 110],
            center: ['25%', '50%'],
            roseType: 'radius',
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                {value: 843435, name: '华为'},
                {value: 479120, name: '苹果'},
                {value: 259875, name: 'vivo'},
                {value: 198667, name: 'oppo'},
                {value: 195255, name: '小米'},
                {value: 60524, name: '三星'},
                {value: 19429, name: '乐视'},
                {value: 19335, name: '魅族'},
                {value: 13184, name: '一加'},
                {value: 7359, name: '世纪天元'},
                {value: 5880, name: '白米'},
                {value: 5809, name: '金立'},
                {value: 5172, name: '联想'},
                {value: 4706, name: '努比亚'},
                {value: 4439, name: '锤子'},
                {value: 3248, name: 'htc'},
                {value: 3146, name: '美图'},
                {value: 2818, name: '中兴'},
                {value: 2566, name: '诺基亚'},
                {value: 2143, name: '360手机'}
            ]
        },
        {
            name: '面积模式',
            type: 'pie',
            radius: [30, 110],
            center: ['75%', '50%'],
            roseType: 'area',
            data: [
                 {value: 43435, name: '华为'},
                {value: 9120, name: '苹果'},
                {value:59875, name: 'vivo'},
                {value: 98667, name: 'oppo'},
                {value: 95255, name: '小米'},
                {value: 30524, name: '三星'},
                {value: 29429, name: '乐视'},
                {value: 19335, name: '魅族'},
                {value: 13184, name: '一加'},
                {value: 47359, name: '世纪天元'},
                {value: 5880, name: '白米'},
                {value: 5809, name: '金立'},
                {value: 25172, name: '联想'},
                {value: 14706, name: '努比亚'},
                {value: 24439, name: '锤子'},
                {value: 13248, name: 'htc'},
                {value: 23146, name: '美图'},
                {value: 12818, name: '中兴'},
                {value: 22566, name: '诺基亚'},
                {value: 12143, name: '360手机'}
            ]
        }
    ]
};

        myChart.setOption(option);
    }
}
</script>

<style>

</style>