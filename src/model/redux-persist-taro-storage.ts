import { getStorage, removeStorage, setStorage } from '@tarojs/taro';

export const storage = {
  getItem(key: string) {
    return getStorage({ key }).then((res) => {
      return res.data;
    });
  },
  setItem(key: string, data: any) {
    return setStorage({ key, data });
  },
  removeItem(key: string) {
    return removeStorage({ key });
  },
};
