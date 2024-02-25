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

  displayTutor() {
    const tutorTeacher = this.tutor?.name;
    console.log("The tutor of student " + this.name + " is: " + tutorTeacher);
  }
}

class Teacher {
  name: string;
  countryCode: string;
  teachingTopics: string[];
  courses: Course[];

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
    this.teachingTopics = [];
    this.courses = [];
  }
  addTeachingTopic(teachingTopic: string) {
    this.teachingTopics.push(teachingTopic);
  }
  addCourse(course: Course) {
    this.courses.push(course);
  }
  displayCourses() {
    console.log("Teacher " + this.name + " teaches: ");
    for (let i = 0; i < this.courses.length; i++) {
      const courseName = this.courses[i].getCourseName();
      const courseId = this.courses[i].getCourseID();

      console.log(courseId + ", " + courseName);
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
    this.courseId = Math.floor(Math.random() * 10000);
    this.teachers = [];
    this.registeredStudents = [];
  }
  getCourseName() {
    return this.name;
  }
  getCourseID() {
    return this.courseId;
  }
  addStudent(student: Student) {
    this.registeredStudents.push(student);
  }
  addTeacher(teacher: Teacher) {
    this.teachers.push(teacher);
    teacher.addCourse(this);
  }
  displayStudents() {
    console.log("Student of " + this.name + ": ");
    for (let i = 0; i < this.registeredStudents.length; i++) {
      const studentName = this.registeredStudents[i].name;
      console.log(studentName);
    }
  }
}

let student1 = new Student("Jane", "FI");
let student2 = new Student("Jay", "US");
let student3 = new Student("Ctie", "GE");
let student4 = new Student("Kiop", "CN");
let student5 = new Student("Jenny", "SE");

let teacher1 = new Teacher("Max", "SE");
let teacher2 = new Teacher("Iou", "NW");
let teacher3 = new Teacher("Pied", "FI");
let teacher4 = new Teacher("Hiey", "JA");

let oobp = new Course("Object Programming", "Fun programming");
let js = new Course("JavaScript Programming", "Fighting");
let db = new Course("DataBase", "Interesting");

//console.log(student1);
student1.setTutor(teacher1);
student1.displayTutor();

oobp.addTeacher(teacher2);
oobp.addTeacher(teacher1);
js.addTeacher(teacher1);
oobp.addStudent(student1);
oobp.addStudent(student3);
oobp.addStudent(student5);

//console.log(oobp);
oobp.displayStudents();
//teacher1.displayCourses();
