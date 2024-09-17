import { promises as fs } from 'fs';

export default function readDatabase(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().toString().split('\n');
      lines.shift();
      const studentsByField = {};
      let totalStudents = 0;

      lines.forEach((line) => {
        if (line.trim()) {
          totalStudents += 1;
          const [firstname, , , field] = line.split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      });

      return studentsByField;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
