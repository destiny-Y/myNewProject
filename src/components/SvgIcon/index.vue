<template>
  <div>
    <h1>SVG测试</h1>
    <!-- <svg style="width: 30px;height: 30px;"> -->
    <svg :style="{width,height}">
      <!-- xlink-href指定用哪一个图标，属性值必须是#icon-图标名字 -->
      <!-- use标签fill属性可以设置图标的颜色 -->
      <!-- <use xlink:href="#icon-phone" fill="skyblue"></use> -->
      <use :xlink:href="prefix+name" :fill="color"></use>
    </svg>
  </div>
</template>
<script setup lang="ts">
// 接收父组件传递过来的参数
defineProps({
  // xlink:href属性值的前缀
  prefix:{
    type:String,
    default:"#icon-"
  },
  // 提供使用的图标名字
  name:String,
  // 颜色
  color:{
    type:String,
    default:'skyblue'
  },
  // 图标大小
  width:{
    type:String,
    default:"16px"
  },
  // 高度
  height:{
    type:String,
    default:"16px"
  }
})
</script>
<style scoped></style>