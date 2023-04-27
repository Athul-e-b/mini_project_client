import Registration from '../services/service.js'
const registerForm = document.getElementById('registration')
const msg = document.getElementById('msg')
const allInputs = document.querySelectorAll('.form-control')
const spinner = document.querySelector('.spinner')

function appendSinner(state){
   if(state){
     spinner.innerHTML = `<span class="spinner-border text-light"></span>`
   }else{
    spinner.innerHTML = ''
   }
}


// registerBtn.onclick = async ()=>{
    
  
// }

registerForm.addEventListener('submit',async (event)=>{
    event.preventDefault()
    let data = []
    let message = ''
    let state = false
    

    allInputs.forEach(textbox => {
        if (textbox.value === '') {
            textbox.style.borderColor = '#f0ada1'
            message = 'Please fill all fields'
            state = true
        }else{
           data = [...data,textbox.value]
        }
    })

    if(!state){
        appendSinner(true)
       let result = await Registration(data);
       if(result.status){
      
        setTimeout(() => {
            msg.innerHTML = `<div class="alert alert-success w-25">${result.message}</div>`
            appendSinner(false)  
        }, 2000);
        setTimeout(() => {
            msg.innerHTML = ''
            window.location='login.html'
        }, 4000);
       }else{
        setTimeout(() => {
            msg.innerHTML = `<div class="alert alert-danger w-25">${result.message}</div>`
            appendSinner(false)  
        }, 2000);
        setTimeout(() => {
            msg.innerHTML = ''
        }, 4000);
       }
       
    }else{
        setTimeout(() => {
            appendSinner(false)
            msg.innerHTML = ''
            allInputs.forEach(elem => {
                elem.style.borderColor = '#dee2e6'
            })
        }, 4000);
    }

   
})

