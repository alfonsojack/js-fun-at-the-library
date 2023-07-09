
//Use an if statement to add a new element to
//each shelf while keeping it under a certain length
function shelfBook(book, shelf){
  if (shelf.length < 3){
  shelf.unshift(book)
  }
};

//Use a for loop to loop through each title on the shelf
//the indexOf method to establish its position
//and the splice method to remove said title from its position
function unshelfBook(bookTitle, shelf){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === `${bookTitle}`) {
      shelf.splice([shelf.indexOf(shelf[i])], 1);
    }
  }
}

//Use a for loop to loop through each title and add it
//to the shelfTitles array, then use the join method
//to return the array as a string
function listTitles(shelf){
  shelfTitles = [];
  for (var i = 0; i < shelf.length; i++){
   shelfTitles.push(shelf[i].title);
  }
  return shelfTitles.join(`, `)
}

//Use a for statement to loop through each value contained
//within each title key and match it with the string posed in the argument
//then define a new variable to store the values looped through
//Then create another if statement to match that new variable with the argument
// returning a boolean true if a match is found, false if not
function searchShelf(shelf, bookTitle){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === `${bookTitle}`) {
      var name1 = shelf[i].title
    }
  }
  if (name1 === bookTitle){
    return true; 
    } else {
      return false;
    }
  }
  


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};