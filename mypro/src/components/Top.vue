<template>
  <div class="top">
    <div class="box" ref="top" style="height:500px"></div>
  </div>
</template>

<script>
var echarts = require("echarts/lib/echarts");
export default {
  name: "Top",
  mounted() {
    var myChart = echarts.init(this.$refs.top);
    var data = [
      [5000, 10000, 6785.71],
      [4000, 10000, 6825],
      [3000, 6500, 4463.33],
      [2500, 5600, 3793.83],
      [2000, 4000, 3060],
      [2000, 4000, 3222.33],
      [2500, 4000, 3133.33],
      [1800, 4000, 3100],
      [2000, 3500, 2750],
      [2000, 3000, 2500],
      [1800, 3000, 2433.33],
      [2000, 2700, 2375],
      [1500, 2800, 2150],
      [1500, 2300, 2100],
      [1600, 3500, 2057.14],
      [1500, 2600, 2037.5],
      [1500, 2417.54, 1905.85],
      [1500, 2000, 1775],
      [1500, 1800, 1650]
    ];
    var cities = [
      "快手",
      "爱奇艺",
      "今日头条",
      "微信",
      "腾讯网",
      "腾讯视频",
      "苹果应用商城",
      "天翼视讯",
      "cibn互联网电视",
      "朋友圈",
      "王者荣耀"
    ];
    var barHeight = 50;
    var option = {
      title: {
        text: "Top10应用",
      },
      legend: {
        show: true,
        data: ["价格范围", "均值"]
      },
      grid: {
        top: 100
      },
      angleAxis: {
        type: "category",
        data: cities
      },
      tooltip: {
        show: true,
        formatter: function(params) {
          var id = params.dataIndex;
          return (
            cities[id] +
            "<br>流量：" +
            data[id][0] 
          );
        }
      },
      radiusAxis: {},
      polar: {},
      series: [
        {
          type: "bar",
          itemStyle: {
            color: "transparent"
          },
          data: data.map(function(d) {
            return d[0];
          }),
          coordinateSystem: "polar",
          stack: "最大最小值",
          silent: true
        },
        {
          type: "bar",
          data: data.map(function(d) {
            return d[1] - d[0];
          }),
          coordinateSystem: "polar",
          name: "价格范围",
          stack: "最大最小值"
        },
        {
          type: "bar",
          itemStyle: {
            color: "transparent"
          },
          data: data.map(function(d) {
            return d[2] - barHeight;
          }),
          coordinateSystem: "polar",
          stack: "均值",
          silent: true,
          z: 10
        },
        {
          type: "bar",
          data: data.map(function(d) {
            return barHeight * 2;
          }),
          coordinateSystem: "polar",
          name: "均值",
          stack: "均值",
          barGap: "-100%",
          z: 10
        }
      ]
    };
    myChart.setOption(option);
  }
};
</script>

<style lang="scss">
</style>