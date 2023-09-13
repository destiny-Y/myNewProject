<template>
  <div class="container">
    <!-- 数据大屏展示内容区域 -->
    <div class="screen" ref="screen">
      <!-- 顶部 -->
      <div class="top">
        <Top></Top>
      </div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourist"></Tourist>
          <!-- <Sex class="sex"></Sex>
          <Age class="age"></Age> -->
        </div>
        <div class="center">
          <Map class="map"></Map>
          <Line class="line"></Line>
        </div>
        <div class="right">我是右边</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Top from './top/index.vue';
import Tourist from './tourist/index.vue';
// import Sex from './sex/index.vue';
// import Age from './age/index.vue';
import Map from './map/index.vue';
import Line from './line/index.vue';

  // 获取数据大屏展示内容盒子的DOM元素
  let screen = ref();
  onMounted(() => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  });
  // 定义大屏缩放的比例
  function getScale(w=1920,h=1080){
    const ww = window.innerWidth / w;
    const wh = window.innerHeight / h;
    return ww < wh ? ww : wh;
  }
  // 监听视口的变化
  window.onresize = () => {
    screen.value.style.transform = `scale(${getScale()}) translate(-50%,-50%)`
  }
</script>
<style scoped>
.container{
  width: 100vw;
  height: 100vh;
  background: url(./images/bg.png) no-repeat;
  background-size: cover;
}
.screen{
  position: fixed;
  width: 1920px;
  height: 1080px;
  /* background-color: skyblue; */
  left: 50%;
  top: 50%;
  transform-origin: left top;
}
.screen .top{
  width: 100%;
  height: 40px;
  /* background-color: aqua; */
}
.screen .bottom{
  display: flex;
}
.screen .bottom .left{
  flex: 1;
  height: 1040px;
  display: flex;
  flex-direction: column;
}
.screen .bottom .left .tourist{
  flex: 1.2;
}
.screen .bottom .left .sex{
  flex: 1;
}
.screen .bottom .left .age{
  flex: 1;
}
.screen .bottom .right{
  flex: 1;
}
.screen .bottom .center{
  flex: 2;
  display: flex;
  flex-direction: column;
}
.screen .bottom .center .map{
  flex: 4;
}
.screen .bottom .center .line{
  flex:1;
}
</style>