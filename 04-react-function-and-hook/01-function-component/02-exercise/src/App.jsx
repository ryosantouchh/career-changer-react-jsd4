import React, { useState } from "react";

function App() {
  const [temp, setTemp] = useState(25);

  const handleClickIncrement = () => {
    setTemp((prev) => (prev = prev + 1));
  };

  const handleClickDecrement = () => {
    if (temp > 0) {
      setTemp((prev) => (prev -= 1));
    }
  };

  return (
    <div id="app">
      <Header temp={temp} />
      <Content temp={temp} />
      <Footer
        handleClickIncrement={handleClickIncrement}
        handleClickDecrement={handleClickDecrement}
      />
    </div>
  );
}

function Header(props) {
  return (
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {props.temp}</p>
    </header>
  );
}

function Content(props) {
  return (
    <main>
      <Temperature temp={props.temp} />
    </main>
  );
}

function Temperature(props) {
  return (
    <div id="temperature">
      <span>{props.temp} Oc</span>
    </div>
  );
}

function Footer(props) {
  const { handleClickIncrement, handleClickDecrement } = props;

  return (
    <footer>
      <button onClick={handleClickIncrement}>Up</button>
      <button onClick={handleClickDecrement}>Down</button>
    </footer>
  );
}

export default App;
