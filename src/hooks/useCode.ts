import { login } from '@tarojs/taro';
import {  useEffect, useState } from 'react';

export const useCode = () => {
  const [code, setCode] = useState<string>()

  useEffect(() => {
    login().then(res=>{
      setCode(res.code)
    })
  }, [])


  return { code };
};
