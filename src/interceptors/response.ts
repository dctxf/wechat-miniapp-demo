import { Chain } from '@tarojs/taro';

export const responseInterceptor = (chain: Chain) => {
  const requestParams = chain.requestParams;
  const { url } = requestParams;

  return chain
    .proceed({
      ...requestParams,
      url: `${process.env.API}${url}`,
    })
    .then((res: { statusCode: number; data: ResponseData<any> }) => {
      const { statusCode, data } = res;
      if (statusCode === 200) {
        return data;
      }
      return Promise.reject(new Error(`request error, url: ${url}`));
    });
};
