function createTitle(title) {
  return `The ${title}`

}

function buildMainCharacter(charName, charAge, charPro){
  return { 
    name: charName,
    age: charAge,
    pronouns: charPro
  }

}

function saveReview(reviewContent, variable){
  if(variable.includes(reviewContent) === false){
  return variable.push(reviewContent)
  }

}

function calculatePageCount(bookName){
  return bookName.length * 20

}


function writeBook(builtTitle, builtCharacter, genreName){
  var book = {
    title: builtTitle,
    mainCharacter: builtCharacter,
    pageCount: calculatePageCount(builtTitle),
    genre: genreName
  }
  return book
}

function editBook(bookObject){
  var newCount = bookObject.pageCount * 0.75;
  return bookObject.pageCount = newCount

}







module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}