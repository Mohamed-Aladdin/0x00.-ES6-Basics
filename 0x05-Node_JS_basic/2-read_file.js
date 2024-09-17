const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').trim();
    const lines = data.toString().split('\n');
    lines.shift();
    const studentsByField = {};

    lines.forEach((line) => {
      const [firstName, lastName, age, field] = line.split(',');

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });
    console.log(`Number of students: ${lines.length}`);

    for (const field in studentsByField) {
      console.log(
        `Number of students in ${field}: ${
          studentsByField[field].length
        }. List: ${studentsByField[field].join(', ')}`
      );
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
