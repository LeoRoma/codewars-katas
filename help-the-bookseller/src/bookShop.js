function bookShop(listOfArt, listOfCat) {
  
  let books = listOfArt.join('').split(' ');
  let book = books[0];
  let code = books[1];
  let initialB = book[0]
  console.log(listOfCat[0])
  if (listOfCat[0] === initialB){
    return (`(${initialB} : ${code})`)
  }
};

module.exports = bookShop;