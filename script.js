const password = document.querySelector('#password');
const passwordConfirmation = document.querySelector('#passwordConfirmation');
const outputSpan = document.querySelector('.error')
outputSpan.style.color = 'red';
outputSpan.style.fontSize='.8rem'
const form = document.querySelector('form');
form.addEventListener('submit',(e)=>{
    if(password.value != passwordConfirmation.value){
        outputSpan.textContent = 'passwords do not match';
        e.preventDefault();
    }
})