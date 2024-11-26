const password = document.querySelector("#password");
const confirmePasword = document.querySelector('#confirm_password');
const error = document.querySelector('.error');
const button = document.querySelector('.submit');

button.addEventListener('click', ()=>{
    if(password.value!== confirmePasword.value){
        error.textContent = '*Passwords do not match'
    } else{
        error.textContent = ''
    }
    
})


