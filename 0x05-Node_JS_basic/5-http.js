const http = require('http');
const countStudents = require('./3-read_file_async');

const HOST = '127.0.0.1';
const PORT = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    await countStudents(process.argv[2].toString())
      .then((op) => {
        const output = op.slice(0, -1);
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
