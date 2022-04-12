import { request } from '@tarojs/taro';

// 获取openid
export const getOpenId = (code: string) =>
  request<User.WeChatSession>({
    url: `/miniapp/user/login`,
    method: 'GET',
    data: { code, appid: 'wxc2ff224c00dcdd9e' },
  });
// 用户绑定
export const userBind = (data: User.BindParams) => request<any>({ url: `/bohaiMinapp/user/userBind`, method: 'POST', data });
export const userUnbind = (data: User.UnBindParams) => request<any>({ url: `/bohaiMinapp/user/userUnbind`, method: 'POST', data });
// 获取用户信息
export const queryUserInfo = (openid: string) => request<User.UserProfile>({ url: `/bohaiMinapp/user/getUserInfo`, method: 'GET', data: { openid } });
