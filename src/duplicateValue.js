/* eslint-disable prettier/prettier */
const arr = [1, 1, 1, 1, 3, 4, 5, 5, 6, 4, 2, 2, 9];
const replaceDuplicate = arr => {
  //   let arrLen = arr.length;
  //   console.log(arrLen);
  //   for (let i = 0; i < arrLen; i++) {
  //     if (arr[i]) console.log(arr[i]);
  //   }

  return arr.filter((items, index) => arr.indexOf(items) === index);
};

console.log(replaceDuplicate(arr));
