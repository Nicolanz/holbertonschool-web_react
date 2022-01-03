
// Teacher interface
interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    [index:string]: any;
    location: string;
}

// Directors interface which extends teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// printTeacher function
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// printTeacherFunction interface for the printTeacher function
interface printTeacherFunction {
  (firstname: string, lastName: string): string;
}

class StudentClass {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomework(){
    return `Currently working`;
  }
  displayName(){
    return this.firstName;
  }
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
