import './app.less';

import Taro, { addInterceptor, interceptors } from '@tarojs/taro';
import { Provider } from 'react-redux';

import { responseInterceptor } from './interceptors/response';
import configStore from './model';

const store = configStore();

addInterceptor(interceptors.timeoutInterceptor);
addInterceptor(responseInterceptor);

//判断目前微信版本是否支持自动更新
if (process.env.TARO_ENV === 'weapp') {
  if (Taro.canIUse('getUpdateManager')) {
    const update = Taro.getUpdateManager();
    update.onCheckForUpdate((res) => {
      //检测是否有新版本
      if (res.hasUpdate) {
        update.onUpdateReady(() => {
          // update.applyUpdate();
          //如果有新版本，给用户提示确认更新即可
          Taro.showModal({
            title: '更新提示',
            content: '新版本已经准备好，是否重启应用？',
            success: function (res1) {
              if (res1.confirm) {
                // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启，如果想静默更新，直接在检测有新版本的时候调用此方法即可
                update.applyUpdate();
              }
            },
          });
        });
        //如果自动更新失败，给用户提示手动更新（有些小程序涉及到多ID使用，不更新会出现莫名的缓存bug，大部分小程序不用执行这一步）
        update.onUpdateFailed(() => {
          Taro.showModal({
            title: '已经有新版本了',
            content: '新版本已经上线，请您删除当前小程序，重新打开。',
          });
        });
      }
    });
  } else {
    Taro.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。',
    });
  }
}
export const App = (props: any) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default App;
