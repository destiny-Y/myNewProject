import { createApp } from 'vue';
// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// element-plus国际化配置(中文)
// @ts-ignore(让ts忽略类型检测)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
// svg需要的配置代码
import 'virtual:svg-icons-register';
// // 引入封装的图标组件
import SvgIcon from '@/components/SvgIcon/index.vue';
// 引入自定义插件对象，注册整个项目的全局组件
import globalComponent from '@/components';
// 引入模板的全局样式
// import "@/styles/index.scss";
import '@/styles/index.css';
import "@/styles/reset.css";
// axios
// import axios from 'axios';
// 引入路由
import router from './router';
// 引入仓库
import pinia from './store';
// 引入路由鉴权文件
import './permission';
import App from '@/App.vue';

const app = createApp(App);
// 安装element-plus插件
app.use(ElementPlus,{  // 中文
  locale: zhCn,
});
// 仓库
app.use(pinia);
app.component('SvgIcon',SvgIcon);
app.use(globalComponent);
app.use(router);

// axios({
//   url:'/api/user/login',
//   method:"post",
//   data:{
//     username:"admin",
//     password:"111111"
//   }
// })

app.mount("#app");
