import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loggedUser, setLoggedUser] = useState("");

  const LoggedUser = async () => {
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
    console.log(content);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
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
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
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
      const content = await response.json();
      console.log(content);
    } catch (error) {
      console.log(error);
    }
  };
  const LogOut = async () => {
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
  };

  return (
    <div className="App">
      <form className="signup" onSubmit={handleSignup}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
      </form>
      <hr />
      <form className="login" onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={LoggedUser}>CLick get req</button>
      <button onClick={LogOut}>Log Out</button>
    </div>
  );
}

export default App;
