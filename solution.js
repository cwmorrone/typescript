"use strict";
// Enum for student status
var StudentStatus;
(function (StudentStatus) {
    StudentStatus[StudentStatus["Active"] = 0] = "Active";
    StudentStatus[StudentStatus["Graduated"] = 1] = "Graduated";
    StudentStatus[StudentStatus["Suspended"] = 2] = "Suspended";
})(StudentStatus || (StudentStatus = {}));
// Generic DataManager class
class DataManager {
    constructor() {
        this.items = [];
    }
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
}
// Type guard to check if an object is a Student
function isStudent(obj) {
    return "gpa" in obj;
}
// Create DataManager instances
const studentManager = new DataManager();
const courseManager = new DataManager();
// Add some students
studentManager.add({ id: 1, name: "Alice", gpa: 3.8, status: StudentStatus.Active });
studentManager.add({ id: 2, name: "Bob", gpa: 3.2, status: StudentStatus.Graduated });
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
