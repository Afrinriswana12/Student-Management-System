//post

function addStudent(){

    let Student = {
        id: document.getElementById("id").value,
        name: document.getElementById("name").value,
        department: document.getElementById("department").value
    }
    fetch("http://localhost:8082/student",{
        method : "post",
        headers: {
            "Content-Type" : "application/json"

        },
        body: JSON.stringify(Student)
    })
    .then(res => res.json())
    .then(data => {
        alert("Student Added");
        console.log(data);
    });

}
//get

function getStudents(){
    fetch("http://localhost:8082/students")
        .then(res => res.json())
        .then(data => {
            let output = " ";
            output += "<table>";
            output += "<tr>";
            output += "<th> ID </th>";

            output += "<th> Name </th>";

            output += "<th> Department </th>";
            output += "</tr>";

            data.forEach(Student =>{
                 output += "<tr>";
                 output += "<td>" + Student.id + "</td>";
                 output += "<td>" + Student.name + "</td>";
                 output += "<td>" + Student.department + "</td>";
                 output += "</tr>";
            });

            output += "</table>";
            document.getElementById("result").innerHTML = output;

        });
    
}
//put

function updateStudent(){

    let id =  document.getElementById("id").value;
    let Student = {
        id: parseInt(id),
        name: document.getElementById("name").value,
        department: document.getElementById("department").value

    };
    console.log(Student);
    fetch("http://localhost:8082/student1/"+id,{
        method : "put",
        headers:{
            "Content-Type":"application/json"

        },
        body: JSON.stringify(Student)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert("updated");
});
    
}
//patch

function patchStudent(){
    

    let id =  document.getElementById("id").value;
    let Student = {
        id: parseInt(id),
        name: document.getElementById("name").value,
        department: document.getElementById("department").value

    };
    console.log(Student);
    fetch("http://localhost:8082/student2/"+id,{
        method : "PATCH",
        headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(Student)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        alert("Patched");
        
});
    
}
//delete

function deleteStudent(){

    let id= document.getElementById("id").value;
    fetch("http://localhost:8082/student3/"+id,{
        method:"delete"

    })
    .then(res => res.text())
    .then(data => {
        alert(data);
    });
    
}