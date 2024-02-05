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
  tutor: any;

  constructor(name: string, countryCode: string) {
    this.name = name;
    this.countryCode = countryCode;
    this.studentId = Math.floor(Math.random()) * 100;
  }

  setTutor(teacherTutor: any) {
    this.tutor = teacherTutor;
  }
}

let student1 = new Student("Jane", "FI");

let student1 = new Student("Max", "SE");

class Teacher {
  name: string;
  countryCode: string;
  teachingTopics: string[];
  course: any;

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
  courseId: number;
  teachers: string[];
  registeredStudents: [];

  constructor(name: string, courseId: number) {
    this.name = name;
    this.courseId = courseId;
    this.teachers = [];
    this.registeredStudents = [];
  }

  addTeacher(teacher: string) {
    this.teachers.push(teacher);
  }

  addRegisteredStudent(registeredStudent: string) {
    this.registeredStudents.push(registeredStudent);
  }
}
