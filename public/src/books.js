function findAuthorById(authors, id) {
  //loop through the authors array and find if teh ids match and return that author
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
