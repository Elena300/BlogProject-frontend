import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

function RegisterAndLoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState("register");
  const { setLoggedUsername, setId } = useContext(UserContext);
  const url = loginOrRegister === "register" ? "register" : "login";
  async function handleSubmit(ev) {
    ev.preventDefault();
    const response = await axios.post(url, { username, password });
    setLoggedUsername(username);
    setId(response.data.id);
  }
  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form onSubmit={handleSubmit} className="w-64 mx-auto mb-12">
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
          className="block border border-gray-300 w-full rounded-sm p-2 mb-2"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          className="block border border-gray-300 w-full rounded-sm p-2 mb-2"
        />
        <button className="block bg-blue-500 text-white w-full rounded-sm py-2">
          {loginOrRegister === "register" ? "Register" : "Login"}
        </button>
        <div className="text-center mt-2">
          {loginOrRegister === "register" && (
            <div>
              Already registered?
              <button onClick={() => setLoginOrRegister("login")}>
                Login here
              </button>
            </div>
          )}
          {loginOrRegister === "login" && (
            <div>
              Don't have an account?
              <button onClick={() => setLoginOrRegister("register")}>
                Register
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

export default RegisterAndLoginForm;
