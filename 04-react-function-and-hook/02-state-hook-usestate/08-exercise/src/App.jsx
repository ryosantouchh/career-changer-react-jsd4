import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleChangeBio = (event) => {
    setBio(event.target.value);
  };

  return (
    <div>
      <img src="https://via.placeholder.com/150" alt="placeholder" />
      <Input
        name={name}
        bio={bio}
        setName={setName}
        // setBio={setBio}
        handleChangeBio={handleChangeBio}
      />
      <Info name={name} bio={bio} />
      <Social />
    </div>
  );
};

const Input = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <input
        type="text"
        onChange={(e) => props.setName(e.target.value)}
        value={props.name}
        placeholder="enter your name here"
      />
      <input
        type="text"
        onChange={props.handleChangeBio}
        value={props.bio}
        placeholder="enter your bio here"
      />
    </div>
  );
};

const Info = (props) => {
  return (
    <div>
      <h1>{props.name ? props.name : "Your name here"}</h1>
      <p>{props.bio ? props.bio : "Write your bio here"}</p>
    </div>
  );
};

const Social = () => {
  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <a href="">Facebook</a>
      <a href="">GitHub</a>
    </div>
  );
};

export default App;
