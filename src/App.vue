<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import request from '@/utils/request.ts';

// import { reqLogin } from './api/user';
import { onMounted } from 'vue';
onMounted(() => {
  /* request({
    url:'/user/login',
    method:"post",
    data:{
      username:"admin",
      password:"111111"
    }
  }).then((res) => {
    console.log(res);
  }) */
  // reqLogin({username:"admin",password:"111111"});
})

</script>

<style scoped></style>