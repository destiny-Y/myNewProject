// 创建用户相关的小仓库
import { defineStore } from 'pinia';
// 引入接口
import { reqLogin, reqUserInfo, reqUserLogout } from '@/api/user';

// 引入数据类型
import type { loginFormData, loginResponseData, userInfoResponseData } from '@/api/user/type';
import { GET_TOKEN, SET_TOKEN, CLEAR_TOKEN } from '@/utils/token';
// 引入路由(常量)
import { constantRoute } from "@/router/routes";

let useUserStore = defineStore("User", {
  state: () => {
    return {
      // token: localStorage.getItem("TOKEN"),  // 用户的唯一标识token
      token: GET_TOKEN(),  // 用户的唯一标识token
      menuRoutes: constantRoute,  // 仓库存储生成菜单需要的路由数组
      username: '',  // 用户名称
      avatar: "",  // 用户头像
    }
  },
  actions: {
    // 用户登录的方法
    async userLogin(data: loginFormData) {
      // console.log(data);
      let result: loginResponseData = await reqLogin(data);
      // console.log(result);
      if (result.code == 200) {
        this.token = (result.data as string);  // 非持久化
        // 持久化存储token
        // localStorage.setItem("TOKEN", (result.data.token as string));
        SET_TOKEN((result.data as string));
        return 'ok';  // 保证当前async函数返回一个成功的promise
      } else {
        return Promise.reject(new Error(result.data));
      }

    },
    // 获取用户信息的方法
    async getuserInfo() {
      // 获取用户信息进行存储
      let userinfo: userInfoResponseData = await reqUserInfo();
      // console.log(userinfo);
      if (userinfo.code == 200) {  // 获取用户信息成功
        this.username = userinfo.data.name;
        this.avatar = userinfo.data.avatar;
        return "ok";
      } else {
        return Promise.reject(new Error(userinfo.message));
      }
    },
    // 退出登录
    async logout() {
      // 没有退出登录的接口
      let result: any = await reqUserLogout();
      // console.log(result);
      // 退出登录成功
      if (result.code == 200) {
        this.token = '';
        this.username = '';
        this.avatar = '';
        CLEAR_TOKEN();
        return "ok";
      } else {
        return Promise.reject(result.message);
      }
    }
  },
  getters: {

  }
});

export default useUserStore;