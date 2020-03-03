function bookShop(listOfArt, listOfCat) {
  let sortedBookList = listOfArt.sort();
  let bookWithCodeList = [];

  let sumOfCodeObject = {};
  let result = '';

  for (let i = 0; i < sortedBookList.length; i++) {
    let bookWithCode = {};
    let books = sortedBookList[i].split(' ');
    let book = books[0];
    let code = Number.parseInt(books[1]);
    let initialOfBook = book[0].toString()
    bookWithCodeList.push({ initial: initialOfBook, code: code })
  };

  bookWithCodeList.forEach(item => {
    let initial = item.initial;
    let code = item.code;
    if (sumOfCodeObject.hasOwnProperty(initial)) {
      (sumOfCodeObject[initial] = sumOfCodeObject[initial] + code)
    } else {
      sumOfCodeObject[initial] = code
    }
  });

  const resultList = listOfCat.reduce(function (acc, curr) {
    acc[curr] = 0;
    return acc;
  }, {});

  for (var initialCat in resultList) {
    for (var initialArt in sumOfCodeObject) {
      let codeArt = sumOfCodeObject[initialArt]
      if (initialCat === initialArt) {
        resultList[initialCat] = codeArt;
      } else {
        resultList[initialCat]
      }
    }
  };

  const checkAllZeroes = function(zero){
    return zero === 0
  }
  let checkEmptyValue = Object.values(resultList) 
  console.log(checkEmptyValue.every(checkAllZeroes))
  
  // for (var resultInitial in resultList) {
  //   let resulCode = resultList[resultInitial];
  //   if (resultList.hasOwnProperty(resultInitial)) {
  //     if (resultList[resultInitial] === 0) {
  //       return result
  //     }
  //   } else{
  //     result += `(${resultInitial} : ${resulCode}) - `
  //   }
  // };
  // return (result.slice(0, -3));

 
};










module.exports = bookShop;