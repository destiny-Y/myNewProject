<template>
  <div class="top">
    <div class="left">
      <span class="lbtn" @click="goHome">首页</span>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报告</span>
      <span class="time">当前时间：&nbsp;&nbsp;{{time}}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onBeforeMount, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment';

let $router = useRouter();
// 首页按钮的回调
const goHome = () => {
  $router.push("/home");
}
// 存储当前的时间
let time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'));
// 定时器
let timer = ref(0);
// 组件挂载完毕，要实时更新时间
onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 hh:mm:ss');
  },1000);
});
onBeforeMount(() => {
  clearInterval(timer.value);
});

</script>
<style scoped>
.top {
  width: 100%;
  height: 40px;
  display: flex;
}

.top .left {
  flex:1.5;
  background:url(../images/dataScreen-header-left-bg.png) no-repeat;
  background-size:cover;
}
.top .left .lbtn{
  float: right;
  width: 150px;
  height: 40px;
  background: url(../images//dataScreen-header-btn-bg-l.png) no-repeat;
  background-size: cover;
  text-align: center;
  line-height: 40px;
  color: #29fcff;
  font-size: 20px;
}
.top .center{
  flex:2;
}
.top .center .title{
  width: 100%;
  height: 74px;
  background: url(../images/dataScreen-header-center-bg.png) no-repeat;
  background-size: cover;
  text-align: center;
  line-height: 74px;
  color: #29fcff;
  font-size: 30px;
}
.top .right{
  flex:1.5;
  background:url(../images//dataScreen-header-right-bg.png) no-repeat;
  background-size:cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top .right .rbtn{
  width: 150px;
  height: 40px;
  background: url(../images/dataScreen-header-btn-bg-r.png) no-repeat;
  background-size: cover;
  text-align: center;
  line-height: 40px;
  color: #29fcff;
  font-size: 20px;
}
.top .right .time{
  color: #29fcff;
  font-size: 20px;
  margin-right: 15px;
}

</style>