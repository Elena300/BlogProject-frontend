

//submit the data to backend and receive the token
export async function signUp(username, email, password) {
  const response = await fetch(
    "https://project-blog-app-55a37b38176d.herokuapp.com/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    }
  );
  const data = await response.json();
  return data;
}

export async function signIn(email, password) {
  const response = await fetch(
    "https://project-blog-app-55a37b38176d.herokuapp.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }
  );
  const data = await response.json();
  console.log(data);
  return data;
}

//retrive the token from the object

//const token = signUp.accessToken;

//error: "Email or Username already used";
//accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsImlhdCI6MTcxNTcyMDI3MywiZXhwIjoxNzE1ODA2NjczfQ.OUBK2dQos5rbeDaBKPJuw6eU296bSWv9xQ6RyAYXjNk";
//email: "a@test.com";
//username: "a";