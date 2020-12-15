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

let school = {
  students: [],
  addStudent: function (name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0) {
      let student = createStudent(name, year);
      this.students.push(student);
      return student;
    } else {
      console.log('Invalid Year');
    }
  },
  enrollStudent: function (studentName, courseName, courseCode) {
    this.getStudent(studentName).addCourse(courseName, courseCode);
  },
  addGrade: function (studentName, courseName, grade) {
    let course = this.getStudent(studentName)
      .listCourses()
      .filter((course) => {
        return courseName === course.name;
      })[0];
    if (course) {
      course.grade = grade;
    }
  },
  getStudent(studentName) {
    return this.students.find((student) => student.name === studentName);
  },
  getReportCard: function (student) {
    let theStudent = this.students.filter((pupil) => {
      return pupil.name === student;
    });
    theStudent.listcourses.forEach((course) => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In Progress`);
      }
    });
  },
  courseReport: function (courseName) {
    console.log(`=${courseName} Grades=`);
    this.students.forEach((student) => {
      student.courses.forEach((course) => {
        if (course.name === courseName) {
          console.log(`${student.name}: ${course.grade}`);
        }
      });
    });
  },
};

school.addStudent('Paul', '1st');
school.addStudent('Amy', '2nd');

console.log(school.students);
school.enrollStudent('Paul', 'Math', '101');
school.addGrade('Paul', 'Math', 95);
school.getReportCard('Paul');
