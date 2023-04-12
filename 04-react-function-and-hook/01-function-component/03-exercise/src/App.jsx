import React, { useState } from "react";

function App() {
  const [name, setName] = useState("Touch");
  const [bio, setBio] = useState("JSD4 Toxic boy");

  return (
    <>
      <img
        src="../src/assets/touch-profile-pic.JPG"
        alt=""
        style={{ height: "150px", borderRadius: "16px" }}
      />
      <Info name={name} bio={bio} />
      <Social />
    </>
  );
}

function Info(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.bio}</p>
    </div>
  );
}

function Social() {
  return (
    <div>
      <a href="" style={{ marginRight: "8px" }}>
        Facebook
      </a>
      <a href="https://github.com/ryosantouchh">GitHub</a>
    </div>
  );
}

export default App;
