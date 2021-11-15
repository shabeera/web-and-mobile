class Student {

    constructor() {
        console.log('Student class running');
    }
}

function some() {
    alert('I am running');
}

class Course {
    constructor() {
        console.log('Course class running');
    }
}

export { Course, Student, some };