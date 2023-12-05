function getStudentsByLocation(students, location) {

  const filteredStudents = students.filter(function(student) {
    return student.location === location;
  });

  return filteredStudents;
}

export default getStudentsByLocation;
