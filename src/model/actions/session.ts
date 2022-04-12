import { SET_SESSION } from '../constants';

export const setSession = (payload: User.WeChatSession) => {
  return {
    type: SET_SESSION,
    payload,
  };
};
