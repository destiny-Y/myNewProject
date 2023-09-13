<template>
  <div class="mybox" ref="map">
  </div>
</template>
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
import chinaJSON from './china.json';
let map = ref();
// 注册中国地图
echarts.registerMap('china', chinaJSON);
let option = {
  geo: {
    map: "china",  // 中国地图
    show: true,
    // roam: true,  // 鼠标缩放的效果
    // 地图的位置
    left: 50,
    top: 100,
    right: 50,
    bottom: 0,
    // 地图上文字的设置
    label: {
      show: true,
      // totate:2,  // 文字的旋转角度
      color: "white",
      fontSize: 14,
    },
    // 每一个多边形的样式
    itemStyle: {
      color: "deepskyblue",
      opactity: .8
    },
    // 地图高亮的效果
    emphasis: {
      itemStyle: {
        color: "pink"
      },
      label: {
        fontSize: 20
      }
    },

  },
  // 布局位置
  grid: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
  },
  // 
  series: [
    {
      type: "lines",  // 航线
      data: [
        {
          coords: [
            [116.405285, 39.904989],
            [119.306239, 26.075302]
          ],
          // 统一的样式设置
          lineStyle: {
            color: "blue",
            width: 10,
          },
        }
      ],  // 
      // 开启动画特效
      effect: {
        show: true,
        symbol:'circle',
        
      }
    }
  ]
}
onMounted(() => {

  let mycharts = echarts.init(map.value);
  mycharts.setOption(option);
})

</script>

<style scoped></style>