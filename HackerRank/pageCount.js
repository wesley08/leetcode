function pageCount(currentPage, gotoPage) {
  if (currentPage % 2 !== 0 && currentPage - 1 === gotoPage) {
    return 0;
  }
  if (currentPage % 2 === 0 && currentPage - 1 === gotoPage) {
    return 1;
  }

  return (currentPage - gotoPage) / 2;
}

console.log(pageCount(5, 4));
console.log(pageCount(6, 2));
console.log(pageCount(5, 3));
console.log(pageCount(6, 5));

// 8,9 -> 6,7 -> 4,5 -> 2,3 -> 0,1
