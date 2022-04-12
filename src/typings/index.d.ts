declare type Counter = {
  num: number;
};
declare type Store = {
  weChatUserInfo: Taro.UserInfo;
  session: User.WeChatSession;
};
declare type PageParams = {
  size?: number | string;
  current?: number | string;
  [key: string]: any;
};
declare type PageData<T extends any> = {
  size: number;
  pages: number;
  current: number;
  total: number;
  records: T[];
};
declare type DecryptionData = {
  openId: string;
  iv: string;
  data: string;
};

declare type ResponseData<T extends any> = {
  code: 200 | 500;
  data: T;
  message: string;
  success: boolean;
  timestamp: number;
};
interface envVersion {
  /** 开发版 */
  develop;
  /** 体验版 */
  trial;
  /** 正式版 */
  release;
}

declare type ReduxAction<T = any> = {
  type: string;
  payload: T;
};

declare type StateType<T> = Partial<T>;

declare type TabSwitchItem = { label: string; value: string; num?: number };
