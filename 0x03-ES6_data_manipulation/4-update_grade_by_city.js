/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((obj) => obj.location === city)
    .map((student) => {
      newGrades.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          // eslint-disable-next-line no-param-reassign
          student.grade = studentGrade.grade;
        }

        if (!student.hasOwnProperty("grade")) {
          student.grade = "N/A";
        }
        return student;
      });

      return student;
    });
}
