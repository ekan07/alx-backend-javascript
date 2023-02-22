/**
 * Create a more complex HTTP server using Node's HTTP module
 */

const fs = require('fs');
const http = require('http');
const url = require('url');

// Get file if arguement was passed
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Count students based on their fields
 * @param {str} path -Path to database file
 * structure of the object in the function
 * obj = {
 *  CS: {count: 6, firstname: []}
 *  SW: {count: 4, firstname: []}
 *};
 */
function countStudents(path) {
  const res = [];
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.slice(1, -1);
        const numberOfStudents = students.length;
        const obj = {};

        students.forEach((student) => {
          const data = student.split(',');
          const field = data[data.length - 1];

          // Store data of people with the same field in an obj
          // with each field as the key of the object
          if (!obj[field]) {
            obj[field] = {};
            obj[field].firstname = [];
            obj[field].count = 1;
          } else {
            obj[field].count += 1;
          }
          obj[field].firstname.push(data[0]);
        });

        res.push(`Number of students: ${numberOfStudents}`);

        for (const [field, value] of Object.entries(obj)) {
          const firstnames = value.firstname.join(', ');
          res.push(
            `Number of students in ${field}: ${value.count}. List: ${firstnames}`,
          );
        }
        resolve(res.join('\n'));
      }
    });
  });
}

// HTTP SERVER
const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (pathname === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (pathname === '/students') {
    const studentReport = [];
    studentReport.push('This is the list of our students');

    countStudents(DB_FILE)
      .then((data) => {
        studentReport.push(data);
        res.write(studentReport.join('\n'));
        res.end();
      })
      .catch((err) => {
        studentReport.push(err instanceof Error ? err.message : err.toString());
        res.write(studentReport.join('\n'));
        res.end();
      });
  }
});

const PORT = 1245;
const app = server.listen(PORT, () => process.stdout.write(`Listening on port ${PORT}\n`));

module.exports = app;
