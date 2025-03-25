Overview: TypeScript is a strongly typed superset of JavaScript that adds static type checking and interfaces, among other things. Developed by Microsoft, it helps catch errors at compile time and improves code maintainability, especially in large projects. TypeScript code compiles to plain JavaScript, making it compatible with any environment that runs JavaScript.

To run typescript files:
in your terminal, run tsc filename.ts-this creates a js file with the same name in your working directory
run node filename.js to compile the converted code 
Task 1: Complete the Course Interface
Modify the Course interface to include the following properties:
        ID: string to represent course ID (e.g., CS451).
        title: a string representing the course name.
        credits: a number representing the course credit hours.
Task 2: Define a Union Type for entry
        Create a union type called entry that allows values to be either a Student or a Course.

Task 3: Implement isCourse Function
        Complete the isCourse function to check if an object is a Course.

This function should return true if the object contains a property unique to Course.
        Return false otherwise.
Task 4: Extract Only Courses
        Use the filter method with isCourse to extract only Course objects from mixedList and store them in courseList.

Expected Output

When you run your completed TypeScript file, you should see output similar to this:

Mixed list [
  { id: 1, name: 'Alice', gpa: 3.8, status: 'active' },
  { id: 2, name: 'Bob', gpa: 3.2, status: 'active' },
  { id: 'CS451', title: 'Programming Languages', credits: 3 },
  { id: 'TS101', title: 'Intro to TypeScript', credits: 1 }
]
Student list [
  { id: 1, name: 'Alice', gpa: 3.8, status: 'active' },
  { id: 2, name: 'Bob', gpa: 3.2, status: 'active' }
]
Course list [
  { id: 'CS451', title: 'Programming Languages', credits: 3 },
  { id: 'TS101', title: 'Intro to TypeScript', credits: 1 }
]
Submission

Submit your completed assignment.ts file.
Ensure your code runs without errors using tsc assignment.ts (TypeScript compiler) and node assignment.js (if using JavaScript output).
