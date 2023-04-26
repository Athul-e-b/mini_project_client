const loginBtn = document.getElementById('loginBtn')

loginBtn.onclick = ()=>{
    setTimeout(() => {
        window.location = 'http://127.0.0.1:5500/client/components/index.html'
    }, 1000);
}