

var form  = document.getElementById("form")

form.addEventListener('submit',function(e){

    e.preventDefault()

    var name = document.getElementById('name').value;
    var email = document.getElementById('Email').value;
    var Address = document.getElementById('Address').value;
    var Phone = document.getElementById('Phone').value;
    
    fetch(" http://localhost:8080/Controller/Students",{
        method:'POST',
        body:JSON.stringify({
            name:  name,
            email: email,
            address: Address,
            phone: Phone,
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
