function Student (name, countryCode){

    this.name = name;
    this.birthplace = countryCode;
    this.studentId = Math.floor( Math.random() * 100000000) ;
    // random student id generation with some logic . if "this.studentId = Math.random() ", student id will be generated betweeen 0-1
    //Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number

    this.tutor = undefined;
   


    this.setTutor = function(teacherTutor){
      this.tutor = teacherTutor;
    }
}


let student1 = new Student("Cong", "CN");
let student2 = new Student("Ha", "US");
let student3 = new Student("Uo", "FI");

console.log(student1);
console.log(student2);
console.log(student3);


function Teacher (name, countryCode){

    this.name = name;
    this.birthplace = countryCode;
    

    this.teachingTopics = [];

    this.addTeachingTopic = function(teachingTopic){
        this.teachingTopics.push(teachingTopic);
    };

}


let teacher1 = new Teacher("Tyi", "CN");
console.log(teacher1);

teacher1.addTeachingTopic()
student1.setTutor(teacher1)
console.log(student1);


teacher1.name = "Some other name"
console.log(student1);
// teacher1.addTeachingTopic("Python");
// teacher1.addTeachingTopic("JavaScript");


let teacher2 = new Student("Ha", "US");
let teacher3 = new Student("Uo", "FI");




/*  add a tutor property to the student constructor function so that all students have a tutor property
you should add a setTutor method to the student constructor function so that the tutor property can be set

add teacher1 as a tutor to the student1 object
*/