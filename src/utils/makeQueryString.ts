export const makePriceQuery = (prices: string[]) =>
  prices.map((price) => ({
    enroll_type: 0,
    is_free: price === 'free' ? true : false,
  }));

export const makeFilterConditions = (
  title: string,
  parsedPrice: ReturnType<typeof makePriceQuery>,
) =>
  JSON.stringify({
    $and: [{ title: `%${title ? title : ''}%` }, { $or: parsedPrice }],
  });
