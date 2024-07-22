/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    result += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      result += ' | ';
    }
  }

  return result;
}
