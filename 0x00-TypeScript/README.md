# 0x00. Typescript

## Resources:books:

* [TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
* [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/basic-types.html)

---
## Learning Objectives:bulb:

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

* Basic types   in Typescript
  * Interfaces, Classes, and func tions
* How to work with the DOM and Typescript
* Generic types
  * How to  use namespaces
* How to  merge declarations 
* How to use an ambient Namespace to import an external library
* Basic nominal typing with Typescript

---

### [0. Creating an interface for a student](./task_0/js/main.ts)
Write your code in the `js/main.ts` file:

* Write an interface named `Student` that accepts the following elements:
  * `firstName`: string
  * `lastName`: string
  * `age`: number
  * `location`: string
* Create 2 students variables called `student1` and `student2` and store them into an array named `studentsList`
* Using Vanilla Javascript, render a table and for each elements in the array, append a new row to the table
* Each row should contain the first name of the student and the location

### [1. Let's build a Teacher interface](./task_1/js/main.ts)
Write your code in the js/main.ts file:

* Write an interface named Teacher that accepts the following elements:
  * `firstName`: string - can only be set during initialization of an object of this interface
  * `lastName`: string - can only be set during initialization of an object of this interface
  * `fullTimeEmployee`: boolean
  * `yearsOfExperience`: number - optional
  * `location`: string
  * Add the possibility to add any attribute to the `Teacher` object like `contract(boolean)` without specifying the name of the attribute:
    * Property should be a string
    * Type of this property can be anything

### [2. Extending the Teacher class](./task_1/js/main.ts)
Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports(number)`
```
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
```

### [3. Printing teachers](./task_1/js/main.ts)
Write a function `printTeacher`:

* It accepts two arguments `firstName` and `lastName`
* It returns the first letter of the firstName and the full lastName
* Example: `printTeacher("John", "Doe") -> J. Doe`
Write an interface for the function named `printTeacherFunction`.

### [4. Writing a class](./task_1/js/main.ts)
Write a Class named `StudentClass`:

* The constructor accepts `firstName(string)` and `lastName(string)` arguments
* The class has a method named `workOnHomework` that return the string `Currently working`
* The class has a method named `displayName`. It returns the firstName of the student
* The constructor of the class should be described through an Interface
* The class should be described through an Interface

### [5. Advanced types Part 1](./task_2/js/main.ts)
Create the `DirectorInterface` interface with the 3 expected methods:

* workFromHome() returning a string
* getCoffeeBreak() returning a string
* workDirectorTasks() returning a string

Create the `TeacherInterface` interface with the 3 expected methods:

* `workFromHome()` returning a string
* `getCoffeeBreak()` returning a string
* `workTeacherTasks()` returning a string

Create a class `Director` that will implement `DirectorInterface`

* `workFromHome` should return the string `Working from home`
* `getToWork` should return the string `Getting a coffee break`
* `workDirectorTasks` should return the string `Getting to director tasks`

Create a class `Teacher` that will implement `TeacherInterface`

* `workFromHome` should return the string `Cannot work from home`
* `getCoffeeBreak` should return the string `Cannot have a break`
* `workTeacherTasks` should return the string `Getting to work`

Create a function `createEmployee` with the following requirements:

* It can return either a `Director` or a `Teacher` instance
* It accepts 1 arguments:
  * `salary`(either number or string)
* if `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise it should return a `Director`

### [6. Creating functions specific to employees](./task_2/js/main.ts)
Write a function `isDirector`:

* it accepts `employee` as an argument
* it will be used as a type predicate and if the employee is a director

Write a function `executeWork`:

it accepts `employee` as an argument
if the employee is a Director, it will call `workDirectorTasks`
if the employee is a Teacher, it will call `workTeacherTasks`

### [7. String literal types](./task_2/js/main.ts)
Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only. Write a function named `teachClass`:

* it takes `todayClass` as an argument
* it will return the string `Teaching Math` if `todayClass` is `Math`
* it will return the string `Teaching History` if `todayClass` is `History`

### [8. Ambient Namespaces](./task_3/js/main.ts)
Create a directory called `task_3` and copy these configuration files into it: `package.json`, `webpack.config.js`, `tsconfig.json`.
The first part of will require that you build an `interface` and a `type`. Inside a file named `interface.ts`:

* Create a type `RowID` and set it equal to `number`
* Create an interface `RowElement` that contains these 3 fields:
  * `firstName`: `string`
  * `lastName`: `string`
  * `age`: `number`

You are building the next part of the application architecture. The goal is to save the entities to a database. Because of time constraints, you can’t write a connector to the database, and you decided to download a library called `crud.js`. Copy this file into the `task_3/js` directory.

### [9. Namespace & Declaration merging](./task_4/package.json)
Create a new directory `task_4` and copy the above `tsconfig.json` and put this package.json in there
```
{
  "name": "task_4",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^2.4.0",
    "@typescript-eslint/parser": "^2.4.0",
    "typescript": "^3.6.4"
  }
}
```

### [10. Update task_4/js/main.ts](./task_4/js/main.ts)
* create and export a constant `cpp` for Cpp Subjects
* create and export a constant `java` for Java Subjects
* create and export a constant `react` for React Subjects
* create and export one Teacher object `cTeacher` with `experienceTeachingC = 10`
* for Cpp subject, log to the console `C++`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher` and print the strings they return
* for Java subject, log to the console `Java`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return
* for React subject, log to the console `React`, set `cTeacher` as the teacher, call the two methods `getRequirements` and `getAvailableTeacher`, and print the strings they return

### [11. Brand convention & Nominal typing](./task_4/js/main.ts)
Create a directory `task_5` and copy these configuration files into the root of `task_5`: `package.json`, `tsconfig.json`, `webpack.config.js`

Create two interfaces `MajorCredits` and `MinorCredits` in `task_5/js/main.ts`:

* Each interface defines a number named `credits`
* Add a brand property to each interface in order to uniquely identify each of them

Create two functions named `sumMajorCredits` and `sumMinorCredits` in `task_5/js/main.ts`:

* Each function takes two arguments `subject1` and `subject2`
* `sumMajorCredits` returns `MajorCredits` value and `sumMinorCredits` returns `MinorCredits` value
* Each function sums the credits of the two subjects

---

## Author
**Nicolas Zarate** - [Nicolanz](https://github.com/Nicolanz)
