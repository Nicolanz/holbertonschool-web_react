
interface Student {
    firstname: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
  name: "Nicolas",
  lastName: "Zarate",
  age: 22,
  location: "Medellin",
};
const student2: Student = {
  name: "Wilson",
  lastName: "Lopez",
  age: 30,
  location: "Bogota",
};

let studentsList: Student[] = [student1, student2];

const body = document.getElementsByTagName("body")[0];
let table = document.createElement("TABLE");

table.setAttribute("id", "myTable");
table = document.getElementById("myTable");

let tr = document.createElement("TR");
tr.setAttribute("id", "myTr");
tr = document.getElementById("myTr");

const name = document.createElement("TH");
const location = document.createElement("TH");

name.appendChild(document.createTextNode("Name"));
location.appendChild(document.createTextNode("Location"));

tr.appendChild(name);
tr.appendChild(location);
tr.removeAttribute("id");

for (const i of studentsList){
    newTr = document.createElement("TR");
    tr.setAttribute("id", "myTr");
    tr = document.getElementById("myTr");
}
getElementsByTagName("body")[0]
body.appendChild(p);
