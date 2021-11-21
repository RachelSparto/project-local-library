function getTotalBooksCount(books) {
  //give the length of the boosk array to get total number of books
  return books.length;
}

function getTotalAccountsCount(accounts) {
  //use length to get the total number of account sin the system
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  //loop through the books array and determine if returned is false if false add 1
  return books.filter((book) => !book.borrows[0].returned).length;
}

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
