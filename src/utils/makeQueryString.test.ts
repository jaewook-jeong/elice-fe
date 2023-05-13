import { makeFilterConditions, makePriceQuery } from './makeQueryString';

describe('makePriceQuery function', () => {
  it('price 쿼리키에 해당하는 밸류값들이 들어올 때 free값이 들어올 경우 is_free가 true인 배열을 리턴한다.', () => {
    const prices = ['free', 'paid'];
    const expectedOutput = [
      { enroll_type: 0, is_free: true },
      { enroll_type: 0, is_free: false },
    ];
    expect(makePriceQuery(prices)).toEqual(expectedOutput);
  });

  it('빈 배열이 들어올 경우 빈 배열을 리턴한다.', () => {
    const prices: string[] = [];
    const expectedOutput: { enroll_type: number; is_free: boolean }[] = [];
    expect(makePriceQuery(prices)).toEqual(expectedOutput);
  });
});

describe('makeFilterConditions function', () => {
  it('유/무료 선택(타입은 다음과 같다. ReturnType<typeof makePriceQuery>)과 title을 넣어주면 그에 알맞는 문자열을 리턴한다.', () => {
    const title = 'C언어';
    const parsedPrice = [{ enroll_type: 0, is_free: true }];
    const expectedOutput =
      '{"$and":[{"title":"%C언어%"},{"$or":[{"enroll_type":0,"is_free":true}]}]}';
    expect(makeFilterConditions(title, parsedPrice)).toEqual(expectedOutput);
  });
});
