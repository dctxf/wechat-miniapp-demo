import { Reducer } from 'react';

import { RESET_USER, SET_USER } from '../constants';

const INITIAL_STATE: User.UserProfile = {
  id: 0,
  userName: '',
  nickname: '',
  mobile: '',
  cardType: 1,
  cardNo: '',
  status: null,
  plateNo: '',
  vinNo: '',
  createTime: '',
};

export const userInfo: Reducer<User.UserProfile, ReduxAction> = (state = INITIAL_STATE, { type, payload }) => {
  if (type === SET_USER) return { ...state, ...payload };
  if (type === RESET_USER) return INITIAL_STATE;
  return state;
};
