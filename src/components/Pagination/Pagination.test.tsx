import { render, fireEvent } from '@testing-library/react';
import Pagination from './index';

describe('Pagination Component', () => {
  it('페이지네이션에서 숫자가 클릭되면 해당 페이지 number가 onChange에서 호출된다.', () => {
    const handleChangePage = jest.fn();
    const { getByText } = render(
      <Pagination page={1} totalDataCount={30} countPerPage={10} onChangePage={handleChangePage} />,
    );

    fireEvent.click(getByText('2'));

    expect(handleChangePage).toHaveBeenCalledWith(2);
  });

  it('페이지네이션에서 prev arrow 버튼이 클릭되면 현재 page의 이전값이 onChange에서 호출된다.', () => {
    const handleChangePage = jest.fn();
    const { getByText } = render(
      <Pagination page={2} totalDataCount={50} countPerPage={10} onChangePage={handleChangePage} />,
    );

    fireEvent.click(getByText('<'));

    expect(handleChangePage).toHaveBeenCalledWith(1);
  });

  it('페이지네이션에서 next arrow 버튼이 클릭되면 현재 page의 이전값이 onChange에서 호출된다.', () => {
    const handleChangePage = jest.fn();
    const { getByText } = render(
      <Pagination page={2} totalDataCount={50} countPerPage={10} onChangePage={handleChangePage} />,
    );

    fireEvent.click(getByText('>'));

    expect(handleChangePage).toHaveBeenCalledWith(3);
  });

  it('페이지네이션에서 현재 페이지가 1일때 prev arrow 버튼은 클릭되지 않는다.', () => {
    const handleChangePage = jest.fn();
    const { getByText } = render(
      <Pagination page={1} totalDataCount={10} countPerPage={10} onChangePage={handleChangePage} />,
    );
    fireEvent.click(getByText('<'));
    expect(handleChangePage).not.toBeCalled();
  });

  it('페이지네이션에서 현재 페이지가 마지작일때 next arrow 버튼은 클릭되지 않는다.', () => {
    const handleChangePage = jest.fn();
    const { getByText } = render(
      <Pagination page={2} totalDataCount={20} countPerPage={10} onChangePage={handleChangePage} />,
    );
    fireEvent.click(getByText('>'));
    expect(handleChangePage).not.toBeCalled();
  });
});
