let mark = []
let id = ''
const loading = document.getElementById("loader")
const statusMsg = document.getElementById("update-status")
document.getElementById("search-form").addEventListener('submit',async (e)=>{
    console.log(document.getElementById("search").value);
    e.preventDefault()
    try {
        let details = await getDetailsByField(parseInt(document.getElementById("search").value),'reg_number')
        if(details.data != null){ 
            console.log(details);
         id = details.data.id
         document.getElementById("image").src = "http://localhost:8080/MINI%20PROJECTS/server/liveFile.php?data=" + details.data?.photo
        document.getElementById("name").innerText = details.data.name
        document.getElementById("regno").innerText = details.data.reg_number
        document.getElementById("email").innerText = details.data.email
        document.getElementById("phone").innerText = details.data.phone
        document.getElementById("branch").innerText = details.data.branch
        details.data.mark === "" ? console.log('null') : console.log('not null')
        details.data.mark === "" ? mark = [] : mark = JSON.parse(details.data.mark)
    }else{
        document.getElementById("alert-msg").innerHTML = `<div class="alert alert-danger mt-2">No matching data found</div>`
        setTimeout(()=>{
            document.getElementById("alert-msg").innerHTML = ""
        },2000)
    }
        } catch (error) {
        console.log(error);
    }
})

const addBtn = document.querySelectorAll("[add]");
// let closeBtn = null
const subjectSection = document.getElementById("add-subject-section");

let btnId = -1;
addBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnId++;
    const subjectContainer = `<div class="col-6 "><input data-custom="subject" type="text" class="form-control" placeholder="Subject"></div>
<div class="col-5 d-flex gap-2">
    <input data-custom="mark" type="text" class="form-control w-50" placeholder="Mark">
    <input data-custom="cmark" type="text" class="form-control w-50" placeholder="Cmark">
</div>
<div class="col-1">
<div class="">
<button onclick='deleteOne(${btnId})' class="btn btn-danger ms-2"><i class="fa-solid fa-xmark"></i></button>
 </div>
</div>
`;
    const markContainer = document.createElement("div");
    markContainer.className = "row mt-3 py-3 shadow rounded border border-1";
    markContainer.setAttribute("data-custom", "row");
    markContainer.innerHTML = subjectContainer;
    subjectSection.insertAdjacentElement("beforeend", markContainer);
  });
});

function deleteOne(id) {
    console.log(typeof id);
    if(btnId >= 0){btnId--}
    console.log(btnId);
    const subContainer = document.querySelectorAll('[data-custom="row"]');
    const filteredNodes = [];
    
    for (let i = 0; i < subContainer.length; i++) {
      if (i !== id+1) { // Remove item at index 
        filteredNodes.push(subContainer[i]);
      }
    }
    
    // Replace the original NodeList with the filtered array
    subContainer.forEach((node) => node.parentNode.removeChild(node));
    filteredNodes.forEach((node) => subjectSection.appendChild(node)); 
}

document.getElementById("update-btn").addEventListener('click',async ()=>{
    loading.innerHTML = `<span class="spinner-border"></span>`
      const subjects = document.querySelectorAll('[data-custom="subject"]')
      const marks = document.querySelectorAll('[data-custom="mark"]')
      const cmarks = document.querySelectorAll('[data-custom="cmark"]')
      const semester = document.getElementById("semester-select").value
      let allMarks = []
      console.log(semester);
      subjects.forEach((elem,index)=>{
           let subjectMark = {
              subject:elem.value,
              mark:marks[index].value,
              cmark:cmarks[index].value
           }
           allMarks.push(subjectMark)
      })
      
      const markDetails = {
          sem:semester,
          mark_details:allMarks
      }
    mark.push(markDetails) 
    try {
        const result = await updatemarks(id,mark)
     if(result.status){   
        setTimeout(() => {
            loading.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i>` 
            statusMsg.innerHTML = `<h5 class="text-success">Details uploaded successfully <i class="fa-solid fa-circle-check"></i></h5>`
        }, 2500);
        setTimeout(() => {
            statusMsg.innerHTML = ``
        }, 4500);
    }else{
        setTimeout(() => {
            loading.innerHTML = `<i class="fa-solid fa-cloud-arrow-up"></i>` 
            statusMsg.innerHTML = `<h5 class="text-danger">Can't upload details <i class="fa-solid fa-triangle-exclamation"></i></h5>`
        }, 2500);
        setTimeout(() => {
            statusMsg.innerHTML = ``
        }, 4500);
    }

    } catch (error) {
        console.log(error);
    }
})

// let observer = new MutationObserver(function(mutationsList) {
//     closeBtn = document.querySelectorAll('[data-custom="close-btn"]')
    
//   });
//   let observerConfig = {
//     childList: true, // Watch for changes to the child nodes
//     subtree: true // Watch for changes in the entire subtree
//   };
//   observer.observe(subjectSection, observerConfig);

 
