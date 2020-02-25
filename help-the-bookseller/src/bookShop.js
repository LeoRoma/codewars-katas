function bookShop(listOfArt, listOfCat) {
  let bookObject = {}

  for (let i = 0; i < listOfArt.length; i++) {
    let books = listOfArt[i].split(' ');
    let book = books[0];
    let code = books[1];
    let initialBook = book[0]
    let key = initialBook
    bookObject[key] = code
  };
  // console.log(bookObject)

  if(listOfArt.length < 2){
    // console.log(bookObject[listOfCat])
    console.log(Object.keys(bookObject))
      // return(`(${initialB} : ${code})`)
  }
  // if (listOfArt.length < 2) {
  //   if (listOfCat[0] === initialB) {
  //     return (`(${initialB} : ${code})`)
  //   };
  // }
  // for (let i = 0; i < listOfCat.length; i++) {


  //     console.log(initialBook[listOfCat[i]])

  // }
};







module.exports = bookShop;