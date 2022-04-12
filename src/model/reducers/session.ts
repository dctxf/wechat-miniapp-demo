import { Reducer } from 'react';
import { SET_SESSION } from '../constants';

const INITIAL_STATE: User.WeChatSession = {
  openid: '',
  session_key: '',
  unionid: '',
  errcode: 0,
  errmsg: '',
};

export const session: Reducer<User.WeChatSession, ReduxAction> = (state = INITIAL_STATE, { type, payload }) => {
  console.log('payload', payload);
  if (type === SET_SESSION) return JSON.parse(JSON.stringify(payload));
  return state;
};
