/*
  Exercise 10
  Continue previous exercise and create a JS class to store information about courses.
  Course should have the following information and necessary methods to set and get the info.
  · Name
  · Description
  · Course Id (number)
  · Teacher(s) (can be multiple)
  · Registered students
  Use the class to create three different courses and add students and teachers to the courses.
*/

class Student {
  name: string;
  countryCode: string;
  studentId: number;
  tutor: Teacher | undefined;

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
    this.studentId = Math.floor(Math.random() * 10);
  }

  setTutor(teacherTutor: Teacher) {
    this.tutor = teacherTutor;
  }
}

class Teacher {
  name: string;
  countryCode: string;
  teachingTopics: string[];

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
    this.teachingTopics = [];
  }

  addTeachingTopic(teachingTopic: string) {
    this.teachingTopics.push(teachingTopic);
  }
}

class Course {
  name: string;
  description: string;
  courseId: number;
  teachers: Teacher[];
  registeredStudents: Student[];

  constructor(name: string, description: string) {
    this.name = name;
    this.description = description;
    this.courseId = Math.floor(Math.random() * 100);
    this.teachers = [];
    this.registeredStudents = [];
  }

  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
  }

  addRegisteredStudent(registeredStudent: Student) {
    this.registeredStudents.push(registeredStudent);
  }

  //print out students names in the console
  displayStudents() {
    console.log("Student of " + this.name + ": ");
    for (let i = 0; i < this.registeredStudents.length; i++) {
      //read the current student name

      const name = this.registeredStudents[i].name;

      //print the name to console
      console.log(name);
    }
  }
}

//students examples
let student1 = new Student("Jane", "FI");

//console.log(student1);

let student2 = new Student("Jay", "US");
let student3 = new Student("Ctie", "GE");
let student4 = new Student("Kiop", "CN");

//teachers examples
let teacher1 = new Teacher("Max", "SE");
let teacher2 = new Teacher("Iou", "NW");
let teacher3 = new Teacher("Pied", "FI");
let teacher4 = new Teacher("Hiey", "JA");

//courses examples
let course1 = new Course("Object Programming", "Fun programming");
let course2 = new Course("JavaScript Programming", "Fighting");
let course3 = new Course("DataBase", "Interesting");

teacher1.addTeachingTopic("Python");
teacher1.addTeachingTopic("Java");
teacher2.addTeachingTopic("HTML");

//console.log(teacher1);
student1.setTutor(teacher1);
student2.setTutor(teacher2);
student4.setTutor(teacher4);

//console.log(student1);
//console.log(student2);

// console.log(course1);

course1.addTeacher(teacher1);

course1.addRegisteredStudent(student1);
course1.addRegisteredStudent(student2);
course1.addRegisteredStudent(student4);

console.log(course1);
