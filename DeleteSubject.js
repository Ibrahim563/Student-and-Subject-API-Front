

var form  = document.getElementById("DeleteForm")

form.addEventListener('submit',function(e){

    e.preventDefault()

    var id = document.getElementById('ID').value;
    
    console.log(id)
    fetch(`http://localhost:8080/Subject/subjects/${id}`,{
        method:'DELETE',
        })
    
})
