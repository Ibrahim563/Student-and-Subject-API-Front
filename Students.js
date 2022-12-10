
fetch("http://localhost:8080/Controller/Students").then((data)=> {
    return data.json();
}).then((objectdata)=>{
    console.log(objectdata);
    let tableData = "";
    objectdata.map((values)=>{
        tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.name}</td>
            <td>${values.email}</td>
            <td>${values.address}</td>
            <td>${values.phone}</td>
            <td>${values.subjects}</td>
        </tr>`
    });
    document.getElementById("table_body").innerHTML=tableData

})
