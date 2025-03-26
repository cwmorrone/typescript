// solution.ts
// Authors: Vilnis Jatnieks and Chase Morrone

/* This section of the code sets up the list of objects which we will process */

/* Set up student and course object types */

interface Student{
    id: number;
    name: string;
    gpa: number;
    status: string;
}
interface Course{
    id: string;
    title: string;
    credits: number;
}
type Entry = Course | Student;
/* Create a list of mixed entries which we will process */
const mixedList: Entry[] = [{id: 1, name: "Alice", gpa: 3.8, status: "current"},
    {id: 2, name: "Bob", gpa: 3.2, status: "graduated"},
    {id: "CS451", title: "Programming Languages", credits: 3},
    {id: "TS101", title: "Intro to TypeScript", credits: 1},
    {id: 3, name: "Charlie", gpa: 3.5, status: "current"},
    {id: 4, name: "Diana", gpa: 3.9, status: "current"},
    {id: 5, name: "Ethan", gpa: 3.1, status: "graduated"},
    {id: 6, name: "Fiona", gpa: 3.7, status: "current"},
    {id: 7, name: "George", gpa: 3.3, status: "graduated"},
    {id: 8, name: "Hannah", gpa: 3.6, status: "current"},
    {id: 9, name: "Isaac", gpa: 3.0, status: "graduated"},
    {id: 10, name: "Julia", gpa: 3.4, status: "current"},
    {id: 11, name: "Kevin", gpa: 3.2, status: "graduated"},
    {id: 12, name: "Lily", gpa: 3.7, status: "current"},
    {id: 13, name: "Michael", gpa: 3.1, status: "graduated"},
    {id: 14, name: "Nina", gpa: 3.8, status: "current"},
    {id: 15, name: "Oscar", gpa: 3.3, status: "graduated"},
    {id: "CS452", title: "Data Structures", credits: 4},
    {id: "CS453", title: "Algorithms", credits: 3},
    {id: "CS454", title: "Database Systems", credits: 3},
    {id: "CS455", title: "Computer Networks", credits: 4},
    {id: "CS456", title: "Operating Systems", credits: 3},
    {id: "CS457", title: "Software Engineering", credits: 4},
    {id: "CS458", title: "Machine Learning", credits: 3},
    {id: "CS459", title: "Computer Graphics", credits: 3},
    {id: "CS460", title: "Artificial Intelligence", credits: 4},
    {id: "CS461", title: "Computer Security", credits: 3},
    {id: "TS102", title: "Advanced TypeScript", credits: 2},
    {id: "TS103", title: "TypeScript Design Patterns", credits: 2},
    {id: 16, name: "Paul", gpa: 3.5, status: "current"},
    {id: 17, name: "Quinn", gpa: 3.6, status: "graduated"},
    {id: 18, name: "Rachel", gpa: 3.9, status: "current"},
    {id: 19, name: "Sam", gpa: 3.2, status: "graduated"},
    {id: 20, name: "Tina", gpa: 3.7, status: "current"},
    {id: 21, name: "Uma", gpa: 3.1, status: "graduated"},
    {id: 22, name: "Victor", gpa: 3.4, status: "current"},
    {id: 23, name: "Wendy", gpa: 3.3, status: "graduated"},
    {id: 24, name: "Xavier", gpa: 3.6, status: "current"},
    {id: 25, name: "Yara", gpa: 3.2, status: "graduated"},
    {id: 26, name: "Zack", gpa: 3.5, status: "current"},
    {id: 27, name: "Abby", gpa: 3.8, status: "graduated"},
    {id: 28, name: "Ben", gpa: 3.1, status: "current"},
    {id: 29, name: "Cathy", gpa: 3.7, status: "graduated"},
    {id: 30, name: "Dave", gpa: 3.4, status: "current"}
];
/* console.log("Mixed list: ", mixedList); */




/* This section of the code gets into functional programming */

/*  the comparison function takes an Entry and returns a boolean  */
type isFunc = (obj: Entry) => boolean;

/*  purpose: determine if an Entry is a student
*   input: an Entry
*   output: true if a Student, otherwise false
*    */
const isStudent: isFunc = obj => {

    return "gpa" in obj;

}
/*  purpose: determine if an Entry is a course
*   input: an Entry
*   output: true if a Course, otherwise false
*     */
const isCourse: isFunc = obj =>{

    // FIX ME

}
/*  purpose: determine if an Entry is a Student whose status is current and has a high GPA (gpa > 3.5)
*   input: an Entry
*   output: a boolean
*      */
const isHighGPA: isFunc = obj =>{

    // FIX ME

}


/* the filter function takes a list of Entries and returns a list of Entries */
type filterFunc = (list: Entry[]) => Entry[];

/*  purpose: filter lists by element type. use recursion.
*   input: a list of Entries
*   output: a list of all Student Entries found in the input list
* */
const filterListStudent: filterFunc = list => {
    if(list.length === 0)           return [];                                              // Base case
    if(!isStudent(list[0]))         return filterListStudent(list.slice(1));                // Throw out the head bc it's not a student
    else                            return [list[0], ...filterListStudent(list.slice(1))];  // Keep the head bc it is a student
}
/*  purpose: filter lists by element type
*   input: a list of Entries
*   output: a list of only Course Entries
* */
const filterListCourse: filterFunc = list => {

    // FIX ME

}


/*  the filter builder function takes a comparison function and returns a filter function
    which filters each element based on the result of the element passed to comparison function
*  */

// FIX ME - add a type declaration for filterBuilder here

/*  purpose: create a filter function according to how we want to filter the list
*   input: an isFunc
*   output: a filterFunc
*  */
const filterBy: filterBuilder = f => {

    // FIX ME

    return filter;
}





/* This section tests our functions  */

const studentList: Entry[] = filterListStudent(mixedList);
const courseList: Entry[] = filterListCourse(mixedList);

const studentListFilterBy: Entry[] = FIX ME;
const courseListFilterBy: Entry[] = FIX ME;

const highGPAStudents: Entry[] = FIX ME;


console.log("Student list via filterListStudent: ", studentList);
console.log("Student list via filterBy: ", studentListFilterBy);

console.log("Course list via filterList: ", courseList);
console.log("Course list via filterBy: ", courseListFilterBy);

console.log("High GPA students: ", highGPAStudents);




