"use strict";

let student_1 = {
    firstName: 'Victor', 
    lastName: 'Marut', 
    age: 20, 
    grades: [3, 4, 4, 5, 4], 
    course: 2, 
    gender: 'male',
};
let student_2 = {
    firstName: 'Ivan', 
    lastName: 'Pelat', 
    age: 21, 
    grades: [3, 3, 4, 4, 4], 
    course: 3, 
    gender: 'male',
};
let student_3 = {
    firstName: 'Elena', 
    lastName: 'Felae', 
    age: 20, 
    grades: [4, 5, 5, 5, 4], 
    course: 2, 
    gender: 'female',
};
let student_4 = {
    firstName: 'Aleksandr', 
    lastName: 'Neoferum', 
    age: 22, 
    grades: [4, 5, 4, 5, 4], 
    course: 4, 
    gender: 'male',
};
let student_5 = {
    firstName: 'Semyon', 
    lastName: 'Solum', 
    age: 20, 
    grades: [2, 3, 2, 3, 2], 
    course: 2, 
    gender: 'male',
};
let student_6 = {
    firstName: 'Lada', 
    lastName: 'Sedan', 
    age: 18, 
    grades: [5, 5, 5, 5, 4], 
    course: 2, 
    gender: 'female',
};
let student_7 = {
    firstName: 'Svetlana', 
    lastName: 'Lumena', 
    age: 21, 
    grades: [5, 5, 5, 5, 5], 
    course: 3, 
    gender: 'female',
};
let student_8 = {
    firstName: 'Leonid', 
    lastName: 'Regem', 
    age: 23, 
    grades: [4, 4, 4, 4, 5], 
    course: 4, 
    gender: 'male',
};
let student_9 = {
    firstName: 'Valentina', 
    lastName: 'Antrum', 
    age: 18, 
    grades: [3, 3, 3, 3, 4], 
    course: 2, 
    gender: 'female',
};
let student_10 = {
    firstName: 'Dmitroy', 
    lastName: 'Vroy', 
    age: 20, 
    grades: [2, 2, 2, 2, 3], 
    course: 2, 
    gender: 'male',
};

let students = [
    student_1, 
    student_2,
    student_3,
    student_4,
    student_5,
    student_6,
    student_7,
    student_8,
    student_9,
    student_10,
]

for (let i = 0; i < students.length; i++) {
    let tmp = students[i].grades;
    let sum = 0;
    for (let k = 0; k < tmp.length; k++) {
        sum += tmp[k];
    };
    let avg = sum / tmp.length;
    console.log(avg);
    if (avg < 3) {
    delete students[i].grades; 
    delete students[i].course;
    students[i]['isReadyForArmy'] = true;
    } console.log(students[i])
}

let arr = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].isReadyForArmy == true){
    arr.push(students[i])
    }
} console.log(arr)
