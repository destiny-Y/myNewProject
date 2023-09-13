// 路由权限校验  项目中的路由在什么条件下才可以访问
import router from '@/router/index';
// 引入进度条插件
import nprogress from 'nprogress';
// 引入进度条的样式
import 'nprogress/nprogress.css';
nprogress.configure({ showSpinner: false });
// 引入仓库
import useUserStore from '@/store/modules/user';
import pinia from './store';
let userStore = useUserStore(pinia);

// 全局守卫:项目当中任意路由切换都触发的钩子
// 全局前置守卫
router.beforeEach(async (to: any, from: any, next: any) => {
  // 修改左上角的标题
  document.title = "硅谷甄选-" + to.meta.title;
  // to: 将要访问的路由
  // from: 从哪个路由跳转而来
  // next: 路由的放行函数
  nprogress.start();
  // 获取token，判断用户是否登录
  let token = userStore.token;
  // 获取用户名称，判断是否有用户信息
  let username = userStore.username;
  if (token) {
    if (to.path == "/login") {
      next({ path: '/' });
    } else {
      if (username) {
        next();
      } else {
        try {
          await userStore.getuserInfo();
          next();
        } catch (error) {
          // token过期,获取不到用户信息/用户手动修改了token
          // 先退出登录，清空原有的数据
          await userStore.logout();
          // 回到登录页，再次登录
          next({ path: "/login", query: { redirect: to.path } });
        }
      }
    }
  } else {  // 用户未登录
    if (to.path == '/login') {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.path } });
    }
  }
  next();
});

// 全局后置守卫
router.afterEach((to: any, from: any) => {
  nprogress.done();
});


// 进度条业务
// 路由鉴权(路由组件访问权限的设计)
/**
 * 全部路由组件
 * 登录|404|任意路由|首页|数据大屏一级路由|权限管理|商品管理
 *  用户未登录，只能访问login，其余六个路由不能访问(重定向到login)
 *  用户登录成功之后，不能再访问login，再次访问login时重定向到首页，其余的路由组件可以访问
 *  使用token作为用户是否登录的标志
 */