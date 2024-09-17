const express = require('express');
import { countStudents } from './3-read_file_async';

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString())
    .then((op) => {
      res.write('This is the list of our students\n');
      const output = op.slice(0, -1);
      res.send(output);
    })
    .catch(() => {
      res.send('This is the list of our students\nCannot load the database');
    });
});

app.listen(PORT, () => {});

module.exports = app;
