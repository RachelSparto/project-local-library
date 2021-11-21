function getTotalBooksCount(books) {
  //give the length of the boosk array to get total number of books
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //use length to get the total number of account sin the system
  return accounts.length;
}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
