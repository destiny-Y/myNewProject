<script setup lang="ts">
import Logo from './logo/index.vue';
// 引入菜单
import Menu from './menu/index.vue';
// 引入tabbar
import Tabbar from "./tabbar/index.vue";
// 引入二级路由展示区
import Main from './main/index.vue';
// 获取用户相关的小仓库
import useUserStore from '@/store/modules/user';
// 引入控制菜单图标的小仓库
import useLayoutSettingStore from '@/store/modules/setting';
// 获取路由对象
import { useRoute } from 'vue-router';

let userStore = useUserStore();
let $route = useRoute();
let LayoutSettingStore = useLayoutSettingStore();


</script>
<script lang="ts">
export default {
  name:"Layout"
}
</script>
<template>
  <div class="layout_container">
    <!-- 左侧的菜单 -->
    <div class="layout_slider" :class="{fold:LayoutSettingStore.fold ? true:false}">
      <Logo></Logo>
      <!-- 展示菜单 -->
      <!-- 滚动组件 -->
      <el-scrollbar height="400px" class="scrollbar">
        <!-- 菜单组件 -->
        <el-menu :default-active="$route.path" background-color="#001529" text-color="#fff" active-text-color="pink" :collapse="LayoutSettingStore.fold">
          <!-- 根据路由动态地生成菜单 -->
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout_tabbar" :class="{tabbarfold:LayoutSettingStore.fold ? true:false}">
      <Tabbar></Tabbar>
    </div>
    <!-- 内容展示区 -->
    <div class="layout_main" :class="{mainfold:LayoutSettingStore.fold ? true:false}">
      <Main></Main>
    </div>
  </div>
</template>
<style scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.layout_container .layout_slider {
  width: 260px;
  height: 100vh;
  background-color: #001529;
  color: white;
  transition: all 0.3s;
}

.layout_container .layout_slider .scrollbar{
  width: 100%;
  height: calc(100vh - 50px);
}
.layout_container .layout_slider .scrollbar .el-menu{
  border-right: none;
}

.layout_container .layout_tabbar {
  /* 宽度有bug，一会儿再改 */
  width: calc(100% - 260px);
  height: 50px;
  /* background-color: pink; */
  position: fixed;
  top: 0;
  right: 0;
  /* left: 260px; */
  box-sizing: border-box;
  transition: all 0.3s;
  background-color: #eee;
  border-bottom: 1px solid #666;
}

.layout_container .layout_main {
  box-sizing: border-box;
  position: absolute;
  width: calc(100% - 260px);
  height: calc(100vh - 50px);
  /* background-color: skyblue; */
  left: 260px;
  top: 50px;
  padding: 20px;
  overflow: auto;
  transition: all 0.3s;
}
.layout_container .fold{
  width: 50px;
}
.layout_container .tabbarfold{
  width: calc(100vw - 50px);
}
.layout_container .mainfold{
  width: calc(100% - 50px);
  left: 50px;
}
</style>

