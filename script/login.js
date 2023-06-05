import {Login} from '../services/service.js'
const loginForm = document.getElementById('loginForm')
const spinner = document.querySelector('.spinner')
const loginStatus = document.getElementById("login-status")
function appendSinner(state){
    if(state){
      spinner.innerHTML = `<span class="spinner-border text-light"></span>`
    }else{
     spinner.innerHTML = ''
    }
 }
loginForm.addEventListener('submit',async (event)=>{
    event.preventDefault()
    appendSinner(true)
  const email = document.getElementById("email")
  const password = document.getElementById("password")
  console.log(email.value,password.value);
    const result = await Login([email.value,password.value])
    console.log(result);
    
    if(result.status){ 
        window.localStorage.setItem("id",result.id)
        setTimeout(() => {
            appendSinner(false)
            loginStatus.innerHTML = `<div class='alert alert-success'>${result.message}</div>`
        }, 2500);
        setTimeout(() => {
            loginStatus.innerHTML = ""
            window.location = 'profile.html'
        }, 4500);
        console.log(result.message);
    }else{
        setTimeout(() => {
            appendSinner(false)
            loginStatus.innerHTML = `<div class='alert alert-danger'>${result.message}</div>`
        }, 2000);

        setTimeout(() => {
            loginStatus.innerHTML = ""
        }, 4500);
    }
    
})