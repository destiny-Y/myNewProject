<template>
  <div class="logo">
    <!-- <img :src="setting.logo" alt="">
    <p>{{setting.title}}</p> -->
    <img src="../../../public//logo.png" alt="">
    <p>硅谷甄选运营平台</p>
  </div>
</template>
<script lang="ts" setup>
// 引入设置logo与标题的配置文件
// import setting from "@/setting.ts";
</script>
<script lang="ts">
export default {
  name:"Logo"
}
</script>
<style scoped>
.logo{
  width:100%;
  height:50px;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
}
.logo img{
  width: 40px;
  height: 40px;
}
.logo p{
  font-size: 20px;
  margin-left: 10px;
}
</style>