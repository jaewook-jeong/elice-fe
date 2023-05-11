export const makeQueryArray = <T extends string>(queryValue: T | T[] | undefined): T[] => {
  if (!queryValue) {
    return [];
  }
  return Array.isArray(queryValue) ? queryValue : [queryValue];
};
