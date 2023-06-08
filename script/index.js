const navBar = document.getElementById("mainNav")
document.getElementById("root").addEventListener('scroll',handleScroll)

const handleScroll = ()=>{
    if(window.scrollY > 0){
        navBar.style.backgroundColor = 'white'
        navBar.style.opacity = 0.9
    }
}