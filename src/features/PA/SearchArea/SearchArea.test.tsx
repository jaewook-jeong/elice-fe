import mockRouter from 'next-router-mock';
import { act, render, screen } from '@testing-library/react';
import SearchArea from './index';

jest.mock('next/router', () => require('next-router-mock'));

describe('SearchArea Component', () => {
  beforeEach(async () => {
    await act(() => mockRouter.setCurrentUrl('/'));
  });
  it('최초 페이지 접근시에는 input에 값이 없다.', () => {
    const { getByPlaceholderText } = render(<SearchArea />);
    const input = getByPlaceholderText('배우고 싶은 언어, 기술을 검색해보세요');
    expect(input.getAttribute('value')).toBe('');
  });

  it('특정 keyword가 입력된 페이지 접근시에 input에 keyword 값이 있다.', async () => {
    mockRouter.setCurrentUrl(`?keyword=C언어`);
    render(<SearchArea />);
    expect(
      screen.getByPlaceholderText('배우고 싶은 언어, 기술을 검색해보세요').getAttribute('value'),
    ).toBe('C언어');
  });
});
