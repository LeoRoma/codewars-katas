class BookShop {
  constructor(listOfArt, listOfCat) {
    this.listOfArt = listOfArt
    this.bookWithCodeList = [];
    this.sumOfCodeObject = {};
    this.resultObject = {};
    this.result = '';
  };

  convertBookWithCodeList(listOfArt) {
    listOfArt.forEach(book => {
      let bookWithCode = book.split(' ');
      let initial = bookWithCode[0][0];
      let code = bookWithCode[1];
      this.bookWithCodeList.push({ initial: initial, code: code })
      console.log(this.bookWithCodeList);
    });
  };
  // stockList() {
  //   let sortedBookList = listOfArt.sort();
  //   let bookWithCodeList = [];

  //   let sumOfCodeObject = {};
  //   let result = '';

  //   // let checkEmptyValue = Object.values(resultList)
  //   // var checkedAllZeroes = checkEmptyValue.every(checkAllZeroes)

  //   for (let i = 0; i < sortedBookList.length; i++) {
  //     let bookWithCode = {};
  //     let books = sortedBookList[i].split(' ');
  //     let book = books[0];
  //     let code = Number.parseInt(books[1]);
  //     let initialOfBook = book[0].toString()
  //     bookWithCodeList.push({ initial: initialOfBook, code: code })
  //   };

  //   bookWithCodeList.forEach(item => {
  //     let initial = item.initial;
  //     let code = item.code;
  //     if (sumOfCodeObject.hasOwnProperty(initial)) {
  //       (sumOfCodeObject[initial] = sumOfCodeObject[initial] + code)
  //     } else {
  //       sumOfCodeObject[initial] = code
  //     }
  //   });

  //   listOfCat.forEach(item => {
  //     this.resultObject[item] = 0
  //   });
  //   console.log(this.resultObject)
  // const resultList = listOfCat.reduce(function (acc, curr) {
  //   acc[curr] = 0;
  //   return acc;
  // }, {});

  // for (var initialCat in resultList) {
  //   for (var initialArt in sumOfCodeObject) {
  //     let codeArt = sumOfCodeObject[initialArt]
  //     if (initialCat === initialArt) {
  //       resultList[initialCat] = codeArt;
  //     } else {
  //       resultList[initialCat]
  //     }
  //   }
  // };

  // const checkAllZeroes = function (zero) {
  //   return zero === 0
  // }

  // if (checkedAllZeroes === true) {
  //   return result
  // } else {
  //   for (var resultInitial in resultList) {
  //     let resultCode = resultList[resultInitial];
  //     result += `(${resultInitial} : ${resultCode}) - `
  //   }
  //   return (result.slice(0, -3))
  // }

  // };
}




module.exports = BookShop;