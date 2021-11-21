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

function getMostCommonGenres(books) {
  //create an object that has all genres
  let genres = {};
  for (let book of books) {
    if (!genres[book.genre]) {
      genres[book.genre] = 1;
    } else {
      genres[book.genre] = genres[book.genre] + 1;
    }
  }
  //convert object into an array sort from most popular to least and slice to five
  const genresArray = Object.entries(genres)
    .sort((genreA, genreB) => genreB[1] - genreA[1])
    .slice(0, 5);
  //map the array to set up into proper formating
  return genresArray.map((genre) => {
    return { name: genre[0], count: genre[1] };
  });
}

function getMostPopularBooks(books) {
  const popularBooks = books.map((book) => {
    const { title: name, borrows } = book;
    return { name, count: borrows.length };
  });
  return sortByCountAndLimitFiveEntries(popularBooks);
}

function getMostPopularAuthors(books, authors) {}

function sortByCountAndLimitFiveEntries(array) {
  return array.sort((a, b) => b.count - a.count).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
