import React from "react";
import { useAtomValue, useSetAtom } from "jotai";
import { modalAtom, formTypeAtom } from "../State";
import { useState } from "react";
import "./SignInForm.css";
import { signUp, signIn } from "../services/authService.js";
import { GrClose } from "react-icons/gr";


function SignInForm() {
  const setFormType = useSetAtom(formTypeAtom);
  const formType = useAtomValue(formTypeAtom);
  const setIsOpen = useSetAtom(modalAtom);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setIsOpen("close");
    if (formType === "signin") {
     await signIn(email, password);
    }
    await signUp (username, email, password);
  };

  console.log(username);

  return (
    <div className="modal-conatiner ">
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
        <button className="block bg-blue-500 text-white w-full rounded-sm py-2">
          {formType === "signup" ? "Sign Up" : "Sign In"}
        </button>
        <div className="text-center mt-2  text-fluo-green">
          {formType === "signup" && (
            <div>
              <p>Already have an account?</p>
              <button onClick={() => setFormType("signin")}>
                Sign In here
              </button>
            </div>
          )}
          {formType === "signin" && (
            <div>
              <p>Don't have an account?</p>
              <button onClick={() => setFormType("signup")}>
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
