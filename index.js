const form = document.querySelector('.form-content');
const email = document.querySelector('#email');
const small = document.querySelectorAll('small');
const inputs = document.querySelectorAll('input')
const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/



function validate (a, b) {
  if(a.value === b){
    a.classList.add('error')
    small[2].innerText = 'Email cannot be empty'
  } 
  else if(!regex.test(email.value)){
    a.classList.remove('error')
    email.classList.add('error')
    small[2].innerText = 'Looks like this is not an email'
  }
  else {
    a.classList.remove('error')
    email.classList.remove('error')
    small[2].innerText = ''
  }
}

inputs.forEach(input => {
  form.addEventListener('submit', (e)=>{
    e.preventDefault()
    validate(input,'')
  })
});
