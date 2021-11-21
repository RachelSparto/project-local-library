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
  // convert genres to an array
  const genresArray = Object.entries(genres);
  // map genresArray to meet formatting requirements.
  const commonGenres = genresArray.map((genre) => {
    const [name, count] = genre;
    return { name, count };
  });
  return sortByCountAndLimitFiveEntries(commonGenres);
}

function getMostPopularBooks(books) {
  //loop through the books array and map out book objects
  const popularBooks = books.map((book) => {
    const { title: name, borrows } = book;
    return { name, count: borrows.length };
  });
  //helper function used to sort and slice
  return sortByCountAndLimitFiveEntries(popularBooks);
}

function getMostPopularAuthors(books, authors) {
  //loop through th eauthors array and map out an author object
  const popularAuthors = authors.map((author) => {
    const {
      name: { first, last },
      id,
    } = author;
    const name = `${first} ${last}`;
    //filter the books array to find all books written by the saem author id
    const booksByAuthor = books.filter((book) => book.authorId === id);
    const count = booksByAuthor.reduce((booksBorrowed, book) => {
      return booksBorrowed + book.borrows.length;
    }, 0);
    return { name, count };
  });
  //helper function used to sort and slice
  return sortByCountAndLimitFiveEntries(popularAuthors);
}

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
