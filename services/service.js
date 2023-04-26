function post(data){

}

export default async function Registration([name,phone,email,password]){  
const body = {
    name,
    phone,
    email,
    password
}
 $.ajax({

         type: 'POST',
         url: 'http://localhost:8080/MINI%20PROJECTS/server/registration.php',
         data: { 'data': JSON.stringify(body) },
         success: (response) => {
             let result = JSON.parse(response)
             console.log(result.key);
         },
         error: (xhr, statusText) => {
             console.log(statusText);
         },

     });
}

//'http://localhost:8080/MINI%20PROJECTS/server/registration.php'
