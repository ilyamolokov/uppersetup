export const generatePages = (currentPage: number, totalPages: number) => {
  let pages: Array<number | 'nextPage' | 'prevPage'> = []
  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i)
    }
  } else {
    if (currentPage <= 3) {
      pages = [1, 2, 3, 'nextPage', totalPages]
    } else if (currentPage >= totalPages - 2) {
      pages = [1, 'prevPage', totalPages - 2, totalPages - 1, totalPages]
    } else {
      pages = [
        1,
        'prevPage',
        currentPage - 1,
        currentPage,
        currentPage + 1,
        'nextPage',
        totalPages,
      ]
    }
  }
  return pages
}
