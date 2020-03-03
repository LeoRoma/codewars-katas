function bookShop(listOfArt, listOfCat) {
  let sortedBookList = listOfArt.sort();
  let bookWithCodeList = [];

  let sumOfCodeObject = {};
  let resultObject = {};

  for (let i = 0; i < sortedBookList.length; i++) {
    let bookWithCode = {};
    let books = sortedBookList[i].split(' ');
    let book = books[0];
    let code = Number.parseInt(books[1]);
    let initialOfBook = book[0].toString()
    // console.log(initialOfBook)
    // bookWithCode[initialOfBook] = code
    // bookWithCodeList.push(bookWithCode)
    bookWithCodeList.push({ initial: initialOfBook, code: code })
  };
  // console.log(bookWithCodeList)

  bookWithCodeList.forEach(item => {
    let initial = item.initial;
    let code = item.code;
    if (sumOfCodeObject.hasOwnProperty(initial)) {
      (sumOfCodeObject[initial] = sumOfCodeObject[initial] + code)
    } else {
      sumOfCodeObject[initial] = code
    }
  });

  console.log(sumOfCodeObject)


  // if (sumOfCodeList.length < 2) {
  //   let keyBook = Object.keys(bookObject)
  //   let codeBook = bookObject[listOfCat]
  //   return (`(${keyBook} : ${codeBook})`)
  // } else {

  const resultList = listOfCat.reduce(function (acc, curr) {
    acc[curr] = 0;
    return acc;
  }, {});
  console.log(resultList)

  for (var initialCat in resultList) {
    let codeCat = resultList[initialCat];
    for (var initialArt in sumOfCodeObject) {
      let codeArt = sumOfCodeObject[initialArt]
      if (initialCat === initialArt) {
        resultList[initialCat] = codeArt; 
      }else{
        resultList[initialCat] 
      }
    }
    // console.log(initialCat, resultList[initialCat])
  }
  console.log(resultList)



  // console.log(sumOfCodeList)
};
// return (result.slice(0, -3))









module.exports = bookShop;