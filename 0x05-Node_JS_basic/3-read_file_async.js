const fs = require('fs');

function countStudents(path) {
  return fs
    .readFile(path, 'utf-8')
    .then((data) => {
      const lines = data.trim().toString().split('\n');
      lines.shift();
      const studentsByField = {};

      lines.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }
        studentsByField[field].push(firstname);
      });
      console.log(`Number of students: ${lines.length}`);

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          console.log(
            `Number of students in ${field}: ${
              studentsByField[field].length
            }. List: ${studentsByField[field].join(', ')}`,
          );
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
