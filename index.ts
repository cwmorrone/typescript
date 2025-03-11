// SOLUTION

// Interface for a student
interface Student {
  id: number;
  name: string;
  gpa: number;
  status: string;
}

// Interface for a course
interface Course {
  code: string;
  title: string;
  credits: number;
}

// Generic DataManager class
class DataManager<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}


// Type guard to check if an object is a Student
function isStudent(obj: any): obj is Student {
  return "gpa" in obj;
}

const mixedList = [ {id: 1, name: "Alice", gpa: 3.8, status: "active"},
                    {id: 2, name: "Bob", gpa: 3.2, status: "active"},
                    {code: "CS451", title: "Programming Languages", credits: 3},
                    {code: "TS101", title: "Intro to TypeScript", credits: 1}
                  ];


const studentList = mixedList.filter(isStudent);


// Add some students
studentManager.add({ id: 1, name: "Alice", gpa: 3.8, status: "active" });
studentManager.add({ id: 2, name: "Bob", gpa: 3.2, status: "active" });

// Add some courses
courseManager.add({ code: "TS101", title: "Intro to TypeScript", credits: 3 });
courseManager.add({ code: "JS202", title: "Advanced JavaScript", credits: 4 });

// Retrieve and display students and courses
console.log("All Students:", studentManager.getAll());
console.log("All Courses:", courseManager.getAll());

// Filter and display only students from a mixed list
const mixedList = [...studentManager.getAll(), ...courseManager.getAll()];
const studentsOnly = mixedList.filter(isStudent);

console.log("Filtered Students:", studentsOnly);

