import { RESET_USER, SET_USER, SET_WE_CHAT_USER } from '../constants';

export const setWeChatUserInfo = (payload: Taro.UserInfo) => {
  return {
    type: SET_WE_CHAT_USER,
    payload,
  };
};
export const setUserInfo = (payload: User.UserProfile) => {
  return {
    type: SET_USER,
    payload,
  };
};

export const setUserInfoByWechatUser = (weChatUser: Taro.UserInfo, params: User.ParamsState) => {
  return {
    type: SET_USER,
    payload: {
      cardType: 1,
      userName: weChatUser.nickName,
      nickname: weChatUser.nickName,
      avatar: weChatUser.avatarUrl,
      source: params?.source || 'bohai',
    },
  };
};

export const clearUserInfo = () => {
  return { type: RESET_USER };
};
