import { promises as fs } from 'fs';

export default function readDatabase(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().toString().split('\n');
      lines.shift();
      const studentsByField = {};

      lines.forEach((line) => {
        if (line.trim()) {
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
