/* STARTER CODE

// Interface for a student
interface Student{
    id: number;
    name: string;
    gpa: number;
    status: string;
}
// Interface for a course
interface Course{

   // FIX ME - add properties id, title, and credits. assign each property an appropriate type.
   //          visit https://www.typescriptlang.org/docs/handbook/basic-types.html for help

}


// Create list of mixed entries

type entry = // FIX ME - define a union type called entry which contains Student or Course
             // visit https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html

const mixedList: entry[] = [  {id: 1, name: "Alice", gpa: 3.8, status: "active"},
    {id: 2, name: "Bob", gpa: 3.2, status: "active"},
    {id: "CS451", title: "Programming Languages", credits: 3},
    {id: "TS101", title: "Intro to TypeScript", credits: 1}
];
console.log("Mixed list", mixedList);


// Find list of students only
function isStudent(obj: entry): obj is Student {
    return "gpa" in obj;
}
const studentList: Student[] = mixedList.filter(isStudent);
console.log("Student list", studentList);


// Find list of courses only
function isCourse(obj: entry): obj is Course {

   // FIX ME - return true if a property unique to Course exists in obj, otherwise false

}
const courseList: Course[] = // FIX ME - return a list of only Courses
console.log("Course list", courseList);

*/