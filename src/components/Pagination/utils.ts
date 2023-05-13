function generateArrayFillNumber(start: number, end: number): number[] {
  return Array(end - start + 1)
    .fill(undefined)
    .reduce((arr, _, index) => {
      arr.push(start + index);
      return arr;
    }, []);
}

export function generateShouldShowingPage({
  currentPage,
  totalPage,
  howManyShowPage = 9,
}: {
  currentPage: number;
  totalPage: number;
  howManyShowPage?: number;
}): number[] {
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
