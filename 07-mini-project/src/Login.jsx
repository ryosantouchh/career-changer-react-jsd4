import Layout from "./Layout";
import { useContext, useState } from "react";
import { Context } from "./UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // You have to pass data to signup() function to successful login.
  const { login } = useContext(Context);
  // example of login with button onClick event listerner.
  // <button onClick={() => login({
  //     username: 'mock',
  //     password: 'mock',
  // })}>Text</button>

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Layout>
      <form className="login-container">
        <div>
          <label htmlFor="password">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={(e) => {
              // เลือกใช้ อย่างใดอย่างนึง e.preventDefault หรือ navigate ก็ได้
              e.preventDefault();
              login({ username, password });
              // navigate("/");
            }}
          >
            Login
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Login;
