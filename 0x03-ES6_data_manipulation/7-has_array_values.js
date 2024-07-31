/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, array) {
  let result = true;

  array.map((item) => {
    if (!set.has(item)) {
      result = false;
    }
  });
  return result;
}
