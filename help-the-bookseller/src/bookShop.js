function bookShop(listOfArt, listOfCat) {
  let sortedBookList = listOfArt.sort();
  let bookWithCodeList = [];

  for (let i = 0; i < sortedBookList.length; i++) {
    let books = sortedBookList[i].split(' ');
    let book = books[0];
    let code = books[1];
    let initialOfBook = book[0]
    bookWithCodeList.push({ initial: initialOfBook, code: code });
  };

  // console.log(bookWithCodeList);

  // const sumOfCode = bookWithCodeList.reduce((result, item) => {
  //   listOfCat.forEach(initial => {
  //     if (!result[initial]) {
  //       result[initial] = 0
  //     }
  //     console.log(initial)
  //     console.log(item)
  //   });
  //   console.log(result)
  // }, {});

  var holder = {};

  bookWithCodeList.forEach(function (d) {
    let code = parseInt(d.code)
    console.log(code)
    if (holder.hasOwnProperty(d.initial)) {


      holder[d.initial] = holder[d.initial] + code;
    } else {
      holder[d.initial] = code;
    }
  });
  console.log(holder)
  var obj2 = [];

  for (var prop in holder) {
    obj2.push({ name: prop, value: holder[prop] });
  }


  console.log(obj2)


  //   var result = bookList.reduce(function(map, obj) {
  //     map[obj.initOfBook] = obj.code;
  //     return map;
  // }, {});
  // console.log(result)
  // if (listOfArt.length < 2) {
  //   let keyBook = Object.keys(bookObject)
  //   let codeBook = bookObject[listOfCat]
  //   return (`(${keyBook} : ${codeBook})`)
  // } else {
  //   let result = ""
  //   for (let i = 0; i < listOfCat.length; i++) {
  //     if (bookObject[listOfCat[i]]) {
  //       result += `(${listOfCat[i]} : ${bookObject[listOfCat[i]]}) - `
  //     }
  //   };
  //   return (result.slice(0, -3))
  // };
};







module.exports = bookShop;