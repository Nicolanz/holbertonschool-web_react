
interface DirectorInterface {
  workFromHome: () => string;
  getCoffeeBreak?: () => string;
  workDirectorTasks: () => string;
}

interface TeacherInterface {
  workFromHome: () => string;
  getCoffeeBreak: () => string;
  workTeacherTasks: () => string;
}

class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  }
  getToWork(): string {
    return `Getting a coffee break`;
  }
  workDirectorTasks(): string {
    return `Getting to director tasks`;
  }
}

class Teacher implements TeacherInterface {
  workFromHome():string{
    return `Cannot work from home`;
  }
  getCoffeeBreak(): string{
    return `Cannot have a break`;
  }
  workTeacherTasks(): string{
    return `Getting to work`;
  }
}

function createEmployee(salary: number | string) {
  if (salary < 500){
    return new Teacher();
  }
  return new Director();
}

function isDirector(employee: Director | Teacher): employee is Director{
  return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: Director | Teacher){
  if (isDirector(employee)){
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

type Subjects = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') {
    console.log('Teaching Math');
    return 'Teaching Math';
  } else if (todayClass === 'History') {
    console.log('Teaching History');
    return 'Teaching History';
  }
  return '';
}

// execute examples

// Task 5
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

// Task 6
executeWork(createEmployee(200));
executeWork(createEmployee(1000));

// Task 7
teachClass('Math');
teachClass('History');
