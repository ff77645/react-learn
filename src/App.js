import "./styles.css";
import React from "react";
import InputWrap from "./state-rise";
function Welcom(props) {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.tell}</li>
    </ul>
  );
}

function CreaetList(props) {
  const list = Array.from({ length: props.length });
  return (
    <ul>
      {list.map((_, index) => (
        <li key={index}>{index + 1}</li>
      ))}
    </ul>
  );
}

class WebcomClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: Date.now(),
      bool: false
    };
  }
  tick() {
    this.setState({
      date: Date.now()
    });
  }
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <ul>
        <li>name: {this.props.name}</li>
        <li>des: {this.props.tell}</li>
        <li>dete: {this.state.date}</li>
        <li>bool: {this.bool && 123}</li>
      </ul>
    );
  }
}

class ButtonBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showBtn: false
    };
  }
  handlerClick = () => {
    this.setState({
      showBtn: true
    });
  };
  render() {
    return this.state.showBtn ? (
      <h1>你是猪</h1>
    ) : (
      <button onClick={this.handlerClick}>点我点我</button>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <InputWrap />
      {/* <ButtonBox />
      <Welcom name="tom" tell="welcom o" />
      <WebcomClass name="jerry" tell="welcom o" />
      <CreaetList length={8} /> */}
    </div>
  );
}
