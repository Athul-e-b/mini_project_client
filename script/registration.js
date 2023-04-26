import Registration from '../services/service.js'
const registerBtn = document.getElementById('submitButton')
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


registerBtn.onclick = ()=>{
    let data = []
    let message = ''
    let state = false
    appendSinner(true)

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
     
        Registration(data);
        msg.innerHTML = `<div class="alert alert-success w-25">Registration succesfull</div>`
    }else{
        setTimeout(() => {
            appendSinner(false)
            msg.innerHTML = ''
            allInputs.forEach(elem => {
                elem.style.borderColor = '#dee2e6'
            })
        }, 4000);
    }

   
}



