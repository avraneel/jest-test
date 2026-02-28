export function analyzeArray(array) {
  let ob = {};
  ob.length = array.length;
  ob.average = array.reduce((acc, cur) => acc + cur) / ob.length;
  ob.min = calcMin(array);
  ob.max = calcMax(array);
  return ob;
}

function calcMin(array) {
  let min = array[0];
  let minind = 0;
  for (const el of array) {
    if (el < min) {
      min = el;
      minind = array.indexOf(el);
    }
  }
  return min;
}

function calcMax(array) {
  let max = array[0];
  for (const el of array) {
    if (el > max) {
      max = el;
    }
  }
  return max;
}

analyzeArray([1, 8, 3, 4, 2, 6]);
