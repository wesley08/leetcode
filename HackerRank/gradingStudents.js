function gradingStudents(grades) {
  // Write your code here
  for (let i = 0; i < grades.length; i++) {
    if (5 - (grades[i] % 5) <= 2 && grades[i] >= 38) {
      grades[i] = grades[i] - (grades[i] % 5) + 5;
    }
  }
  return grades;
}
