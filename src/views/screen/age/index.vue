<template>
  <div class="box2">
    <div class="title">
      <p>男女比例</p>
      <img src="../images/dataScreen-title.png" alt="">
    </div>
    <!-- echarts容器 -->
    <div class="charts" ref="charts"></div>
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';

let charts = ref();
let mycharts = echarts.init(charts.value);
onMounted(() => {
  let option = {
    title:{
      text:"男女比例",
    },
    grid:{
      left:0,
      top:0,
      bottom:0,
      right:0
    }
  }
  mycharts.setOption(option);
})
</script>
<style scoped>
.box2{
  width: 100%;
  height: 100%;
  background: url(../images//dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 25px 0px;
}
.box2 .title {
  margin-left: 20px;
}

.box2 .title p {
  color: white;
  font-size: 20px;
}
.box2 .charts{
  height: 200px;
}

</style>