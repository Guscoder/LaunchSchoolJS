/* eslint-disable max-lines-per-function */
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    courseNotes: {},
    info() {
      console.log(`${this.name} is a ${this.year} year student.`);
    },
    addCourse(courseName, courseCode) {
      this.courses.push({ name: courseName, code: courseCode });
    },
    listCourses() {
      return this.courses;
    },
    addNote(courseCode, noteText) {
      this.courseNotes[courseCode] = noteText;
    },
    updateNote(courseCode, noteText) {
      this.courseNotes[courseCode] = noteText;
    },
    viewNotes() {
      for (let course in this.courseNotes) {
        console.log(`${course}: ${this.courseNotes[course]}`);
      }
    },
  };
}
