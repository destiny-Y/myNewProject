// axios二次封装
import axios from 'axios';
// 引入用户相关的仓库
import useUserStore from '@/store/modules/user';
import { ElMessage } from 'element-plus'
let request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});
// 请求拦截器
request.interceptors.request.use((config) => {
  // config配置对象，headers属性请求头，通常用来给服务器携带公共参数
  // console.log(config);
  let userStore = useUserStore();
  if(userStore.token){
    config.headers.token = userStore.token;
  }
  return config;
});
// 响应拦截器
request.interceptors.response.use((response) => {
  // 成功的回调
  return response.data;
}, (error) => {
  // 失败的回调
  let message = '';
  let status = error.response.status;
  switch (status) {
    case 401:
      message = 'TOKEN过期';
      break;
    case 403:
      message = "没有访问的权限";
      break;
    case 404:
      message = "请求路径错误";
      break;
    case 500:
      message = "服务器错误！";
      break;
    default:
      message = "网路错误！";
      break;
  };
  ElMessage({
    type:"error",
    message
  });
  return Promise.reject(error);
});

export default request;