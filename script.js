/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   console.log(arr.filter(arr => arr.marks > 50).map(arr => arr.name));
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(arr => {
    if (arr.marks > 50) console.log(arr.name);
  });
}

function addData() {
  //Write your code here, just console.log
  const newStudent = {id:arr.length+1, name:"susan", age:"20", marks:45};
  arr.push(newStudent);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(arr => arr.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  arr.push(
    {id:arr.length+1, name:"samantha", age:"21", marks:90},
    {id:arr.length+2, name:"kevin", age:"19", marks:70},
    {id:arr.length+3, name:"emily", age:"20", marks:55}
  );
  console.log(arr);
}
