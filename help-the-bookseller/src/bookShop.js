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
    console.log(initialOfBook)
    bookWithCode[initialOfBook] = code
    bookWithCodeList.push(bookWithCode)
  };

  console.log(bookWithCodeList)

  // if (sumOfCodeList.length < 2) {
  //   let keyBook = Object.keys(bookObject)
  //   let codeBook = bookObject[listOfCat]
  //   return (`(${keyBook} : ${codeBook})`)
  // } else {
  const sumOfCodeList = listOfCat.reduce(function (acc, curr) {
    acc[curr] = 0;
    return acc;
  }, {});
  console.log(sumOfCodeList)



  // console.log(sumOfCodeList)
};
// return (result.slice(0, -3))









module.exports = bookShop;