<template>
  <!-- 并非所有的路由都需要在菜单中展示 --> 
  <template v-for="(item) in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 只有一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute">
        <el-icon>
          <component :is="item.children[0].meta.icon"></component>
        </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 有多个子路由 -->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <!-- 要使用递归组件 -->
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
// 获取路由器对象
let $router = useRouter();
// 获取父组件传递的全部路由数组
defineProps(['menuList']);
// 点击菜单的回调
const goRoute = (vc: any) => {
  // 路由跳转
  $router.push(vc.index);
}
</script>
<script lang="ts">
export default {
  name: 'Menu'  // 递归组件必须有名字
}
</script>
<style scoped></style>