/** @format */

let arr = [ 
            { id: 1, name: "john", age: "18", marks: 80 },    
            { id: 2, name: "jack", age: "20", marks: 85 },    
            { id: 3, name: "karen", age: "19", marks: 35 }
          ];

function PrintStudentswithMap() 
{
    arr.map(student => 
    {
        if (student.marks > 50) 
        {
            console.log(student);
        }
    });
}

function PrintStudentsbyForEach() 
{
    arr.forEach(student => 
    {
        if (student.marks > 50) 
        {
            console.log(student);
        }
    });
}

function addData() 
{
    let newStudent = { id: 4, name: "susan", age: "20", marks: 45 };
    arr.push(newStudent);
    console.log(newStudent);
}

function removeFailedStudent() 
{
    arr = arr.filter(student => student.marks >= 50);
    console.log(arr);
}

function concatenateArray() 
{
    let newArray =  [        
                        { id: 4, name: "kevin", age: "18", marks: 75 },        
                        { id: 5, name: "lisa", age: "20", marks: 95 },        
                        { id: 6, name: "matt", age: "19", marks: 60 }    
                    ];
    arr = arr.concat(newArray);
    console.log(arr);
}
