import { getDetails } from "../services/service.js";
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const branch = document.getElementById("branch");
const registerNumber = document.getElementById("register-number");
const address = document.getElementById("address");
const photo = document.getElementById("photo")
const profilePicture = document.getElementById("profile-picture")
window.addEventListener("load", async () => {
  try {
    const result = await getDetails(window.localStorage.getItem("id"));
    document.getElementById("name-display").innerText = result.data?.name
    document.getElementById("branch-diplay").innerText = result.data?.branch || '-----' 
    document.getElementById("rollno-diplay").innerText = result.data?.reg_number || '-----' 
    name.value = result.data?.name;
    email.value = result.data?.email;
    phone.value = result.data?.phone;
    branch.value = result.data?.branch
    registerNumber.value = result.data?.reg_number
    address.value = result.data?.address
    result.data?.photo != "" ?  profilePicture.src = result.data?.photo : profilePicture.src = '../assets/profile-picture.jpg'
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});
document.getElementById("add-img").addEventListener('click',()=>{
   photo.click()
})
photo.addEventListener('change',()=>{
  const imgUrl = URL.createObjectURL(photo.files[0])
  profilePicture.src = imgUrl
  console.log(imgUrl);
})
document.getElementById("update-form").addEventListener('submit',(e)=>{
  e.preventDefault()
  console.log(name.value );
  console.log(email.value);
  console.log(phone.value);
  console.log(branch.value);
  console.log(registerNumber.value);
  console.log(address.value);
  console.log();
})

