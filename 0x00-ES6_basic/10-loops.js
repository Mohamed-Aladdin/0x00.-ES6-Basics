export default function appendToEachArrayValue(array, appendString) {
  let arr = [];

  for (let element of array) {
    arr.push(element + appendString);
  }

  return arr;
}
