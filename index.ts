// SOLUTION

// Interface for a student
interface Student{
  id: number;
  name: string;
  gpa: number;
  status: string;
}
// Interface for a course
interface Course{
  id: string;
  title: string;
  credits: number;
}


// List of mixed entries
type entry = Course | Student;
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
    return "credits" in obj;
}
const courseList: Course[] = mixedList.filter(isCourse);
console.log("Course list", courseList);

