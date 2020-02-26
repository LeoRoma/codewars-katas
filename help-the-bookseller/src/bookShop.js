function bookShop(listOfArt, listOfCat) {
  let sortedBookList = listOfArt.sort();
  let bookWithCodeList = [];
  let sumOfCodeList = {};

  for (let i = 0; i < sortedBookList.length; i++) {
    let books = sortedBookList[i].split(' ');
    let book = books[0];
    let code = books[1];
    let initialOfBook = book[0]
    bookWithCodeList.push({ initial: initialOfBook, code: code });
  };

  bookWithCodeList.forEach(function (book) {
    let code = parseInt(book.code)
    let initial = book.initial
    if (sumOfCodeList.hasOwnProperty(initial)) {
      sumOfCodeList[initial] = sumOfCodeList[initial] + code;
    } else {
      sumOfCodeList[initial] = code;
    }
  });

  console.log(sumOfCodeList)

  if (sumOfCodeList.length < 2) {
    let keyBook = Object.keys(bookObject)
    let codeBook = bookObject[listOfCat]
    return (`(${keyBook} : ${codeBook})`)
  } else {
    let result = ""
    for (let i = 0; i < listOfCat.length; i++) {
      if (sumOfCodeList[listOfCat[i]]) {
        result += `(${listOfCat[i]} : ${sumOfCodeList[listOfCat[i]]}) - `
      }
    };
    return (result.slice(0, -3))
  };
};







module.exports = bookShop;