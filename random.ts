

type stringOrNum = string | number;


type Animal = {
    name: string;
    height: number;
    weight: number;
}

interface Student{
    name: string;
}

interface Student{
    gpa: number;
}


interface person {
    name: string;
    age: number
}

function printPerson (p : person){
    console.log(`Name: ${p.name} \n Age: ${p.age}` );
}

let alice: person = {name: "Alice", age: 25};
printPerson(alice);

printPerson({name: "John", age: 47});
