/* eslint-disable prettier/prettier */

import {useState} from 'react';

const firstArr = [1, 1, 1, 1, 3, 4, 5, 5, 6, 4, 2, 2, 9];
const replaceDuplicate = firstArr => {
  //   let arrLen = arr.length;
  //   console.log(arrLen);
  //   for (let i = 0; i < arrLen; i++) {
  //     if (arr[i]) console.log(arr[i]);
  //   }

  return firstArr.filter((items, index) => firstArr.indexOf(items) === index);
};

console.log(replaceDuplicate(firstArr));

const arr = [
  {place: 'here', name: 'x', other: 'other stuff1'},
  {place: 'there', name: 'x', other: 'other stuff2'},
  {place: 'here', name: 'y', other: 'other stuff4'},
  {place: 'here', name: 'z', other: 'other stuff5'},
];

function getUniqueListBy(arr, key) {
  return [...new Map(arr.map(item => [item[key], item])).values()];
}

// const arr1 = getUniqueListBy(arr, 'place');

// console.log('Unique by place');
// console.log(JSON.stringify(arr1));

// console.log('\nUnique by name');
// const arr2 = getUniqueListBy(arr, 'name');

console.log(JSON.stringify(getUniqueListBy(arr, 'name')));

const replaceDuplicateUser = () => {
  const [userData, setUserData] = useState([
    {id: 1, name: 'Imdadul Haque'},
    {id: 2, name: 'Enamul Haque'},
    {id: 3, name: 'Israt Jahan Maisha'},
    {id: 4, name: 'Shampa Khatun'},
    {id: 5, name: 'Israt Jahan'},
    {id: 6, name: 'Mr. Imdadul Haque'},
    {id: 7, name: 'Mr. Enamul Haque'},
    {id: 8, name: 'Maisha Khatun'},
    {id: 9, name: 'Imdadul Haque'},
    {id: 10, name: 'Israt Jahan Maisha'},
    {id: 11, name: 'Mr. Imdadul Haque'},
    {id: 12, name: 'Mr. Enamul Haque'},
    {id: 13, name: 'Maisha Khatun'},
    {id: 14, name: 'Imdadul Haque'},
  ]);
  const 
  return(

  )
};
