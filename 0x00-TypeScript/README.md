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


---

## Author
**Nicolas Zarate** - [Nicolanz](https://github.com/Nicolanz)
