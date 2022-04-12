// 整数
export const filterMoneyByInt = (num: string | number) => {
  const reg = /\B(?=(\d{3})+(?!\d))/g;
  return `${num}`.replace(reg, ',');
};
export const filterMoney = (num: string | number) => {
  const str = `${num}`;
  // 如果不存在小数点
  if (!str.includes('.')) {
    return filterMoneyByInt(str);
  }
  const [int, float] = str.split('.');
  return `${filterMoneyByInt(int)}.${float}`;
};
