/*
  Exercise 11
  Continue previous exercise and add the necessary methods to
    · Get and print out all courses which a given teacher is teaching. 
    (this method should be part of a relevant class)
    · Get and print out all courses which a given student is participating 
    (this method should be part of a relevant class)
*/

class Student {
  #firstName: string;
  #lastName: string;
  //name: string;
  #countryCode: string;
  #studentId: number;
  #tutor: Teacher | undefined;

  constructor(firstName: string, lastName: string, countryCode: string) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#countryCode = countryCode;
    this.#studentId = Math.floor(Math.random() * 10);
  }

  setTutor(teacherTutor: Teacher) {
    this.#tutor = teacherTutor;
  }

  // get full name of students
  getName() {
    return this.#firstName + " " + this.#lastName;
  }
}
// # hashtag in JavaScript means a private property

class Teacher {
  name: string;
  countryCode: string;
  teachingTopics: string[];
  #courses: Course[];

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
    this.teachingTopics = [];
    this.#courses = [];
  }

  addTeachingTopic(teachingTopic: string) {
    this.teachingTopics.push(teachingTopic);
  }

  addCourse(currentCourse: Course) {
    this.#courses.push(currentCourse);
  }

  displayCourses() {
    console.log("Teacher " + this.name + " is teaching: ");
    for (let i = 0; i < this.#courses.length; i++) {
      //read course name
      const name = this.#courses[i].getName();

      //read course id
      const coursesId = this.#courses[i].getID();

      //print course name and id

      console.log(name + "," + coursesId);
    }
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
    teacher.addCourse(this);
  }

  addRegisteredStudent(registeredStudent: Student) {
    this.registeredStudents.push(registeredStudent);
  }

  //print out students names in the console
  displayStudents() {
    console.log("Student of " + this.name + ": ");
    for (let i = 0; i < this.registeredStudents.length; i++) {
      //read the current student name
      const name = this.registeredStudents[i].getName(); // 'this.registeredStudents[i]' is an student object

      //print the name to console
      console.log(name);
    }
  }

  getName() {
    return this.name;
  }

  getID() {
    return this.courseId;
  }
}

//students examples
let student1 = new Student("Jane", "Smith", "FI");

//console.log(student1);

let student2 = new Student("Jay", "Hill", "US");
let student3 = new Student("Ctie", "Swift", "GE");
let student4 = new Student("Kiop", "Chou", "CN");

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
//teacher2.addTeachingTopic("HTML");

//console.log(teacher1);
//student1.setTutor(teacher1);
//student2.setTutor(teacher2);
//student4.setTutor(teacher4);

//console.log(student1);
//console.log(student2);

console.log(course1);

course1.addTeacher(teacher1);
course2.addTeacher(teacher1);
course1.addTeacher(teacher2);

course1.addRegisteredStudent(student1);
course1.addRegisteredStudent(student2);
course1.addRegisteredStudent(student4);

//course1.displayStudents()

console.log(course1);

teacher1.displayCourses();
teacher2.displayCourses();
