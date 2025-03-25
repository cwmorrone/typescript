// SOLUTION

// Interface for a student
interface Student{
  id: number;
  name: string;
  gpa: number;
  status: string;
}

interface Student{
    gpa: number

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
                            {id: 2, name: "Bob", gpa: 3.2, status: "paused"},
                            {id: "CS451", title: "Programming Languages", credits: 3},
                            {id: "TS101", title: "Intro to TypeScript", credits: 1}
                         ];
console.log("Mixed list", mixedList);


// Find list of students only
function isStudent(obj: entry):obj is any {
    return "gpa" in obj;
}
const studentList: Student[] = mixedList.filter(isStudent);
console.log("Student list", studentList);

// Find list of courses only
function isCourse(obj: entry){
    return "credits" in obj;
}
const courseList: Course[] = mixedList.filter(isCourse);
console.log("Course list", courseList);



// functional way of doing it
// is there some way to remove !("gpa" in list[0]) so that we can pass in a function that defines whay type of object we are filtering
type filterFunc = (list: entry[]) => entry[];
const filterListStudent: filterFunc = list =>{
    if(list.length === 0) return [];
    if(!("gpa" in list[0])) return filterListStudent(list.slice(1));
    else return [list[0], ...filterListStudent(list.slice(1))];
}

const studentList2: entry [] = filterListStudent(mixedList);
console.log("Student list2", studentList2);


