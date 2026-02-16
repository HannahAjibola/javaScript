let person = {
    firstName : "Hannah",
    lastName : "Ajibola",
    age: 25,
};

person.email = "hannahajibola094@gmail.com"
delete person.lastName
console.log(person.firstName)

let students = {
    name: "hannah",
    age: 25,
    grade: "A"
}

students.school = "first baptist academy"
students.grade = "B"
delete students.age
console.log(student.grade)
console.log(Object.keys(students))
console.log(Object.values(students))

