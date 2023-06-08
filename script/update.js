import { getDetails, updateDetails } from "../services/service.js";
import { removeItems, addItems } from "./custommethod.js";
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const branch = document.getElementById("branch");
const registerNumber = document.getElementById("register-number");
const address = document.getElementById("address");
const photo = document.getElementById("photo");
const profilePicture = document.getElementById("profile-picture");
const viewBtn = document.getElementById("view-btn");
const diplayMessge = document.getElementById("status-msg");
const loading = document.getElementById("loading");
let file = null;

window.addEventListener("load", async () => {
  addItems(loading, '<i class="fa-regular fa-floppy-disk"></i>');
  try {
    const result = await getDetails(window.localStorage.getItem("id"));
    document.getElementById("name-display").innerText = result.data?.name;
    document.getElementById("branch-diplay").innerText =
      result.data?.branch || "-----";
    document.getElementById("rollno-diplay").innerText =
      result.data?.reg_number || "-----";
    name.value = result.data?.name;
    email.value = result.data?.email;
    phone.value = result.data?.phone;
    branch.value = result.data?.branch;
    registerNumber.value =
      result.data?.reg_number == 0 ? "" : result.data?.reg_number;
    address.value = result.data?.address;
    result.data?.photo !== "" || result.data?.photo
      ? (profilePicture.src =
          "http://localhost:8080/MINI%20PROJECTS/server/liveFile.php?data=" +
          result.data?.photo)
      : (profilePicture.src = "../assets/profile-picture.jpg");
    result.data?.address === "" || result.data?.branch === "" || result.data?.reg_number === ""
      ? viewBtn.classList.add("btn-success", "mt-4", "ms-4", "disabled")
      : viewBtn.classList.add("btn-success", "mt-4", "ms-4");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
});
document.getElementById("add-img").addEventListener("click", () => {
  photo.click();
});
photo.addEventListener("change", () => {
  file = photo.files[0];
  console.log(URL.createObjectURL(file));
  profilePicture.src = URL.createObjectURL(file);
});
document.getElementById("update-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  addItems(loading, '<div class="spinner spinner-border"></div>');
  const std_name = name.value;
  const std_email = email.value;
  const std_phone = phone.value;
  const std_branch = branch.value;
  const std_regNo = parseInt(registerNumber.value);
  const std_address = address.value;

  const details = {
    id: window.localStorage.getItem("id"),
    name: std_name,
    email: std_email,
    phone: std_phone,
    branch: std_branch,
    regno: std_regNo,
    address: std_address,
  };

  setTimeout(async () => {
    try {
      const result = await updateDetails(details, file);
      if (result.status) {
        diplayMessge.innerHTML = `<div class='alert alert-success text-center'>${result.message}</div>`;
        loading.innerHTML = '<i class="fa-regular fa-floppy-disk"></i>';
        removeItems(diplayMessge, 3000);
        setTimeout(() => {
          window.location = "profile.html";
        }, 3500);
      } else {
        removeItems(loading, 0);
        addItems(loading, '<i class="fa-regular fa-floppy-disk"></i>');
        diplayMessge.innerHTML = `<div class='alert alert-danger text-center'>${result.message}</div>`;
        removeItems(diplayMessge, 3000);
      }
    } catch (error) {
      console.log(error);
      removeItems(loading, 0);
      addItems(loading, '<i class="fa-regular fa-floppy-disk"></i>');
      diplayMessge.innerHTML = `<div class='alert alert-danger text-center'>Something went wrong</div>`;
      removeItems(diplayMessge, 3000);
    }
  }, 2000);
});
