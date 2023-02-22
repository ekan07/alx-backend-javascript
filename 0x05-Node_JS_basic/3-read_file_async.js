/**
 * Reading a file asynchronously with Node JS
 */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        resolve(data);
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

        console.log(`Number of students: ${numberOfStudents}`);

        for (const [field, value] of Object.entries(obj)) {
          const firstnames = value.firstname.join(', ');
          console.log(
            `Number of students in ${field}: ${value.count}. List: ${firstnames}`,
          );
        }
      }
    });
  });
}

module.exports = countStudents;
