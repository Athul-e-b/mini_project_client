function post(url, data) {
    let resultData = {};
    return Promise.resolve(
      $.ajax({
        type: "POST",
        url,
        data: { body: JSON.stringify(data) },
          success: (response) => {
          let result = JSON.parse(response);
          return {
            class: "alert-success",
            message: result.message,
          };
        },
        error: (xhr, statusText) => {
          console.log(statusText);
          return {
            class: "alert-danger",
            message: "Operation failed",
          };
        },
      })
    );
  }

async function getDetails(id) {
    const body = {
      id,
      operation: "get",
    };
    try {
      const result = await post(
        "http://localhost:8080/MINI%20PROJECTS/server/getAndUpdate.php",
        body
      );
      return JSON.parse(result);
    } catch (err) {
      console.log(JSON.parse(err));
    }
  }

  async function getDetailsByField(id,field) {
    const body = {
      id,
      operation: field,
    };
    try {
      const result = await post(
        "http://localhost:8080/MINI%20PROJECTS/server/getAndUpdate.php",
        body
      );
      return JSON.parse(result);
    } catch (err) {
      console.log(JSON.parse(err));
    }
  }

async function updatemarks(id,marks){
    const body ={
        id,
        marks
}
console.log(body);
try {
const result =await post(`http://localhost:8080/MINI%20PROJECTS/server/updateMarks.php`,body)
return JSON.parse(result)
} catch (error) {
    return error
}

}