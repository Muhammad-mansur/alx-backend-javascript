function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(student => student.location === city)
    .map(student => {
      // Find the grade object in newGrades for the current student
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);
      
      // Return a new object with the student's details and updated grade
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A'
      };
    });
}
