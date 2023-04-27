const loginForm = document.getElementById('loginForm')


loginForm.addEventListener('submit',async (event)=>{
    event.preventDefault()
    setTimeout(() => {
        window.location = 'http://127.0.0.1:5500/client/components/index.html'
    }, 1000);
})