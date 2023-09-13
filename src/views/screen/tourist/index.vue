<template>
  <div class="box">
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">可预约总量<span>9999</span>人</p>
    </div>
    <div class="number">
      <span v-for="(item, index) in people" :key="index">{{ item }}</span>
    </div>
    <!-- echarts展示图标信息 -->
    <div class="charts" ref="charts">

    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
// 引入echarts
import * as echarts from 'echarts';
// 引入水球图拓展插件
import 'echarts-liquidfill';

let people = ref('215908');

// 获取节点
let charts = ref();
onMounted(() => {
  // 获取echarts类的实例
  let mycharts = echarts.init(charts.value);
  // 设置实例的配置项
  mycharts.setOption({
    // 标题组件
    title: {
      text: "水球图",
    },
    // x轴组件
    xAxis: {},
    // y轴组件
    yAxis: {},
    // 系列，决定展示什么样的图形图标
    series: {
      type: 'liquidFill',
      data: [0.6, 0.4, 0.2],
      waveAnimation: true,//动画
      animationDuration: 3,
      animationDurationUpdate: 0,
      radius: '80%',//半径
      outline: {//外层边框颜色设置
        show: true,
        borderDistance: 8,
        itemStyle: {
          color: 'skyblue',
          borderColor: '#294D99',
          borderWidth: 8,
          shadowBlur: 20,
          shadowColor: 'rgba(0, 0, 0, 0.25)'
        }
      },

    },
    // 布局组件
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }
  })
})
</script>
<style scoped>
.box {
  background: url(../images/dataScreen-main-lb.png) no-repeat;
  background-size: cover;
  margin-top: 10px;
}

.box .top {
  margin-left: 20px;
}

.box .top .title {
  color: white;
  font-size: 24px;
  margin-top: 15px;
}

.box .top .bg {
  width: 68px;
  height: 7px;
  background: url(../images//dataScreen-title.png) no-repeat;
  background-size: 100% 100%;
  margin-top: 10px;
}

.box .top .right {
  float: right;
  color: white;
  font-size: 20px;
}

.box .top .right span {
  color: aqua;
}

.box .number {
  margin-top: 30px;
  display: flex;
  padding: 10px 10px;
}

.box .number span {
  flex: 1;
  height: 70px;
  text-align: center;
  line-height: 70px;
  background: url(../images//total.png) no-repeat;
  background-size: 100% 100%;
  color: #29fcff;
  font-size: 24px;
}

.box .charts {
  width: 100%;
  height: 255px;
}</style>