import mockRouter from 'next-router-mock';
import { act, render, screen } from '@testing-library/react';
import Filter from './index';

jest.mock('next/router', () => require('next-router-mock'));

describe('Filter Component', () => {
  beforeEach(async () => {
    await act(() => mockRouter.setCurrentUrl('/'));
  });
  it('최초 페이지 접근시에는 선택된 필터가 없다.', () => {
    const initOffset = jest.fn();
    render(<Filter initOffset={initOffset} />);
    const buttonList = screen.getAllByTestId('filter_button');
    buttonList.forEach((button) => expect(button).toHaveAttribute('aria-selected', 'false'));
  });

  it('필터가 선택되어있는 url이라면 핕터 버튼이 선택되어있다.', () => {
    const initOffset = jest.fn();
    mockRouter.setCurrentUrl(`?price=free`);
    render(<Filter initOffset={initOffset} />);
    const buttonList = screen.getAllByTestId('filter_button');
    buttonList
      .filter((button) => button.getAttribute('value') === 'free')
      .forEach((button) => expect(button).toHaveAttribute('aria-selected', 'true'));
  });
});
