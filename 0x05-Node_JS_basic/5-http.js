const http = require('http');
const fs = require('fs').promises;

const HOST = '127.0.0.1';
const PORT = 1245;

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
            }. List: ${studentsByField[field].join(', ')}`
          );
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2].toString())
      .then((output) => {
        res.end(output);
      })
      .catch(() => {
        res.statusCode = 404;
        res.end('Cannot load the database');
      });
  }
});

app.listen(PORT, HOST, () => {});

module.exports = app;
