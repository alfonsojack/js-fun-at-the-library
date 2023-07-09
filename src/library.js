//this function will add key pair values to the object literal

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
//this will define a variable that allows me to use string interpolation 
//in combination with bracket notation and the push method to add the book parameter to a specific shelf in the library parameter


function addBook(library, book){
  var bookGenre = book.genre;
  return library.shelves[`${bookGenre}`].push(book)
}


//Here I use a for loop to check inside every object for the book title posed in the function's argument
//Then I use an if statement to splice the book and name a new variable if the title is found
//I use another if statement outside the for statement to make a statement if it is found and if it isn't

function checkoutBook(library, bookName, genreName){
  for (var i = 0; i < library.shelves[genreName].length; i++){
    if(library.shelves[genreName][i].title === `${bookName}`){
      var nameBook = library.shelves[genreName][i].title;
      library.shelves[genreName].splice([library.shelves[genreName].indexOf(library.shelves[genreName][i])], 1);
    }
  }
      if (nameBook === bookName){
        return `You have now checked out ${bookName} from the ${library.name}.`
      } else {
        return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`

    }
  }


//I define a variable using dot and bracket notation and the length method to return the statement
//with string interpolation
//I add an if statement for situations where an argument for the genre/shelf is undefined


  function takeStock(library, genreName){
    if (genreName === undefined) {
      var totalBookCount = library.shelves.nonFiction.length + library.shelves.fiction.length + library.shelves.fantasy.length;
      return `There are a total of ${totalBookCount} books at the ${library.name}.`
    } else{
    var shelfCount = library.shelves[genreName].length;
    return `There are a total of ${shelfCount} ${genreName} books at the ${library.name}.`
    }
  }






module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};
