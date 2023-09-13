<template>
  <!-- 顶部左侧静态 -->
  <el-icon style="margin-right: 10px;" @click="changeIcon">
    <component :is="layOutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 左侧面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <!-- 面包屑动态展示路由名字与标题 -->
    <!-- 在v3中，v-if的优先级高于v-for，所以不能同时使用，可以使用v-show -->
    <el-breadcrumb-item v-for="(item,index) in $route.matched" :key="index" v-show="item.meta.title" :to="item.path">
      <!-- 图标 -->
      <el-icon style="margin: 0 3px;vertical-align: top;">
        <component :is="item.meta.icon"></component>
      </el-icon>
      <span>{{ item.meta.title }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
// 引入仓库中的数据
import useLayoutSettingStore from '@/store/modules/setting.ts';
import { useRoute } from 'vue-router';

let $route = useRoute();
let layOutSettingStore = useLayoutSettingStore();
const changeIcon = ()=> {
  layOutSettingStore.fold = !layOutSettingStore.fold;
};

</script>
<script lang="ts">
export default {
  name:"Breadcrumb"
}
</script>
<style scoped>

</style>