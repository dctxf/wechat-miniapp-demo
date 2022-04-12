import { Reducer } from 'react';

import { SET_WE_CHAT_USER } from '../constants';

const INITIAL_STATE: Taro.UserInfo = {
  avatarUrl: '',
  city: '',
  country: '',
  gender: 1,
  language: 'zh_CN',
  nickName: '',
  province: '',
};

export const weChatUserInfo: Reducer<Taro.UserInfo, ReduxAction> = (state = INITIAL_STATE, { type, payload }) => {
  if (type === SET_WE_CHAT_USER) return { ...state, ...payload };
  return state;
};
