import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSession } from 'src/model/actions/session';
import { getOpenId } from 'src/service';

import { useCode } from './useCode';

// 获取openId
export const useOpenId = (manual: boolean = false) => {
  const [error, setError] = useState();
  const session = useSelector<Store, User.WeChatSession>((state) => state.session);
  const { code } = useCode();

  const dispatch = useDispatch();
  const getWeChatOpenId = useCallback(
    async (code) => {
      if (session?.openid) return Promise.resolve(session);
      try {
        // 如果openid存在 直接返回
        const result = await getOpenId(code);
        dispatch(setSession(result as User.WeChatSession));
        return result;
      } catch (e) {
        setError(e);
      }
    },
    [dispatch, session],
  );

  useEffect(() => {
    if (code) {
      getWeChatOpenId(code);
    }
  }, [getWeChatOpenId, manual, code]);

  return { session, error, getWeChatOpenId, isAuth: !!session.openid };
};
