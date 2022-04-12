import { requestPayment, showToast } from '@tarojs/taro';
import { useCallback } from 'react';
import { payOrder } from 'src/service';

export const usePay = () => {
  const pay = useCallback(async (openid: string, orderNo: string, onFail, onPaySuccess) => {
    let res: any = await payOrder({ orderNo, openid });
    if (!res) return showToast({ title: '调起微信支付失败', icon: 'none' });
    await requestPayment({
      timeStamp: res.timeStamp,
      nonceStr: res?.nonceStr,
      package: `prepay_id=${res?.prepayId}`,
      paySign: res?.paySign,
      signType: 'RSA' as any,
      success: () => {
        onPaySuccess();
      },
      fail: () => {
        onFail();
      },
    });
  }, []);
  return { pay };
};
