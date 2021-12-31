
interface Student {
    firstname: string;
    lastName: string;
    age: number;
    location: string;
}

let student1: Student = {
  firstname: "Nicolas",
  lastName: "Zarate",
  age: 22,
  location: "Medellin",
};
let student2: Student = {
  firstname: "Wilson",
  lastName: "Lopez",
  age: 30,
  location: "Bogota",
};

let studentsList: Student[] = [student1, student2];

const body = document.getElementsByTagName("body")[0];
let table = document.createElement("table");

let newTr = document.createElement('tr');
let newTh = document.createElement('th');
let text = document.createTextNode('Firstname');

newTh.appendChild(text);
newTr.appendChild(newTh);

newTh = document.createElement('th');
text = document.createTextNode('Location');

newTh.appendChild(text);
newTr.appendChild(newTh);

table.appendChild(newTr);
let newTd;

for (let i = 0; i < studentsList.length; i++) {
  newTr = document.createElement('tr');
  text = document.createTextNode(studentsList[i].firstname);
  newTd = document.createElement('td');

  newTd.appendChild(text);
  newTr.appendChild(newTd);
  
  newTd = document.createElement('td');
  text  = document.createTextNode(studentsList[i].location);
  
  newTd.appendChild(text);
  newTr.appendChild(newTd);

  table.appendChild(newTr);
}

table.appendChild(newTr);
body.appendChild(table);
