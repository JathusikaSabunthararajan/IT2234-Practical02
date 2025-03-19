const students = [
  {
    "id": 1,
    "name": "John",
    "gender": "male",
    "course": "Engineering",
    "gpa": 3.5
  },
  {
    "id": 2,
    "name": "Alice",
    "gender": "female",
    "course": "IT",
    "gpa": 3.8
  },
  {
    "id": 3,
    "name": "Bob",
    "gender": "male",
    "course": "Mathematics",
    "gpa": 3.2
  },
  {
    "id": 4,
    "name": "Eve",
    "gender": "female",
    "course": "IT",
    "gpa": 3.9
  },
  {
    "id": 5,
    "name": "Charlie",
    "gender": "male",
    "course": "Physics",
    "gpa": 2.9
  },
  {
    "id": 6,
    "name": "Diana",
    "gender": "female",
    "course": "Engineering",
    "gpa": 3.6
  },
  {
    "id": 7,
    "name": "Frank",
    "gender": "male",
    "course": "IT",
    "gpa": 3.4
  },
  {
    "id": 8,
    "name": "Grace",
    "gender": "female",
    "course": "Physics",
    "gpa": 3.1
  },
  {
    "id": 9,
    "name": "Hannah",
    "gender": "female",
    "course": "Engineering",
    "gpa": 3.7
  },
  {
    "id": 10,
    "name": "Isaac",
    "gender": "male",
    "course": "IT",
    "gpa": 3.3
  }
];


//female students:


const femaleStudents = students.filter(student => student.gender === "female");
console.log("Female Students:", femaleStudents);


//IT course students

const itStudents = students.filter(student => student.course === "IT");
console.log("Students following IT course:", itStudents);


//max GPA and average GPA:


// Find Max GPA
const maxGPA = Math.max(...students.map(student => student.gpa));
console.log("Max GPA:", maxGPA);

// Find Average GPA
const avgGPA = students.reduce((sum, student) => sum + student.gpa, 0) / students.length;
console.log("Average GPA:", avgGPA.toFixed(2));
