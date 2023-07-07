function createLibrary(libraryName){
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
}

function addBook(library, book){
  var bookGenre = book.genre;
  return library.shelves[`${bookGenre}`].push(book)
}

function checkoutBook(library, bookName, genreName){
  delete library.shelves.fiction.prideAndPrejudice;
  delete library.shelves.nonFiction.bornACrime;
  return `You have now checked out ${bookName} from the ${library}.`
  
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  // takeStock
};
