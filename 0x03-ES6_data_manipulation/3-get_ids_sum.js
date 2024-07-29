export default function getStudentIdsSum(arr) {
  return arr.reduce((accumulat, currVal) => accumulat + currVal.id, 0);
}
