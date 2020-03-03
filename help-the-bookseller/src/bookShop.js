class BookShop {
  constructor(listOfArt, listOfCat) {
    this.listOfArt = listOfArt
    this.bookWithQtyList = [];
    this.sumOfQtyObject = {};
    this.resultObject = {};
    this.result = '';
  };

  convertBookWithQtyList() {
    this.listOfArt.forEach(book => {
      let bookWithQty = book.split(' ');
      let initial = bookWithQty[0][0];
      let quantity = bookWithQty[1];
      this.bookWithQtyList.push({ initial: initial, quantity: quantity })
    });
  };

  addingQuantity(){
    // console.log(bookWithQtyList)
    this.bookWithQtyList.forEach(book => {
      console.log(book)
    })
  }  
  // stockList() {
  //   let sortedBookList = listOfArt.sort();
  //   let bookWithCodeList = [];

  //   let sumOfCodeObject = {};
  //   let result = '';

  //   // let checkEmptyValue = Object.values(resultList)
  //   // var checkedAllZeroes = checkEmptyValue.every(checkAllZeroes)

 
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