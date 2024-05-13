import React from "react";
import { useSetAtom } from "jotai";
import { modalAtom, formTypeAtom } from "../State";
import { useState } from "react";
import "./SignInForm.css";

function SignInForm() {
  const setFormType = useSetAtom(formTypeAtom);
  const setIsOpen = useSetAtom(modalAtom);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = async () => {
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
    console.log(data);
  };

  return (
    <div className="modal-conatiner">
      <h2 className="text-center text-2xl mb-4">
        Sign {formTypeAtom === "signup" ? "Up" : "In"}
      </h2>
      <form
        onSubmit={async () => {
          setIsOpen(false);
          await signUp();
        }}
        className="w-64 mx-auto mb-12"
      >
        <input
          type="text"
          placeholder="username"
          className="block border border-gray-300 w-full rounded-sm p-2 mb-2"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log(username);
          }}
        />
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
          {formTypeAtom === "signup" ? "Sign Up" : "Sign In"}
        </button>
        <div className="text-center mt-2">
          {formTypeAtom === "signup" && (
            <div>
              <p>Already have an account?</p>
              <button onClick={() => setFormType("signin")}>
                Sign In here
              </button>
            </div>
          )}
          {formTypeAtom === "login" && (
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
