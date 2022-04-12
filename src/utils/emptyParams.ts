export const emptyParams = (obj: Record<string, any>) => {
  const keys = Object.keys(obj);
  if (keys.length > 0 && keys.join('') !== '$taroTimestamp') return false;
  return true;
};
