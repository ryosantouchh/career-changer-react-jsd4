import Layout from "./Layout";
import { Context } from "./UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [organization, setOrganization] = useState("");
  const navigate = useNavigate();
  // You have to pass data to signup() function to successful registration.
  const { signup } = useContext(Context);
  // example of signup with button onClick event listerner.
  // <button onClick={() => signup({
  //     username: 'mock',
  //     password: 'mock',
  //     fullname: 'mock',
  //     organization: 'mock'
  // })}>Text</button>

  const handleOnChange = (setStateFn, event) => {
    setStateFn(event);
  };

  return (
    <Layout>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="username"
            onChange={(e) => handleOnChange(setUsername, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => handleOnChange(setPassword, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="fullname">Fullname</label>
          <input
            type="text"
            id="fullname"
            placeholder="fullname"
            onChange={(e) => handleOnChange(setFullname, e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="organization">Orginazation</label>
          <input
            type="text"
            id="organization"
            placeholder="organization"
            onChange={(e) => handleOnChange(setOrganization, e.target.value)}
          />
        </div>
        <button
          onClick={() => {
            if (username && password && fullname && organization) {
              signup({ username, password, fullname, organization });
              navigate("/");
            } else {
              alert("Please fill all required box");
            }
          }}
        >
          Sign Up
        </button>
      </form>
    </Layout>
  );
};

export default Signup;
