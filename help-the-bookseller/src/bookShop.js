function bookShop(listOfArt, listOfCat) {
  let sortedBookList = listOfArt.sort();
  let bookWithCodeList = [];
  // let sumOfCodeList = {};
  let result = "";


  for (let i = 0; i < sortedBookList.length; i++) {
    let bookWithCode = {};
    let books = sortedBookList[i].split(' ');
    let book = books[0];
    let code = books[1];
    let initialOfBook = book[0]
    bookWithCode[initialOfBook] = code
    bookWithCodeList.push(bookWithCode)
  };

  console.log(bookWithCodeList)

  // bookWithCodeList.forEach(function (book) {
  //   let code = parseInt(book.code)
  //   let initial = book.initial
  //   if (sumOfCodeList.hasOwnProperty(initial)) {
  //     sumOfCodeList[initial] = sumOfCodeList[initial] + code;
  //   } else {
  //     sumOfCodeList[initial] = code;
  //   }
  // });

  // if (sumOfCodeList.length < 2) {
  //   let keyBook = Object.keys(bookObject)
  //   let codeBook = bookObject[listOfCat]
  //   return (`(${keyBook} : ${codeBook})`)
  // } else {
  const sumOfCodeList = bookWithCodeList.reduce((result, item) => {
    listOfCat.forEach(key => {
      // console.log(key)
      if (!result[key]) {
        result[key] = 0;
      }
      // console.log(item[key])
      let value = parseInt(item[key], 10);
      result[key] += value;
    });

    return result;
  }, {});
    console.log(sumOfCodeList)
};
// return (result.slice(0, -3))









module.exports = bookShop;