import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(path)
      .then((students) => {
        res = ['This is the list of our students'];

        const compare = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(students).sort(compare)) {
          res.push(
            [
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' ')
          );
        }
        response.status(200).send(res.join('\n'));
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const major = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((students) => {
        let res = '';

        if (Object.keys(students).includes(major)) {
          const group = students[major];
          res = `List: ${group
            .map((student) => student.firstname)
            .join(', ')}`;
        }
        response.status(200).send(res);
      })
      .catch((error) => {
        response
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
