export default function createIteratorObject(report) {
  const arr = [];

  for (let element of Object.values(report.allEmployees)) {
    arr.push(...element);
  }

  return arr;
}
