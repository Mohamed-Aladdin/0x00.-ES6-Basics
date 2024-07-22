export default function createIteratorObject(report) {
  const arr = [];

  for (const element of Object.values(report.allEmployees)) {
    arr.push(...element);
  }

  return arr;
}
