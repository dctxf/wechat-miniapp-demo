import { useRouter } from '@tarojs/taro';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { emptyParams } from 'src/utils/emptyParams';

import { setParams } from '../model/actions/bindParams';

export const useParams = () => {
  const { params: transferParams } = useRouter<User.TransferRouterParams>();
  const dispatch = useDispatch();
  const bindParams = useSelector<Store, User.ParamsState>((state) => state.bindParams);

  useEffect(() => {
    if (!emptyParams(transferParams)) {
      dispatch(setParams(transferParams));
    }
  }, [dispatch, transferParams]);

  return { bindParams };
};
