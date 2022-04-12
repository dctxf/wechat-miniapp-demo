export const someIsEmpty = (data: Record<string, any>, fields: string[]) => {
  return (
    fields.map((i) => {
      if (!data[i]) return i;
    }).length > 0
  );
};
