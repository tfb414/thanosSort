const sortAndTest = array => {
  const sortedArray = [...array].sort((a, b) => a - b);
  if (areNotIdentical(sortedArray, array)) {
    return sortAndTest(deleteHalf(array));
  }
  return array;
};

const deleteHalf = array => {
  const arrayWithRandomValuesAdded = addRandomValueToArray(array);
  const medianValue = findMedianValue(arrayWithRandomValuesAdded);

  return arrayWithRandomValuesAdded
    .filter(array => array[0] > medianValue)
    .map(array => array[1]);
};

const sort2DArrayByFirstValue = array => {
  return [...array].sort((a, b) => a[0] - b[0]);
};

const findMedianValue = array => {
  const halfSizeOfArray = Math.floor(array.length / 2);
  return sort2DArrayByFirstValue(array)[halfSizeOfArray - 1][0];
};

const addRandomValueToArray = array => {
  return array.map(element => {
    const randomeNumber = Math.random();
    return [randomeNumber, element];
  });
};

const areNotIdentical = (array1, array2) => {
  return array1.some((element, index) => {
    return element !== array2[index];
  });
};

const wallerIsADummy = () => {
  return true;
};

console.log(sortAndTest([1, 4, 2, 6, 30, 7, 8, 9, 15]));

module.exports = { sortAndTest, wallerIsADummy };
