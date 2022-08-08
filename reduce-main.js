

// Find the first longest word in list
const findTheLongestWord = (wordList) => {
    if (!Array.isArray(wordList) || wordList.length === 0) return null;
  
    return wordList.reduce((theLongestWord, currentWord) => {
      return theLongestWord.length > currentWord.length
        ? theLongestWord
        : currentWord;
    }, wordList[0]);
  };
  const wordList = ['love', 'you', 'me'];
  console.log(findTheLongestWord(wordList));


// const itemList = [
//   { id: 'key1', value: 'Superman' },
//   { id: 'key2', value: 'Wonder Woman' },
//   { id: 'key3', value: 'Spider man' },
// ];
// 
// is converted to 
// 
// const obj = {
//   key1: 'Superman',
//   key2: 'Wonder Woman',
//   key3: 'Spider man'
// };

// List to object
const arrayToObject = (itemList) => {
    return itemList.reduce((obj, item) => {
        obj[item.id] = item.value;
      return obj;
    }, {});
  };
  
  const itemList = [
    { id: 'key1', value: 'Superman' },
    { id: 'key2', value: 'Wonder Woman' },
    { id: 'key3', value: 'Spider man' },
  ];
  console.log(arrayToObject(itemList));


// Object to list
const objectConvert = {
    key1: 'keyVal1',
    key2: 'keyVal2',
    key3: 'keyVal3',
    key4: 'keyVal4'
};
// convert to
// [
//     { id: 'key1', value: 'keyVal1' },
//     { id: 'key2', value: 'keyVal2' },
//     { id: 'key3', value: 'keyVal3' },
//     { id: 'key4', value: 'keyVal4' }
//   ]

const objectToArray = (obj) => {
    return Object.keys(obj).reduce((arrayRes, current) => {
      arrayRes.push({id: current, value: obj[current]})
      return arrayRes;
    }, []);
}
console.log(objectToArray(objectConvert));