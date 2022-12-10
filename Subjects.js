
fetch("http://localhost:8080/Subject/subjects").then((data)=> {
    return data.json();
}).then((objectdata)=>{
    console.log(objectdata);
    let tableData = "";
    objectdata.map((values)=>{
        tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.level}</td>
            <td>${values.students}</td>
        </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData

})
