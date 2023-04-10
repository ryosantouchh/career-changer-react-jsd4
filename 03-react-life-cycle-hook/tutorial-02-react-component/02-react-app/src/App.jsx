import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 30,
    };
    this.handleClickIncrement = this.handleClickIncrement.bind(this);
  }

  handleClickIncrement() {
    // how did 'prev' know this.state ?? what's behind the scene ??
    this.setState((prevState) => ({
      temperature: prevState.temperature + 1,
    }));
  }

  // lexically scoped >> refer parent
  handleClickDecrement = () => {
    if (this.state.temperature > 0) {
      this.setState({ temperature: this.state.temperature - 1 });
      // shallow merge
    }
  };

  render() {
    return (
      <div id="app">
        <Header temperature={this.state.temperature} name="T" />
        {/* this.props = { temperature : this.state.temperature, name: "T"  } */}
        <Content temperature={this.state.temperature} />
        <Footer
          handleClickIncrement={this.handleClickIncrement}
          handleClickDecrement={this.handleClickDecrement}
        />
        <Challenge temperature={this.state.temperature} />
      </div>
    );
  }
}

// Code below!!!!

class Header extends React.Component {
  render() {
    const { temperature } = this.props;

    return (
      <header>
        <span>Turn on / off</span>
        <p>Current Temperature: {temperature}</p>
      </header>
    );
  }
}

class Content extends React.Component {
  render() {
    const { temperature } = this.props;

    return (
      <main>
        <Temperature temperature={temperature} />
      </main>
    );
  }
}

class Temperature extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { temperature } = this.props;

    return (
      <div id="temperature">
        <span>{temperature} Oc</span>
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    const { handleClickIncrement, handleClickDecrement } = this.props;
    // this.props = { handleClickIncrement : ... , handleClickDecrement : ... }

    return (
      <footer>
        <button
          style={{ backgroundColor: "lightgreen" }}
          onClick={handleClickIncrement}
        >
          Up
        </button>
        <button
          style={{ backgroundColor: "yellow" }}
          onClick={handleClickDecrement}
        >
          Down
        </button>
      </footer>
    );
  }
}

class Challenge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Touch",
    };
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <h2>Challenge by : {this.state.name}</h2>
          <span>
            {this.props.temperature <= 23 ? "ประเทศไทยร้อนชิบหาย!!" : false}
            {this.props.temperature >= 27
              ? "แน่ใจหรอว่าจะเปิดแอร์แบบนี้ที่ประเทศไทย"
              : false}
          </span>
        </div>
      </div>
    );
  }
}

export default App;
