import { makeQueryArray } from './query';

describe('makeQueryArray', () => {
  it('falsy한 값에 대해서 빈 배열을 리턴한다.', () => {
    expect(makeQueryArray(undefined)).toEqual([]);
    expect(makeQueryArray('')).toEqual([]);
  });

  it('문자열, 문자에 대해 모두 string배열 타입으로 리턴한다.', () => {
    expect(makeQueryArray('foo')).toEqual(['foo']);
    expect(makeQueryArray(['foo', 'bar'])).toEqual(['foo', 'bar']);
  });
});
