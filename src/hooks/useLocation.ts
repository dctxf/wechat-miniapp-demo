import { General, getLocation, getSetting, openSetting, showModal, showToast } from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';

export const useLocation = (options?: getLocation.Option) => {
  const [location, setLocation] = useState<getLocation.SuccessCallbackResult>();
  const [error, setError] = useState<General.CallbackResult>();

  const getLocationByMp = useCallback(() => {
    getLocation({
      ...options,
      success(res) {
        setLocation(res);
      },
      fail(err) {
        setError(err);
      },
    });
  }, [options]);

  // 重新定位
  const openLocationMap = useCallback(() => {
    // 是否授权
    getSetting({
      success: (res) => {
        if (res?.authSetting['scope.userLocation'] != undefined && !res.authSetting['scope.userLocation']) {
          showModal({
            title: '是否授权当前位置',
            content: '需要获取您的地理位置，请确认授权，否则附近商户无法显示',
            success: (i) => {
              if (i.confirm) {
                openSetting({
                  success: (open) => {
                    if (open.authSetting['scope.userLocation'] == true) {
                      showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 5000,
                      });
                      getLocationByMp();
                    } else {
                      showToast({
                        title: '授权失败',
                        icon: 'success',
                        duration: 5000,
                      });
                    }
                  },
                });
              }
            },
          });
        }
      },
    });
  }, [getLocationByMp]);

  useEffect(() => {
    getLocationByMp();
    openLocationMap();
  }, [getLocationByMp, openLocationMap]);

  return { location, error };
};
