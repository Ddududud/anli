<template>
  <div>
    <!-- 当日24小时流量趋势图  -->
    <div ref="tu" style="width:100%;height:600px;"></div>

  </div>
</template>

<script>
// // 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// // 引入柱状图
require("echarts/lib/chart/bar");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
  name:'Tu',
  props: {},
  data() {
    return {
      date: []
    };
  },
  created() {
    for (var i = 0; i < 24; i++) {
      this.date.push(i + "时");
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(this.$refs.tu);
    var option = {
      title: {
        text: "当日24小时流量趋势图"
      },
      tooltip: {
        show:true,
        trigger: "axis",
        formatter:function(params) {
          return params[0].axisValue+"<br>"+"当日流量:"+params[0].value+"<br>用户量:"+params[0]['data']['用户量']
        }
      },
      legend: {
        data: ["当日流量"]
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: { readOnly: false },
          magicType: { type: ["line", "bar"] },
          restore: {},
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: this.date
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}GB"
        }
      },
      series: [
        {
          name: "当日流量",
          type: "line",
          data: [
            { value: 1153.199515, '用户量': 424698 },
            { value:525.6687154,'用户量': 292458 },
            { value:297.9072017,'用户量': 239145 },
            { value:234.9259967,'用户量': 216335 },
            { value:235.3401274,'用户量': 213323 },
            { value:403.527691,'用户量': 268453 },
            { value:896.5818437,'用户量': 481937 },
            { value:1808.769185,'用户量': 424698 },
            { value:2398.814451,'用户量': 424698 },
            { value:2428.226149,'用户量': 424698 },
            { value:2490.74319,'用户量': 424698 },
            { value:2286.962027,'用户量': 424698 },
            { value:2423.526401,'用户量': 424698 },
            { value:2217.75643,'用户量': 424698 },
            { value:2253.688007,'用户量': 424698 },
            { value:2259.717199,'用户量': 424698 },
            { value:2204.200084,'用户量': 424698 },
            { value:2153.108417,'用户量': 424698 },
            { value:2177.084424,'用户量': 424698 },
            { value:2196.133044,'用户量': 424698 },
            { value:2364.866589,'用户量': 424698 },
            { value:2390.015792,'用户量': 424698 },
            { value:2234.462158,'用户量': 424698 },
            { value:1700.479724,'用户量': 424698 }
          ],
          markPoint: {
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          }
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  },
  methods: {}
};
</script>

<style>
</style>
