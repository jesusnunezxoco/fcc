const arr1 = [1, 4, 2, 8, 345, 123, 2, 55, 1, 234, 92];
const arr2 = [8, 4, 6];
const arr3 = [9];
const arr4 = [8, 4];

function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function bubbleSort(array) {
  // Only change code below this line
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j] < array[j - 1]) {
        swap(array, j, j - 1);
      }
    }
  }

  return array;
  // Only change code above this line
}

console.log(bubbleSort(arr1));