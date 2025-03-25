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
type Entry = Course | Student;
const mixedList: Entry[] = [  {id: 1, name: "Alice", gpa: 3.8, status: "active"},
                            {id: 2, name: "Bob", gpa: 3.2, status: "paused"},
                            {id: "CS451", title: "Programming Languages", credits: 3},
                            {id: "TS101", title: "Intro to TypeScript", credits: 1}
                         ];
console.log("Mixed list", mixedList);




/*  purpose: set up the structure of our is a what? functions   */
type isFunc = (obj: Entry) => boolean;

/*  purpose: determine if an Entry is a student    */
const isStudent: isFunc = obj => {
    return "gpa" in obj;
}

/* purpose: determine if an Entry is a course        */
const isCourse: isFunc = obj =>{
    return "title" in obj;
}

/* purpose: set up the structure of our filtering functions */
type filterFunc = (list: Entry[]) => Entry[];
/* purpose: filter lists by element type */
const filterListStudent: filterFunc = list => {
    if(list.length === 0) return [];
    if(!isStudent(list[0])) return filterListStudent(list.slice(1));
    else return [list[0], ...filterListStudent(list.slice(1))];
}
const filterListCourse: filterFunc = list => {
    if(list.length === 0) return [];
    if(!isCourse(list[0])) return filterListCourse(list.slice(1));
    else return [list[0], ...filterListCourse(list.slice(1))];
}

/* purpose: set up the structure of our filter builder */
type filterBuilder = (isWhat: isFunc) => filterFunc;
/* purpose: create a filter function according to what type we are looking for */
const filterBy: filterBuilder = f => {
    const filter: filterFunc = list => {
        if(list.length === 0) return [];
        if(!f(list[0]))       return filter(list.slice(1));
        else                  return [list[0], ...filter(list.slice(1))];
    }
    return filter;
}




/* purpose: compute and output our results  */
const studentList: Entry[] = filterListStudent(mixedList);
const courseList: Entry[] = filterListCourse(mixedList);

const studentListFilterBy: Entry[] = filterBy(isStudent)(mixedList);
const courseListFilterBy: Entry[] = filterBy(isCourse)(courseList);

console.log("Student list", studentList);
console.log("Student ListFilterBy", studentListFilterBy);
console.log("Course list", courseList);
console.log("Course ListFilterBy", courseListFilterBy);








