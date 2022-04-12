import { combineReducers } from 'redux';

import { session } from './session';
import { userInfo } from './userInfo';
import { weChatUserInfo } from './weChatUserInfo';

export default combineReducers({
  weChatUserInfo,
  userInfo,
  session,
});
