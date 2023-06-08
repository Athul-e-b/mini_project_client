import {getDetails} from '../services/service.js'
import studentMath from '../services/galaryImages.js'
let studentMark = []
document.getElementById("logout-btn").addEventListener('click',()=>{
    window.localStorage.setItem("id","")
    window.location = '../index.html' 
})

window.addEventListener('load',async()=>{
   const profileImage = document.getElementById("profile-image")
    if(window.localStorage.getItem("id") !== ""){
        try{
            const result = await getDetails(window.localStorage.getItem('id'))
            console.log(result);
            result.data?.photo !== "" || result.data?.photo
            ? profileImage.src = 'http://localhost:8080/MINI%20PROJECTS/server/liveFile.php?data=' + result.data?.photo
            : profileImage.src = "../assets/profile-image.png";
            document.getElementById("display-name").innerText = result.data?.name
            document.getElementById("display-branch").innerText = result.data?.branch
            document.getElementById("display-regno").innerText = result.data?.reg_number
            document.getElementById("name").innerText = result.data?.name
              document.getElementById("regno").innerText = result.data?.reg_number
              document.getElementById("banch").innerText = result.data?.branch
              document.getElementById("phone").innerText = result.data?.phone
              document.getElementById("email").innerText = result.data?.email
              document.getElementById("address").innerText = result.data?.address
              result.data.mark === "" ? studentMark = [] : studentMark = JSON.parse(result.data.mark)
              createMarkTable(studentMark)
              console.log(studentMark);

           }catch(err){
              console.log(err);
           }
    }else{
        const body = document.getElementById("body")
        body.innerHTML = ""
        body.innerHTML = `
        <div class='alert-msg'>
        <div class='alert alert-danger mx-5'>
        <h3 class='text-center text-secondary'>
        Please login
        <a href='login.html' class='btn btn-success ms-3'>Login</a>
        </h3>
        </div>
        </div>`
    }
})

function createThead(){
   const theadTag = document.createElement('thead')
   const trTag = document.createElement('tr')
   const thTag1 = document.createElement('th')
   thTag1.setAttribute('scope','col')
   thTag1.innerText='Subject'
   const thTag2 = document.createElement('th')
   thTag2.setAttribute('scope','col')
   thTag2.innerText='Mark'
   const thTag3 = document.createElement('th')
   thTag3.setAttribute('scope','col')
   thTag3.innerText='C mark'
   trTag.append(thTag1,thTag2,thTag3)
   theadTag.append(trTag)
   return theadTag
}


function createTbody(allMarks){
   const tbodyTag = document.createElement('tbody')
   allMarks.forEach(elem => {
       const trTag = document.createElement('tr')
       const subject = document.createElement('td')
       subject.innerText = elem.subject
       const mark = document.createElement('td')
       mark.innerText = elem.mark
       const cmark = document.createElement('td')
       cmark.innerText = elem.cmark
       trTag.append(subject,mark,cmark)
       tbodyTag.append(trTag)
   });
   return tbodyTag
}

function createMarkTable(markDetails){
   const root = document.getElementById("root") 
    markDetails.forEach(elem=>{
        const rowTag = document.createElement('div')
        rowTag.classList.add('row')
        const heading = document.createElement('h5')
        heading.classList.add('text-primary','text-center')
        heading.innerText = elem?.sem
        const tableTag = document.createElement('table')
        tableTag.classList.add('table','table-striped')
        const tableHead = createThead()
        const tableBody = createTbody(elem.mark_details)
        tableTag.append(tableHead,tableBody)
        rowTag.append(heading,tableTag)
        root.append(rowTag)
    })
  console.log(root);  
}

console.log(studentMark);