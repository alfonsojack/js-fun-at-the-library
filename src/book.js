//Use string interpolation to add definite article 'the'
function createTitle(title) {
  return `The ${title}`

}

//add the arguments as values to keys (name, age, pronouns) within the object
function buildMainCharacter(charName, charAge, charPro){
  return { 
    name: charName,
    age: charAge,
    pronouns: charPro
  }

}

//use if statement to add review content to the variable if
//said variable doesn't already contain it
function saveReview(reviewContent, variable){
  if(variable.includes(reviewContent) === false){
  return variable.push(reviewContent)
  }

}

//use the length method to multiply the character count by 20
function calculatePageCount(bookName){
  return bookName.length * 20

}

//use the previously built calculatePageCount function to create an
//object with key value pairs that incorporate the arguments as values 
//and the previously built function in tandem with the first parameter
// as another value
function writeBook(builtTitle, builtCharacter, genreName){
  var book = {
    title: builtTitle,
    mainCharacter: builtCharacter,
    pageCount: calculatePageCount(builtTitle),
    genre: genreName
  }
  return book
}
//create a new variable that takes the value from a 
//previously built book object and multiplies it by .75
//redefine that value with that new variable
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