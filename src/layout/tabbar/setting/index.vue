<template>
  <!-- 右侧顶部静态 --> 
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button size="small" icon="Setting" circle></el-button>
  <img :src="userStore.avatar" alt="" style="width: 24px;height: 24px;margin: 0 11px;border-radius: 50%;">
  <!-- 下拉菜单 -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{userStore.username}}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="userLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
// 获取setting的小仓库
import useLayoutSettingStore from '@/store/modules/setting';
// 获取用户信息的仓库
import useUserStore from '@/store/modules/user';
import { useRoute, useRouter } from 'vue-router';

let layoutStore = useLayoutSettingStore();
let userStore = useUserStore();
// 获取路由器对象
let $router = useRouter();
// 获取路由对象
let $route = useRoute();
// 刷新按钮的回调
const updateRefsh = () => {
  layoutStore.refsh = !layoutStore.refsh;
  // layoutStore.refsh = true;
}
// 全屏按钮的回调
const fullScreen = () => {
  // DOM对象的一个属性，可以用来判断当前是否为全屏模式，如果是全屏，则返回true，不是全屏则返回null(false)
  let full = document.fullscreenElement;
  // 切换为全屏(会有浏览器适配问题)
  if(!full){
    // 利用文档根节点的requestFullscreen方法实现去全屏模式
    document.documentElement.requestFullscreen();
  }else{  // 退出全屏
    document.exitFullscreen();
  }
}
// 退出登录按钮的回调
const userLogout = async () => {
  // 需要向服务器发送请求(退出登录，告诉服务器此次token失效)

  // 清除仓库中的用户数据(username、avatar)
  await userStore.logout();
  // 跳转到登录页面
  $router.push({path:'/login',query:{redirect:$route.path}});
}
</script>
<script lang="ts">
export default {
  name:"Setting"
}
</script>
<style scoped>
</style>