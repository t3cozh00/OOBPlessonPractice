/*
  Exercise 9
  Your task is to create JS classes to represent students and teachers.
  Student should have the following properties (There should be methods to set and get each property as well):
    · Name
    · Birthplace (country only, use two letter country codes from ISO 3166-1 alpha-2)
    · Birthday
    · Student Id (number, for example 34626)
    · Class Id (eg. DIN21SP)
    · Student email address
  Teacher should have the following properties (There should be methods to set and get each property):
    · Name
    · Birthplace (country only, use two letter country codes from ISO 3166-1 alpha-2)
    · Birthday
    · Personnel Id (string, for example 345a-ffG-25KY)
    · List of skill topics (for example frontend programming, mathematics, english language, communications etc.)
    · Starting date of employment
    · Staff email address
  Use your classes to create five example student and two example teacher objects.
*/

function StudentOne(name, countryCode) {
  this.name = name;
  this.birthplace = countryCode;
  this.studentId = Math.floor(Math.random() * 100000000);
  // random student id generation with some logic . if "this.studentId = Math.random() ", student id will be generated betweeen 0-1
  //Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number

  this.tutor = undefined;

  this.setTutor = function (teacherTutor) {
    this.tutor = teacherTutor;
  };
}

let student1 = new StudentOne("Cong", "CN");
let student2 = new StudentOne("Ha", "US");
let student3 = new StudentOne("Uo", "FI");

console.log(student1);
console.log(student2);
console.log(student3);

function TeacherOne(name, countryCode) {
  this.name = name;
  this.birthplace = countryCode;

  this.teachingTopics = [];

  this.addTeachingTopic = function (teachingTopic) {
    this.teachingTopics.push(teachingTopic);
  };
}

let teacher1 = new TeacherOne("Tyi", "CN");

console.log(teacher1);

teacher1.addTeachingTopic();
teacher1.addTeachingTopic("Python");

student1.setTutor(teacher1);

teacher1.addTeachingTopic("JavaScript");
console.log(student1);

//teacher1.name = "Some other name"
//console.log(student1);

let teacher2 = new StudentOne("Ha", "US");
let teacher3 = new StudentOne("Uo", "FI");

/*  add a tutor property to the student constructor function so that all students have a tutor property
you should add a setTutor method to the student constructor function so that the tutor property can be set

add teacher1 as a tutor to the student1 object
*/
