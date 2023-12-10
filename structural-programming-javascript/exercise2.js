/*
    Create a JavaScript object, representing a student.
    The student has a: name, surname, age.
    The student has also an array of courses.
    Each course has a name, the number of hours and a short description.
    Write a function that will create a sample Course object and fill it with some data.
    Write a function that will create a sample Student object and fill it with some data.
    Write another function that will copy the previously created Student and make a new one.
    Check if the student item can be properly copied - including his courses (the change in the copied student's courses should not affect the original ones schedule)!
*/

class Course {
    constructor(name, hours, description) {
        this.name = name
        this.hours = hours,
            this.description = description
    }
}

class Student {
    constructor(name, surname, age, courses) {
        this.name = name
        this.surname = surname
        this.age = age
        this.courses = courses
    }

    Copy() {
        var courses = []
2
        for (let i = 0; i < this.courses.length; i++) courses.push(new Course(this.courses[i].name, this.courses[i].hours, this.courses[i].description))

        return new Student(this.name, this.surname, this.age, courses)
    }
}

var studentExample = new Student("Example", "Test", 20, [ new Course("Javascript", 80, "Javascript Course") ])
var studentExample2 = studentExample.Copy()

studentExample2.name = "Updated"
studentExample2.courses[0].name = "Course updated!"

console.log(JSON.stringify(studentExample))
console.log(JSON.stringify(studentExample2))
