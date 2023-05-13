import { useCallback, useMemo } from 'react';
import * as Styled from './styled';
import { generateShouldShowPages } from './utils';
interface Props {
  page: number;
  totalDataCount: number;
  onChangePage: (page: number) => void;
  countPerPage?: number;
}

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
  const visiblePages = useCallback(
    () =>
      generateShouldShowPages({
        currentPage,
        totalPage,
      }),
    [currentPage, totalPage],
  );

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
