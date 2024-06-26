
import { useAtom, useSetAtom } from "jotai";
import {
  modalAtom,
  formTypeAtom,
  userNameAtom,
} from "../State";
import { useState } from "react";
import "./SignInForm.css";
import { signUp, signIn } from "../services/authService.js";
import { GrClose } from "react-icons/gr";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

function SignInForm() {
  const [formType, setFormType] = useAtom(formTypeAtom);

  const setIsOpen = useSetAtom(modalAtom);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const setLoggedUserName = useSetAtom(userNameAtom);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (formType === "signin") 
        {
          const loggedUser = await signIn(email, password);
          console.log(loggedUser);
          setLoggedUserName(loggedUser.username);
          Cookies.set("isLoggedIn", "true", { expires: 7 });
          Cookies.set("username", loggedUser.username, { expires: 7 }); // Set username in cookies
          Cookies.set("userId", loggedUser.id, { expires: 7 });
          toast.success("Log in successful");
        }
    else {
      await signUp(username, email, password);
      toast.success("Sign up successful");
    }
    setIsOpen("close");
}

  
  return (
    <div className="modal-conatiner border border-fluo-green ">
      <button
        className="close-btn text-fluo-green absolute top-0 right-0 p-2 border-2 border-fluo-green"
        onClick={() => setIsOpen(false)}
      >
        <GrClose />
      </button>
      <h2 className="text-center text-2xl mb-4  text-fluo-green">
        Sign {formType === "signup" ? "Up" : "In"}
        <button> </button>
      </h2>
      <form onSubmit={handleSubmit} className="w-64 mx-auto mb-12">
        {formType === "signup" && (
          <input
            type="text"
            placeholder="username"
            className="block border border-gray-300 w-full rounded-sm p-2 mb-2"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        )}
        <input
          type="text"
          placeholder="e-mail"
          className="block border border-gray-300 w-full rounded-sm p-2 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="block border border-gray-300 w-full rounded-sm p-2 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="block text-fluo-green w-full py-2  bg-techno-black font-space-grotesk-light uppercase text-base border border-solid border-fluo-green hover:bg-fluo-green hover:text-techno-black cursor-pointer">
          {formType === "signup" ? "Sign Up" : "Sign In"}
        </button>
        <div className="text-center mt-2  text-fluo-green">
          {formType === "signup" && (
            <div>
              <p>Already have an account?</p>
              <button
                className="hover:decoration-solid hover:underline"
                onClick={() => setFormType("signin")}
              >
                Sign In here
              </button>
            </div>
          )}
          {formType === "signin" && (
            <div>
              <p>Do not have an account?</p>
              <button
                className="hover:decoration-solid hover:underline"
                onClick={() => setFormType("signup")}
              >
                Sign Up here
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
