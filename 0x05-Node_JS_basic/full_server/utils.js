import { promises as fs } from 'fs';

export default function countStudents(path) {
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

      let output = `Number of students: ${totalStudents}\n`;

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          output += `Number of students in ${field}: ${
            studentsByField[field].length
          }. List: ${studentsByField[field].join(', ')}\n`;
        }
      }

      return output.trim();
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}
