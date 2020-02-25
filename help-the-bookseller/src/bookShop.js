function bookShop(listOfArt, listOfCat) {
  let sortedBookList = listOfArt.sort()
  let initialOfBookList = []


  for (let i = 0; i < sortedBookList.length; i++) {
    let books = sortedBookList[i].split(' ');
    
    let book = books[0];
    
    let code = books[1];
    console.log(code)
    let initialOfBook = book[0]
  
    initialOfBookList.push(`${initialOfBook} ${code}`)
  };

  console.log(bookList);

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