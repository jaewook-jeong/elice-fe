import { generateArrayFillNumber, generateShouldShowPages } from './utils';

describe('generateArrayFillNumber function', () => {
  it('시작하는 숫자와 끝나는 숫자를 넣으면 그에 알맞는 배열을 리턴한다.', () => {
    expect(generateArrayFillNumber(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(generateArrayFillNumber(3, 8)).toEqual([3, 4, 5, 6, 7, 8]);
  });

  it('시작과 끝이 같다면 하나의 값만 나온다.', () => {
    expect(generateArrayFillNumber(5, 5)).toEqual([5]);
  });

  it('시작 숫자가 끝 숫자보다 크다면 에러가 발생한다.', () => {
    try {
      generateArrayFillNumber(5, 1);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});

describe('generateShouldShowPages function', () => {
  it('현재 페이지와 전체 페이지를 입력하면 기본값인 배열길이가 9인 페이지네이션에 보여야하는 페이지 배열이 나온다.', () => {
    expect(generateShouldShowPages({ currentPage: 1, totalPage: 10 })).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    expect(generateShouldShowPages({ currentPage: 8, totalPage: 10 })).toEqual([
      2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });

  it('howManyShowPage arg를 넣어주면 보여야하는 페이지네이션 개수를 조정할 수 있다.', () => {
    expect(generateShouldShowPages({ currentPage: 1, totalPage: 10, howManyShowPage: 5 })).toEqual([
      1, 2, 3, 4, 5,
    ]);
    expect(generateShouldShowPages({ currentPage: 5, totalPage: 10, howManyShowPage: 5 })).toEqual([
      3, 4, 5, 6, 7,
    ]);
  });

  it('보여야하는 페이지네이션의 개수가 짝수면 에러가 발생합니다.', () => {
    expect(() => {
      generateShouldShowPages({ currentPage: 1, totalPage: 7, howManyShowPage: 4 });
    }).toThrow('보여야하는 페이지의 수는 홀수여야합니다.');
  });
});
