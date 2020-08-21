export function getQuickSortAnimations(array) {
  const auxArray = [...array];
  const animations = [];
  quickSort(auxArray, 0, auxArray.length - 1, animations);
  array = auxArray;

  return [array, animations];
}

function quickSort(array, l, r, animations) {
  if (l < r) {
    const mid = partition(array, l, r, animations);
    quickSort(array, l, mid - 1, animations);
    quickSort(array, mid + 1, r, animations);
  }
}

function partition(array, l, r, animations) {
  // let p = randomIntFromInterval(l, r);
  // animations.push(["select", p, l]);
  // animations.push(["swap", p, l, array[l], array[p]]);
  // animations.push(["deselect", p, l]);
  // swap(array, p, l);
  let p = l;
  const pivot = array[p];
  animations.push(["pivot", p]);
  for (let i = l + 1; i <= r; i++) {
    animations.push(["select", i]);
    if (array[i] < pivot) {
      p += 1;
      animations.push(["smaller", i]);
      if (p !== i) {
        animations.push(["swap1", p, i, array[p], array[i]]);
        swap(array, i, p);
      }
    } else animations.push(["deselect", i]);
  }

  animations.push(["swap2", p, l, array[p], array[l]]);
  swap(array, l, p);
  return p;
}

function swap(auxArray, firstIndex, secondIndex) {
  const temp = auxArray[firstIndex];
  auxArray[firstIndex] = auxArray[secondIndex];
  auxArray[secondIndex] = temp;
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
