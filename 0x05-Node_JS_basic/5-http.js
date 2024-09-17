const http = require('http');

const HOST = '127.0.0.1';
const PORT = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift(); // Remove the header
      const studentsByField = {};

      lines.forEach((line) => {
        if (line) {
          const [firstname, , , field] = line.split(',');
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(firstname);
        }
      });

      const totalStudents = lines.length;
      let output = `Number of students: ${totalStudents}\n`;

      for (const field in studentsByField) {
        if (Object.prototype.hasOwnProperty.call(studentsByField, field)) {
          output += `Number of students in ${field}: ${
            studentsByField[field].length
          }. List: ${studentsByField[field].join(', ')}\n`;
        }
      }

      resolve(output.trim());
    });
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
