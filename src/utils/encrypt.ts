export const encryptMobile = (str?: string) => {
  if (!str) return '';
  return str.replace(/^(.{3})(.*)(.{4})$/, (_, $2, $3) => {
    return `${$2} **** ${$3}`;
  });
};
