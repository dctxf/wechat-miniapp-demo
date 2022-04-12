import { getUserProfile, redirectTo } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUserProfile } from 'src/hooks/useUserProfile';
import { setWeChatUserInfo } from 'src/model/actions/userInfo';

import { setUserInfoByWechatUser } from '../model/actions/userInfo';

export const useCheckAuth = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { session, userInfo, bindParams, fetchUserProfile } = useUserProfile();
  const dispatch = useDispatch();

  const fetchUserInfo = useCallback(() => {
    getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success({ userInfo: weChatUser }) {
        dispatch(setWeChatUserInfo(weChatUser));
        dispatch(setUserInfoByWechatUser(weChatUser, bindParams));
        redirectTo({
          url: '/pages/user/mobile/index',
        });
      },
    });
  }, [dispatch, bindParams]);

  // 去授权
  const goAuth = useCallback(() => {
    // 如果获取信息失败 证明没有绑定 则先绑定用户
    fetchUserInfo();
  }, [fetchUserInfo]);

  // 检查状态并去授权
  const checkAndGoAuth = () => {
    if (!isAuth) {
      goAuth();
      return Promise.reject(new Error('暂为授权'));
    }
    return Promise.resolve();
  };

  // 初始化授权状态
  useEffect(() => {
    if (!userInfo?.mobile) {
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [userInfo?.mobile]);

  return { goAuth, isAuth, checkAndGoAuth, userInfo, bindParams, session, fetchUserProfile };
};
