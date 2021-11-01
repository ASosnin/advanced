export const orderByProps = (obj, order) => {
  const itemsIncludesOrder = [];
  const result = [];
  order.forEach((item) => {
    if (item in obj) itemsIncludesOrder.push({ key: item, value: obj[item] });
  });
  for (const item in obj) {
    if (!order.includes(item)) {
      result.push({ key: item, value: obj[item] });
    }
  }
  return [
    ...itemsIncludesOrder,
    ...result.sort((a, b) => {
      if (a.key > b.key) return 1;
      return -1;
    }),
  ];
};
