function findAccountById(accounts, id) {
  //find the id in the object that matches the given id
  return accounts.find((account) => account.id === id);
}

function sortAccountsByLastName(accounts) {}

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
