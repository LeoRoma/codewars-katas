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
  if (listOfArt.length < 2) {
    let keyBook = Object.keys(bookObject)
    let codeBook = bookObject[listOfCat]
    return (`(${keyBook} : ${codeBook})`)
  } else {
    let result = ""
    for (let i = 0; i < listOfCat.length; i++) {
      if (bookObject[listOfCat[i]]) {
        result += `(${listOfCat[i]} : ${bookObject[listOfCat[i]]}) - `
      }
    }
    return (result.slice(0, -3))
  }
  // for (let i = 0; i < listOfCat.length; i++) {


  //     console.log(initialBook[listOfCat[i]])

  // }
};







module.exports = bookShop;