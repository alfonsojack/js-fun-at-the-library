function shelfBook(book, shelf){
  if (shelf.length < 3){
  shelf.unshift(book)
  }
};

function unshelfBook(bookTitle, shelf){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === `${bookTitle}`) {
      shelf.splice([shelf.indexOf(shelf[i])], 1);
    }
  }
}


function listTitles(shelf){
  shelfTitles = [];
  for (var i = 0; i < shelf.length; i++){
   shelfTitles.push(shelf[i].title);
  }
  return shelfTitles.join(`, `)
}

function searchShelf(shelf, bookTitle){
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === `${bookTitle}`) {
      var name1 = shelf[i].title
    }
  }
  if (name1 === bookTitle){
    return true 
    } else {
      return false
    }
  }
  


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};