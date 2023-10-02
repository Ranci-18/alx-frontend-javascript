export default function updateStudentGradeByCity(array, city, newGrades) {
  const newArray = array.map((studentObj) => {
    const student = studentObj;
    const foundGrade = newGrades.find((gradeObj) => gradeObj.studentId === student.id);
    if (foundGrade) {
      student.grade = foundGrade.grade;
    } else {
      student.grade = 'N/A';
    }
    return student;
  });

  return newArray.filter((studentObj) => studentObj.location === city);
}
