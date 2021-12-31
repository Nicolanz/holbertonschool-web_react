
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [index:string]: any;
    location: string;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  (firstname: string, lastName: string): string;
}

// objs and functionality examples
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
let printnewTeacher: printTeacherFunction = printTeacher;

console.log(teacher3);
console.log(director1);
console.log(printnewTeacher("Nicolas", "Zarate"));
