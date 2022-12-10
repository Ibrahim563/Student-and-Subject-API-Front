
var form  = document.getElementById("form")

form.addEventListener('submit',function(e){

    e.preventDefault()

    var name = document.getElementById('name').value;
    var level = document.getElementById('level').value;

    fetch("http://localhost:8080/Subject/subjects",{
        method:'POST',
        body:JSON.stringify({
            name:  name,
            level: level
        }),
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json ; charset=utf-8'
        }
    })
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })

})