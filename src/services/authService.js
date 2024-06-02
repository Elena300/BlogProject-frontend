
import { toast } from "react-toastify";

//submit the data to backend and receive the token
export async function signUp(username, email, password) {
  try {
    const response = await fetch(
      "https://goblogpost-867025111c75.herokuapp.com/api/user/signup",
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
    console.log(data);
    const requiredKey = ["id", "username", "email",];
    
    if (typeof data === 'object' && data !== null) {
     const hasAllKeys = Object.key(data).every(key => requiredKey.includes(key))
     hasAllKeys === true ? toast.info("You are signed up") : toast.info ("Try again")
      }
  } catch (error) { 
    console.log(error)
    }
}

/* good response : {
    "id": 13,
    "username": "test18",
    "email": "test18@test.com"
}*/


export async function signIn(email, password) {
  try {
    const response = await fetch(
      "https://goblogpost-867025111c75.herokuapp.com/api/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.message === "Login successful")
      {const userData = await loggedUser();
        return userData
      }
  } catch (error) {
    if (error.json) {
      error.json().then((errorMessage) => {
        console.error(errorMessage);
        if (errorMessage.error === "Invalid password") {
          toast.error("Invalid password. Please, try again.");
        } 
        else {
          toast.error("An error occurred. Please, try again.");
        }
      });
    } else {
      console.error(error);
      toast.error("An error occurred. Please, try again.");
    }
  }
}
//{"message": "Login successful"}


 export const loggedUser = async () => {
  const response = await fetch(
    "https://goblogpost-867025111c75.herokuapp.com/api/user",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const content = await response.json();
  return content
  }

  //{"message": "Unauthorized"}
  /* {id: 14, username: 'test17', email: 'test17@test.com'}
     email: "test17@test.com"
      id: 14
      username: "test17"*/


  export async function checkLogin() {
    const userData = await loggedUser()
    if (userData.message === 'Unauthorized') 
      {toast.info("You are not authorized, please SingIn"); return}
    if (typeof userData.id === 'number' && typeof userData.username === 'string')
      {
        return userData
      }
      else {toast.info("Error")}
    }

export async function LogOut() {
  const response = await fetch(
    "https://goblogpost-867025111c75.herokuapp.com/api/user/logout",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );
  const content = await response.json();
  console.log(content);
  if (content.message === "Logout successful") {
    toast.info("You are logged out")
  }
  return content;
}

//"message": "Logout successful"






///test17 test17@test.com 7890Azer&
