// 引入项目中全部的全局组件
import SvgIcon from './SvgIcon/index.vue';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const allGlobalComponents:any = { SvgIcon };

// 对外暴露一个插件对象
export default {
  install(app: any) {
    Object.keys(allGlobalComponents).forEach((key) => {
      // 注册为全局组件
      app.component(key, allGlobalComponents[key])
    });
    // 将element-Plus提供的图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}