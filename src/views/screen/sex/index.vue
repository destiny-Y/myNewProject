<template>
  <div class="box1">
    <div class="title">
      <p>男女比例</p>
      <img src="../images/dataScreen-title.png" alt="">
    </div>
    <div class="sex">
      <div class="man">
        <img src="../images//man.png" alt="">
      </div>
      <div class="women">
        <img src="../images//woman.png" alt="">
      </div>
    </div>
    <div class="rate">
      <p>男士58%</p>
      <p>女士42%</p>
    </div>
    <!-- echart部分 -->
    <div class="charts" ref="charts"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

let charts = ref();
onMounted(() => {
  let mycharts = echarts.init(charts.value);
  mycharts.setOption({
    title: {
      text: "男女比例",
      textStyle: {
        color: "skyblue"
      },
      left: "40%"
    },
    xAxis: {
      show:false,
      // type:"category",
      min:0,
      max:100
    },
    series: [
      {
        type: "bar",
        data:[58],
        barwidth:20,
        z:100,
        itemStyle:{
          color:"blue",
          borderRadius:20
        }
      },{
        type:"bar",
        data:[100],
        barwidth:20,
        barGap:'-100%',
        itemStyle:{
          color:"pink",
          borderRadius:20
        }
      }
    ],
    grid:{
      left:0,
      right:0,
      top:0,
      bottom:0,
    }
  });
})
</script>
<style scoped>
.box1 {
  width: 100%;
  height: 100%;
  background: url(../images//dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 25px 0px;
}

.box1 .title {
  margin-left: 20px;
}

.box1 .title p {
  color: white;
  font-size: 20px;
}

.box1 .sex {
  display: flex;
  justify-content: center;

}

.box1 .sex .man {
  width: 111px;
  height: 115px;
  margin: 30px;
  background: url(../images/man-bg.png) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1 .sex .women {
  width: 111px;
  height: 115px;
  margin: 30px;
  background: url(../images/woman-bg.png) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box1 .rate {
  display: flex;
  justify-content: space-evenly;
}

.box1 .charts {
  height: 100px;
}
</style>