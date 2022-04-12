import Taro, { getMenuButtonBoundingClientRect, getSystemInfo } from '@tarojs/taro';
import { useEffect, useState } from 'react';

export const useSystemInfo = () => {
  const [statusHeight, setStatusHeight] = useState(0);
  const [systemInfo, setSystemInfo] = useState<Taro.getSystemInfo.Result>();

  // 获取系统信息
  useEffect(() => {
    getSystemInfo().then((res) => {
      setSystemInfo(res);
    });
  }, []);

  useEffect(() => {
    if (systemInfo) {
      //  获取顶部状态栏信息
      const statusInfo = getMenuButtonBoundingClientRect();
      // 获取系统信息同步接口
      setStatusHeight(statusInfo.top + statusInfo.bottom - (systemInfo.statusBarHeight || 0) * 2);
    }
  }, [systemInfo]);

  return { systemInfo, statusHeight };
};
