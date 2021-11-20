function findAccountById(accounts, id) {
  //find the id in the object that matches the given id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
    const lastNameA = accountA.name.last;
    const lastNameB = accountB.name.last;
    return lastNameA > lastNameB ? 1 : -1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  const { id } = account;
  //look to see how many times a person has borrowed any book
  //we want to reduce the books object just to look at the borrowed array
  return books.reduce((ammountOfBooksBorrowedByUser, book) => {
    const { borrows } = book;
    for (let borrow of borrows) {
      if (borrow.id === id) {
        ammountOfBooksBorrowedByUser++;
      }
    }
    return ammountOfBooksBorrowedByUser;
  }, 0);
}

function getBooksPossessedByAccount(account, books, authors) {
  const { id } = account;
  const booksPossesed = books.filter((book) => {
    for (let borrow of book.borrows) {
      return borrow.id === id && !borrow.returned;
    }
  });
  return booksPossesed.map((book) => {
    const { authorId } = book;
    const foundAuthor = authors.find((author) => authorId === author.id);
    return { ...book, author: { ...foundAuthor } };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
