import React, { useState } from "react";

function App() {
  // adding state here.
  const [state, setState] = useState("");

  const handleClick = (value) => {
    setState(value);
  };

  return (
    <div>
      <button onClick={() => handleClick("Fullname")}>Fullname</button>
      <button onClick={() => handleClick("Age")}>Age</button>
      <button onClick={() => handleClick("Picture")}>Picture</button>
      <DisplayInfo state={state} name="kong" age="26" />
    </div>
  );
}

function DisplayInfo(props) {
  const { state, name, age } = props;
  // props = { state: ... , name="kong", age="26" }

  let content;
  if (state === "Fullname") {
    content = <h2>Touch Aka Toxic Boi</h2>;
  } else if (state === "Age") {
    content = <h2>27</h2>;
  } else if (state === "Picture") {
    content = <img src="https://via.placeholder.com/150" alt="Placeholder" />;
  } else {
    content = <p>Please select an option.</p>;
  }

  return <div>{content}</div>;
}

export default App;
