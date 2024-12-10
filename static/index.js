document.addEventListener('DOMContentLoaded', () =>{
    let form = document.getElementById('form')
    form.addEventListener('submit', () =>{
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let message = document.getElementById('message').value
        if(name&&email&&message){
            alert("Form submitted succesfully")
        }
        else{
            alert("Form not submitted successfully")
        }
    })

})
