let form = document.querySelector('#loginForm'); 
let vacio = document.querySelector('#errorMsj');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

email.addEventListener('change', function(){
})

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (email.value == "" || password.value == "" ) {
        vacio.innerText = `Esta vacío el campo` ;
   
    } else {
        this.submit
    }
}) 