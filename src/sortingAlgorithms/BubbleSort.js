export function getBubbleSortAnimations(array) {
  const auxArray = [...array];
  const animations = [];
  bubbleSort(auxArray, animations);
  array = auxArray;

  return [array, animations];
}

function bubbleSort(auxArray, animations) {
  const n = auxArray.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push(["bar1", j, j + 1]);
      animations.push(["bar2", j, j + 1]);
      if (auxArray[j] > auxArray[j + 1]) {
        animations.push(["swap1", j, auxArray[j + 1], auxArray[j]]);
        animations.push(["swap2", j + 1, auxArray[j], auxArray[j + 1]]);
        swap(auxArray, j, j + 1);
      }
    }
  }
}

function swap(auxArray, firstIndex, secondIndex) {
  const temp = auxArray[firstIndex];
  auxArray[firstIndex] = auxArray[secondIndex];
  auxArray[secondIndex] = temp;
}
