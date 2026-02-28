export function analyzeArray(array) {
  let ob = {};
  ob.length = array.length;
  console.log(array.reduce((acc, cur) => acc + cur));
}
