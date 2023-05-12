import { useCallback, useMemo } from 'react';
import * as Styled from './styled';

interface Props {
  page: number;
  totalDataCount: number;
  onChangePage: (page: number) => void;
  countPerPage?: number;
}

const range = (start: number, end: number) => {
  const length = Math.abs(end - start) + 1;
  const { result } = Array.from({ length }).reduce(
    ({ result: temp, current }) => ({
      result: [...temp, current],
      current: current + 1,
    }),
    { current: start, result: [] },
  );

  return result;
};

const Pagination = ({
  page: currentPage,
  totalDataCount,
  countPerPage = 20,
  onChangePage,
}: Props) => {
  const totalPage = useMemo(
    () => Math.ceil(totalDataCount / countPerPage),
    [totalDataCount, countPerPage],
  );
  const visiblePages = useCallback(() => {
    let pages;
    if (totalPage < 10) {
      pages = range(currentPage, totalPage);
    } else {
      if (currentPage < 6) {
        pages = range(1, 9);
      } else if (currentPage > totalPage - 5) {
        pages = range(totalPage - 8, totalPage);
      } else {
        pages = range(currentPage - 4, currentPage + 4);
      }
    }

    return pages;
  }, [currentPage, totalPage]);

  return (
    <Styled.Wrapper>
      <Styled.Pagination>
        <Styled.Arrow $disabled={currentPage === 1} onClick={() => onChangePage(currentPage - 1)}>
          {'<'}
        </Styled.Arrow>
        {visiblePages().map((page) => (
          <Styled.Page
            $isSelected={page === currentPage}
            key={`page_${page}`}
            onClick={() => onChangePage(page)}
          >
            {page}
          </Styled.Page>
        ))}
        <Styled.Arrow
          $disabled={currentPage === totalPage}
          onClick={() => onChangePage(currentPage + 1)}
        >
          {'>'}
        </Styled.Arrow>
      </Styled.Pagination>
    </Styled.Wrapper>
  );
};

export default Pagination;
