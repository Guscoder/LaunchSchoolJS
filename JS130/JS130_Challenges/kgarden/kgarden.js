/* eslint-disable no-mixed-operators */
//[window][window][window]
// VRCGVVRVCGGCCGVRGCVCGCGV
// VRCCCGCRRGVCGCRVVCVGCGCV

/* 
Each students gets 4 plants
Each student has 2 plants on each level, on top of each other
Students are in alphabetical order by first name
12 plants in each row (2 rows)

program should return the names of the plants in order if given the name of a student

Alice, Bob, Charlie, David,
Eve, Fred, Ginny, Harriet,
Ileana, Joseph, Kincaid, and Larry.


algorithm:
1. Create Garden
    -convert diagram string into array with 2 elements
2. create student list
    -default or arg into student list array
3. create methods based on student names
    -iterate through student list array
    -create method for each name to access garden plants
        -get student index/order in list
        -copy plants from diagram list based on students index/order
        -match student;s diagram letters to plants
        -return array of student plants in order on window

    
*/
const STUDENTS = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Fred",
  "Ginny",
  "Harriet",
  "Ileana",
  "Joseph",
  "Kincaid",
  "Larry",
];

const PLANT_NAMES = {
  V: "violets",
  C: "clover",
  G: "grass",
  R: "radishes",
};

// function createStudentMethods(studentNames, order) {
//     studentNames.forEach(student => {

//     })
// }

class Garden {
  constructor(diagram, students = STUDENTS) {
    this.diagram = diagram.split("\n");
    this.studentList = students.sort();
    this.createStudentProperties();
  }
  createStudentProperties() {
    this.studentList.forEach((student, index) => {
      let studentPlantList = this.getStudentPlants(index);
      this[student.toLowerCase()] = this.getPlantNames(studentPlantList);
    });
  }
  createStudentMethods() {
    this.studentList.forEach((student, index) => {
      this[student] = function () {
        let studentPlantList = this.getStudentPlants(index);
        return this.getPlantNames(studentPlantList);
      };
    });
  }
  getStudentPlants(orderNum) {
    let studentPlants = [];
    studentPlants.push(this.diagram[0][orderNum * 2]);
    studentPlants.push(this.diagram[0][orderNum * 2 + 1]);
    studentPlants.push(this.diagram[1][orderNum * 2]);
    studentPlants.push(this.diagram[1][orderNum * 2 + 1]);

    return studentPlants;
  }
  getPlantNames(plantList) {
    // loop through studentPlants
    // match each letter to plant and add plant name to array
    // return new array of plant names
    return plantList.map((letter) => {
      return PLANT_NAMES[letter];
    });
  }
}

module.exports = Garden;
