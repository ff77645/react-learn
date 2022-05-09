import React from "react";

const units = {
  y: "元",
  j: "角"
};

const toJ = (val) => {
  if (val === "") return "";
  return +val * 10;
};
const toY = (val) => {
  return +val / 10;
};

class InputCom extends React.Component {
  onChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const unit = units[this.props.unit];
    return (
      <>
        <input value={this.props.value} onChange={this.onChange} />
        <span>单位：{unit}</span>
      </>
    );
  }
}

class InputWrap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
      unit: "y"
    };
  }
  onChangeY = (val) => {
    this.setState({
      val,
      unit: "y"
    });
  };
  onChangeJ = (val) => {
    this.setState({
      val,
      unit: "j"
    });
  };
  render() {
    const unit = this.state.unit;
    const val = this.state.val;
    const valueJ = unit === "y" ? toJ(val) : val;
    const valueY = unit === "j" ? toY(val) : val;
    return (
      <>
        <InputCom unit="y" value={valueY} onChange={this.onChangeY} />
        <br />
        <InputCom unit="j" value={valueJ} onChange={this.onChangeJ} />
      </>
    );
  }
}

export default InputWrap;
