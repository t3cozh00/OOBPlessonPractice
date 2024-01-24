class Student{
    name;
    countryCode ;
    studentId;
    tutor;

constructor(
    name, 
    countryCode){
        this.name = name;
        this.countryCode = countryCode;
        this.studentId = Math.floor(Math.random()) * 100
    }

    setTutor(teacherTutor){
        this.tutor = teacherTutor;

    }

}

let student1 = new Student ("Jane", "FI");
let student2 = new Student ("Jay", "FI");
let student3 = new Student ("Ctie", "FI");
let student4 = new Student ("Kiop", "FI");

let teacher1 = new Teacher ("Max", "SE");
let teacher2 = new Teacher ("Iou", "SE");
let teacher3 = new Teacher ("Pied", "SE");
let teacher4 = new Teacher ("Hiey", "SE");


class Teacher {

    name;
    countryCode;
    teachingTopics;
    course;

    constructor(
      name,
      countryCode){
        this.name = name;
        this.countryCode = countryCode;
        this.teachingTopics = [];
        
    }

    addTeachingTopic(teachingTopic){
        this.teachingTopics.push(teachingTopic);
    } 
    
}


class Course {
    name;
    courseId;
    teachers;
    registeredStudents;

    constructor(
    name,
    courseId){
        this.name = name;
        this.courseId = courseId;
        this.teachers = [];
        this.registeredStudents = [];

    }

    addTeacher(teacher){
        this.teachers.push(teacher);
    } 

    addRegisteredStudent(registeredStudent){
        this.registeredStudents.push(registeredStudent);
    } 

    
}