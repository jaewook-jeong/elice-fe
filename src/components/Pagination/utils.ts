export function generateArrayFillNumber(start: number, end: number): number[] {
  if (start > end) throw new Error('시작하는 숫자가 끝나는 숫자보다 큽니다.');
  return Array(end - start + 1)
    .fill(undefined)
    .reduce((arr, _, index) => {
      arr.push(start + index);
      return arr;
    }, []);
}

export function generateShouldShowPages({
  currentPage,
  totalPage,
  howManyShowPage = 9,
}: {
  currentPage: number;
  totalPage: number;
  howManyShowPage?: number;
}): number[] {
  if (howManyShowPage % 2 === 0) throw new Error('보여야하는 페이지의 수는 홀수여야합니다.');
  const centerCount = Math.ceil(howManyShowPage / 2);
  let pages;
  if (totalPage < howManyShowPage + 1) {
    pages = generateArrayFillNumber(currentPage, totalPage);
  } else {
    if (currentPage <= centerCount) {
      pages = generateArrayFillNumber(1, howManyShowPage);
    } else if (currentPage > totalPage - centerCount) {
      pages = generateArrayFillNumber(totalPage - (howManyShowPage - 1), totalPage);
    } else {
      pages = generateArrayFillNumber(
        currentPage - (centerCount - 1),
        currentPage + (centerCount - 1),
      );
    }
  }
  return pages;
}
