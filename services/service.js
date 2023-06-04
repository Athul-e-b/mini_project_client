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

export async function Registration([name, phone, email, password]) {
  const body = {
    name,
    phone,
    email,
    password,
  };
  let result = await post(
    "http://localhost:8080/MINI%20PROJECTS/server/registration.php",
    body
  );
  return JSON.parse(result);
}

export async function Login([email, password]) {
  console.log("login called");
  const body = {
    email,
    password,
  };
  let result = await post(
    "http://localhost:8080/MINI%20PROJECTS/server/login.php",
    body
  );
  console.log(result);
  return JSON.parse(result);
}

export async function getDetails(id) {
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
