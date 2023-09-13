// 用户相关的接口
import request from '@/utils/request';
// mock接口
/* import type { loginForm, loginResponseData, userResponseData } from './type';
// 统一接口管理
enum API {
  LOGIN_URL = "/user/login",
  USERINFO_URL = "/user/info"
}
// 暴露请求函数 
// 登录的接口方法
export const reqLogin = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data);
};

// 获取用户信息接口的方法 
export const reqUserInfo = () => {
  return request.get<any, userResponseData>(API.USERINFO_URL);
}; */
import type { loginFormData, loginResponseData,userInfoResponseData } from './type';

// 真实接口
// 用户相关的请求地址
enum API {
  // LOGIN_URL = "/admin/acl/index/login",
  LOGIN_URL = "http://114.115.179.162:8022/prod-api/admin/acl/index/login",
  // USERINFO_URL = "/admin/acl/index/info",
  USERINFO_URL = "http://114.115.179.162:8022/prod-api/admin/acl/index/info",
  // LOGOUT_URL = "/admin/acl/index/logout",
  LOGOUT_URL = "http://114.115.179.162:8022/prod-api/admin/acl/index/logout",
}

// 登录接口
export const reqLogin = (data: loginFormData) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data);
};

// 获取用户信息的接口
export const reqUserInfo = () => {
  return request.get<any, userInfoResponseData>(API.USERINFO_URL);
}

// 退出登录
export const reqUserLogout = () => {
  return request.post<any, any>(API.LOGOUT_URL);
}