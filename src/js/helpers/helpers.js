export const orderByProps = (obj, order) => {
  const itemsIncludesOrder = [];
  const result = [];

  for (const item in obj) {
    if (order.includes(item)) {
      itemsIncludesOrder.push({ key: item, value: obj[item] });
    } else {
      result.push({ key: item, value: obj[item] });
    }
  }
  return [
    ...itemsIncludesOrder.sort(
      (a, b) => order.findIndex((item) => item === a.key)
        - order.findIndex((item) => item === b.key),
    ),
    ...result.sort((a, b) => a.key > b.key),
  ];
};
