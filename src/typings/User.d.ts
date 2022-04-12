declare namespace User {
  export type UserProfile = StateType<{
    cardNo: string;
    cardType: number;
    createTime: string;
    id: number;
    mobile: string;
    plateNo: string;
    status: number | null;
    userName: string;
    nickname: string;
    vinNo: string;
    avatar: string | undefined;
    source?: any;
    whiteFlag: number | string;
  }>;

  export type WeChatSession = StateType<{
    openid: string; // 用户唯一标识
    session_key: string; // 会话密钥
    unionid: string; // 用户在开放平台的唯一标识符，若当前小程序已绑定到微信开放平台帐号下会返回，详见 UnionID 机制说明。
    errcode: number; // 错误码
    errmsg: string; // 错误信息
  }>;

  export type ParamsState = {
    from: string;
    userName: string;
    nickname: string;
    mobile: string;
    cardType: string | number;
    cardNo: string;
    plateNo: string;
    vinNo: string;
    source?: string | null | undefined;
    avatar: string;
  };

  /** 对接参数 */
  export type TransferRouterParams = {
    userName: string;
    mobile: string;
    cardType: string;
    cardNo: string;
    plateNo: string;
    vinNo: string;
    source?: string | null | undefined;
    avatar: string;
  };

  export type BindParams = {
    /**
     * 渠道来源
     */
    source?: string | null | undefined;

    /**
     * mobile
     */
    mobile: string;

    /**
     * 短信验证码
     */
    code?: string;

    /**
     * openId 微信
     */
    openid: string;

    /**
     * unionid 微信
     */
    unionid?: string;

    /**
     * appid
     */
    appid?: string;

    /**
     * 微信头像
     */
    avatar?: string;

    /**
     * 微信昵称
     */
    nickname?: string;
  };
  export type UnBindParams = {
    openid: string;
    mobile: string;
  };

  export type MobileVerifyData = {
    mobile: string;
    msgCode: string;
  };

  /** 系统用户信息 */
  export type SystemInfo = {
    statusBarHeight: number;
  };
}
