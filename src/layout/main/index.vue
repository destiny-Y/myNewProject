<template>
  <!-- 路由组件出口的位置 --> 
  <router-view v-slot="{Component}">
    <transition name="fade">
      <!-- 渲染layout一级路由组件的子路由 -->
      <component :is="Component" v-if="!flag"></component>
    </transition>
  </router-view>
</template>
<script setup lang="ts">
import useLayoutSettingStore from '@/store/modules/setting';
import { nextTick, ref, watch } from 'vue';
let LayoutSettingStore = useLayoutSettingStore();
// 控制子组件是否重新渲染
let flag = ref(false);
// 监听仓库数据是否发生变化，如果发生变化，说明刷新按钮被点击了
watch(() => LayoutSettingStore.refsh,() => {
  // 点击刷新按钮，组件销毁重新渲染
  flag.value = true;
  nextTick(() => {
    flag.value = false;
  });
})
</script>
<script lang="ts">
export default {
  name:"Main"
}
</script>
<style scoped>
.fade-enter-from{
  opacity: 0;
  transform: scale(0);
}
.fade-enter-active{
  transition: all 1s;
}
.fase-enter-to{
  opacity: 1;
  transform: scale(1);
}
</style>