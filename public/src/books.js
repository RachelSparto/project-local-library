function findAuthorById(authors, id) {
  //loop through the authors array and find if teh ids match and return that author
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  //look through the books array and find the matching ids and return that book object
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  //loop through the books array and filter if the book is borrowed
  const isBorrowed = books.filter((book) => !book.borrows[0].returned);
  //loop throug the books array and filtter if the book has been returned
  const isReturned = books.filter((book) => book.borrows[0].returned);
  //put the two arrays created above together into one array
  return [isBorrowed, isReturned];
}

function getBorrowersForBook(book, accounts) {
  const { borrows } = book;
  return borrows
    .map((borrow) => {
      const { returned, id } = borrow;
      //loop through the accounts array and find if account id matches an id in the borrows.id
      const foundAccount = accounts.find((account) => account.id === id);
      return { ...foundAccount, returned };
    })
    .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
