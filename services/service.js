 function post(url,data){
    let resultData = {}
   return  Promise.resolve($.ajax({
        type: 'POST',
        url,
        data: { 'body': JSON.stringify(data) },
        success: (response) => {
            let result = JSON.parse(response)
           return {
               class:'alert-success',
               message: result.message
            }
        },
        error: (xhr, statusText) => {
           return {
               class:'alert-success',
               message: 'Login failed'
            }
        },

    }))
   
}

export default async function Registration([name,phone,email,password]){  
const body = {
    name,
    phone,
    email,
    password
}
let result = await  post('http://localhost:8080/MINI%20PROJECTS/server/registration.php',body)

     return JSON.parse(result)
}

//'http://localhost:8080/MINI%20PROJECTS/server/registration.php'
