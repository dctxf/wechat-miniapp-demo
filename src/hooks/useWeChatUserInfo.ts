import { getUserProfile, useReady } from '@tarojs/taro';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setWeChatUserInfo } from '../model/actions/userInfo';

export const useWeChatUserInfo = () => {
  const weChatUserInfo = useSelector<Store, Taro.UserInfo>((state) => state.weChatUserInfo);
  const dispatch = useDispatch();
  const [error, setError] = useState<TaroGeneral.CallbackResult>();

  const fetchUserInfo = useCallback(() => {
    getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        setError(undefined);
        dispatch(setWeChatUserInfo(res.userInfo));
      },
      fail: (res) => {
        setError(res);
      },
    });
  }, [dispatch]);

  useReady(() => {
    if (!weChatUserInfo.nickName) {
      fetchUserInfo();
    }
  });

  return { error, weChatUserInfo, fetchUserInfo };
};
