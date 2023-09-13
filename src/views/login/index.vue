<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">
      </el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" type="primary" size="default" class="login_btn" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive, ref } from 'vue';
// 引入用户相关的小仓库
import useUserStore from '@/store/modules/user';
// 路由
import { useRouter,useRoute } from 'vue-router';
// 引入消息提示框
import { ElNotification } from 'element-plus';
// 引入获取当前时间的函数
import { getTime } from '@/utils/time';

let useStore = useUserStore();
// 获取路由器
let $router = useRouter();
let $route = useRoute();
// 收集用户输入的账号与密码
let loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
});
// 获取表单元素
let loginForms = ref();
// 定义变量控制按钮加载效果
let loading = ref(false);
// 登录按钮的回调
const login = async () => {
  // 全部表单项校验通过才能发送请求
  await loginForms.value.validate();
  loading.value = true;  // 开始加载
  // 仓库发登录请求，
  // 请求成功，跳转到首页，展示数据；请求失败
  try {
    await useStore.userLogin(loginForm);
    // 编程式导航跳转到首页
    // 判断登录的时候，路由路径是否有query参数，如果有，就跳转到query参数的地址
    // (老师的需求：从哪个页面退出登录后，再次登录应该回到那个页面)
    let redirect:any = $route.query.redirect;
    $router.push({path:redirect || '/' });
    // 登录成功的提示信息
    ElNotification({
      type: "success",
      message: "欢迎回来",
      title: `HI,${getTime()}好!`
    });
    loading.value = false;
  } catch (error) {
    loading.value = false;
    // 登录失败
    ElNotification({
      type: 'error',
      message: (error as Error).message
    })
  }
}
// 自定义校验规则函数
const validatorUserName = (rule: any, value: any, callback: any) => {
  // rule 即为数组校验规则对象
  // value 即为表单元素的文本内容
  // callback 如果符合条件，callback放行通过，如果不符合条件，调用callback，注入错误提示信息
  if (value.length >= 5) {
    callback();
  } else {
    callback(new Error("账号长度至少五位"));
  }
};
const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback();
  } else {
    callback(new Error("密码长度至少六位"));
  }
}
// 定义表单校验需要的配置对象
const rules = {
  // required 代表字段是必须要校验的
  // min 文本长度最少多少位
  // max 文本长度最多多少位
  // message 错误的提示信息
  // trigger 触发表单校验的时机，change 文本发生变化的时候  blur 失去焦点的时候触发
  username: [
    /* {
      min: 5, max: 10, message: '账号长度至少为5位', trigger: 'change'
    } */
    { trigger: 'change', validator: validatorUserName }
  ],
  password: [
    /* {
      required: true, min: 6, max: 15, message: '密码的长度只能在6-15位之间',
      trigger: 'change'
    } */
    {
      trigger:'change',validator: validatorPassword
    }
  ]
}

</script>

<style scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/background.jpg") no-repeat;
  background-size: cover;
}

.login_container .login_form {
  position: relative;
  width: 80%;
  top: 30vh;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;
  padding: 40px;
}

.login_container .login_form .login_btn {
  width: 100%;
}

.login_container .login_form h1 {
  font-size: 40px;
  color: white;
}

.login_container .login_form h2 {
  color: #fff;
  font-size: 20px;
  margin: 20px 0;
}
</style>